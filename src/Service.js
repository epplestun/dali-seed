import {HTTP} from 'dali';

export class Service {  
  get() {
    return HTTP.get('data/data.json');
  }

  add() {
    console.log('service.add', arguments);
  }

  remove() {
    console.log('service.remove', arguments);
  }

  clean() {
    console.log('service.clean', arguments);
  }

  load() {
    console.log('service.load', arguments);
  }
}