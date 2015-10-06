import {
  Component,
  View,
  Bindable,
  Runnable,
} from 'dali';

@Component({
  name: 'my-component'
})
@View({
  template: '<div>{{title}}</div>'
})
export class MyComponent {
  @Bindable
  title = "My Component"
}