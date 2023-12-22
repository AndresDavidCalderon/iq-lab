/* eslint-disable no-restricted-globals */
import questions from '../src/views/take_test/questions/question_data';

let offline = false;

self.addEventListener('install', () => {
  console.log('service worker installed');
});
// eslint-disable-next-line no-undef

self.addEventListener('activate', () => {
  console.log('service worker activated');
  offline = false;
});

const checkConnectivity = () => {
  fetch('.').then(() => {
    offline = false;
    console.log('reconnected!');
  }).catch(() => {
    setTimeout(checkConnectivity, 10);
  });
};

self.addEventListener('fetch', (e) => {
  console.log('interfiering in fetch');

  if (offline) {
    console.log('assuming were offline, not trying fetch.');
    e.respondWith(caches.match(e.request));
    return;
  }

  e.respondWith(fetch(e.request).then(async (response) => {
    console.log('Fetched succesfully!');
    const cache = await caches.open('backup');
    cache.put(e.request, response.clone());

    if (!await caches.has('questions')) {
      console.log('creating question backup');
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
    console.log('using fallbacks from now on');
    offline = true;
    setTimeout(checkConnectivity, 10);
    return caches.match(e.request);
  }));
});
