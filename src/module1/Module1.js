import {
  RouterConfig,
  View,
  Runnable,
  Inject
} from 'dali';

import {DateFilter} from 'filters/DateFilter';
import {Todo} from 'Todo';

@RouterConfig({
  title: 'Module 1',
  default: true,
  path : '/m1'
})
@View({
  templateUrl: 'module1/module1_view.html'
})
@Runnable
export class Module1 {  
  @Bindable
  name = "InMemory example";

  @Bindable
  todos = [];

  add() {
    this.todos.push(Todo.fromJson({
      title: this.item,
      date: new Date()
    }));
  }

  remove(item, index) {
    this.todos.splice(index, 1);
  }

  clean() {
    while(this.todos.length > 0) {
      this.todos.splice(0, 1);
    }
  }

  load(item) {
    console.log('load ...', item);
  }
}