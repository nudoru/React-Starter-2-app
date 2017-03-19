import Task from 'data.task';
import {request} from '../utils/Rest';

export const fetchConfigData = () => {
  return new Task((reject, resolve) => {
    request({json: true, url: 'config.json'}).then((data) => {
      console.log('Config loaded ',data);
      resolve(data);
    }).catch((err) => {
      console.warn('Error loading configuration', err);
      reject(err);
    });
  });
};