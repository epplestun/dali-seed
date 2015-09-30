import {HTTP} from 'dali/dali';

export class Service {
  get() {
    return HTTP.get('data/data.json');
  }
}