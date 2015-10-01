import {
  RouterConfig,
  View,
  Runnable,
  Bindable
} from 'dali/dali';

@RouterConfig({
  title: 'Module 2',
  path : '/m2'
})
@View({
  templateUrl: 'module2/module2_view.html'
})
@Runnable
export class Module2 {
  @Bindable
  title = "Module 2 title";
}