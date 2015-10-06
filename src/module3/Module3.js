import {
  RouterConfig,
  View,
  Runnable
} from 'dali';

import {DataShow} from 'directives/DataShow';
import {MyComponent} from './MyComponent';

@RouterConfig({
  title: 'Module 3',
  path : '/m3'
})
@View({
  template: '<h2>Custom directive</h2><button _click="toggle()">Show component</button><h2>Custom component</h2><my-component *show="!!show"></my-component>'
})
@Runnable
@Inject(MyComponent)
export class Module3 {
  @Bindable
  show = true;

  toggle() {
    this.show = !this.show;
  }
}