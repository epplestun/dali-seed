import {
  RouterConfig,
  View,
  Runnable,
  Async,
} from 'dali';

import {DataShow} from 'directives/DataShow';
import {MyComponent} from './MyComponent';

@Async
class MyTask {
  execute(a, b) {
    for(var i = 0; i < 20000; i++) {
      console.log(i);
    }

    return a + b;
  }
}

/*
@i18nConfig({

})
*/
@RouterConfig({
  title: 'Module 3',
  path : '/m3'
})
@View({
  template: '{{test}}<h2>Custom directive</h2><button _click="toggle()">Show component</button><h2>Custom component</h2><my-component *show="!!show"></my-component>'
})
@Runnable
@Inject(MyComponent)
export class Module3 {
  @Bindable
  show = true;

  toggle() {
    this.show = !this.show;

    let task = new MyTask();
    task.execute(2, 2).then((result) => {
      console.log('Result', result);
    });
  }
}