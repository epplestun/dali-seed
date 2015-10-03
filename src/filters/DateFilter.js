import {Filter} from 'dali';

@Filter
export class DateFilter {
  render(value, extra) {
    return value.toJSON();
  }
}