import {
  RouterConfig,
  View,
  Runnable,
  Bindable
} from 'dali';

import {Service} from 'Service';
import {Todo} from 'Todo';


@RouterConfig({
  title: 'Module 2',
  path: '/m2'
})
@View({
  templateUrl: 'module2/module2_view.html'
})
@Runnable
@Inject(Service)
export class Module2 {
  @Bindable
  name = "Service example";

  @Bindable
  todos = [];

  constructor(service) {
    this.service = service;
    this.service.get().then(this.insert.bind(this));
  }

  refresh() {
    this.service.get().then((data) => {
      this.todos = [];

      JSON.parse(data).forEach(item => {
        this.todos.push(Todo.fromJson(item));
      }.bind(this));
    }.bind(this));
  }

  insert(data) {
    JSON.parse(data).forEach(item => {
      this.todos.push(Todo.fromJson(item));
    }.bind(this));
  }

  add() {
    this.service.add().then(this.refresh.bind(this));
  }

  remove(item, index) {
    this.service.remove(index, 1).then(this.refresh.bind(this));
  }

  clean() {
    this.service.clean().then(this.refresh.bind(this));
  }

  load(item) {
    this.service.load();
  }
}