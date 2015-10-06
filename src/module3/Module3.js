import {
  RouterConfig,
  View,
  Runnable
} from 'dali';

import {DataShow} from 'directives/DataShow';

@RouterConfig({
  title: 'Module 3',
  path : '/m3'
})
@View({
  template: '<h2>Custom directive</h2><p *show="show">Text</p><button _click="toggle()">Click me!</button>'
})
@Runnable
export class Module3 {
  @Bindable
  show = true;

  toggle() {
    this.show = !this.show;
  }
}