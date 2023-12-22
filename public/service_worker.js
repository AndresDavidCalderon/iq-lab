/* eslint-disable no-restricted-globals */
import questions from '../src/views/take_test/questions/question_data';

self.addEventListener('install', () => {
  console.log('service worker installed');
});
// eslint-disable-next-line no-undef

self.addEventListener('activate', () => {
  console.log('service worker activated');
});

self.addEventListener('fetch', (e) => {
  console.log('interfiering in fetch');
  e.respondWith(fetch(e.request).then(async (response) => {
    console.log('Fetched succesfully!');
    caches.open('backup').then((cache) => {
      cache.put(e.request, response.clone());
    });

    if (!caches.has('questions')) {
      const questionResources = [];
      const baseURL = './test_resources/';
      questions.forEach((question) => {
        if ('name' in question) {
          if (question.answerShape === 'multiple_files') {
            const format = 'format' in question ? question.format : 'png';
            questionResources.push(`${baseURL}${question.name}/question.${format}`);
            if (!Array.isArray(question.answers)) {
              questionResources.push(`${baseURL}${question.name}/a.${format}`);
              questionResources.push(`${baseURL}${question.name}/b.${format}`);
              questionResources.push(`${baseURL}${question.name}/c.${format}`);
              questionResources.push(`${baseURL}${question.name}/d.${format}`);
            }
          } else {
            questionResources.push(`${baseURL}${question.name}/drawing.svg`);
          }
        }
      });
      questionResources.forEach(async (url) => {
        let questionResource;
        try {
          questionResource = await fetch(url);
        } catch (error) {
          console.log(`question resource failed to fetch or cache resource from
          ${url}
          error ${error}`);
        }
        const questionCache = await caches.open('questions');
        questionCache.put(new Request(url), questionResource.clone());
      });
    }

    return response.clone();
  }).catch(() => {
    console.log('fetch failed, using backup');
    return caches.match(e.request);
  }));
});
