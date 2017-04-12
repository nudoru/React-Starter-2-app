import Task from 'data.task';

export const fetchConfigData = () => {
  return new Task((reject, resolve) => {
    fetch('config.json')
      .then(res => res.json().then(json => {
        console.log('Config loaded ',json);
        resolve(json);
      }))
      .catch((err) => {
      console.warn('Error loading configuration', err);
      reject(err);
    });
  });
};