import {HTTP} from 'dali';

export class Service {  
  get() {
    return HTTP.get('data/data.json');
  }

  add() {
    return new Promise((resolve) => {
      console.log('service.add', arguments);
      resolve();
    });
  }

  remove() {
    return new Promise((resolve) => {
      console.log('service.remove', arguments);
      resolve();
    });
  }

  clean() {
    return new Promise((resolve) => {
      console.log('service.clean', arguments);
      resolve();
    });

  }

  load() {
    return new Promise((resolve) => {
      console.log('service.load', arguments);
      resolve();
    });

  }
}