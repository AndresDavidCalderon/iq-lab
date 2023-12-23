import * as fs from 'fs';
import * as path from 'path';
import { pathToFileURL } from 'url';
import { SVG, registerWindow } from '@svgdotjs/svg.js';
import { createSVGWindow } from 'svgdom';

const questions = (await import(pathToFileURL('./src/views/take_test/questions/question_data.js'))).default;

const window = createSVGWindow();
const { document } = window;

registerWindow(window, document);

const { test, expect } = import.meta.vitest;
test('Check if all questions have the requiered data, and it is of the correct type.', () => {
  expect(Array.isArray(questions)).toBe(true);
  questions.forEach((question) => {
    expect(typeof question).toBe('object');

    expect(typeof question.difficulty).toBe('number');

    if (question.questionType !== 'image_piece') {
      expect(question.explanation).toBeDefined();
    }
    if (question.questionType === undefined || question.questionType !== 'text') {
      expect(typeof question.name).toBe('string');
      console.log(`inspecting question ${question.name}`);
    } else {
      expect(typeof question.statement).toBe('string');
      expect(Array.isArray(question.answers)).toBe(true);
    }
  });
});

test('Check if all SVG questions have the necesary SVG groups', () => {
  questions.forEach((question) => {
    if (question.answerShape === undefined && question.statement === undefined) {
      const filePath = path.resolve(__dirname, `../public/test_resources/${question.name}/drawing.svg`);
      const svgString = fs.readFileSync(filePath).toString();
      const elements = SVG();
      elements.svg(svgString);
      const groups = ['a', 'b', 'c', 'd', 'question'];
      groups.forEach((groupName) => {
        const group = elements.findOne(`#${groupName}`);
        if (group === null) {
          console.log(`Group not found on question ${question.name}`);
        }
        expect(group).not.toBe(null);
      });
    }
  });
});
