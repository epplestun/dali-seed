import {
  RouterConfig,
  View,
  Runnable,
  Bindable,
  Filter
} from 'dali/dali';

import {Service} from 'Service';

@Filter
class JsonFilter {
  render(value, extra) {
    return JSON.stringify(value, null, ' ');
  }
}

@RouterConfig({
  title: 'Module 2',
  path : '/m2'
})
@View({
  templateUrl: 'module2/module2_view.html'
})
@Runnable
@Inject(Service)
export class Module2 {
  @Bindable
  name = "Service example";

  constructor(service) {
    this.service = service;
  }

  add() {
    this.service.add();
  }

  remove(item, index) {
    this.service.remove(index, 1);
  }

  clean() {
    this.service.clean();
  }

  load(item) {
    this.service.load();
  }
}