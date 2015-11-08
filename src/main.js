import {
  bootstrap,
  Inject,
  Component,
  View,
  Bindable,
  Runnable,
  RouterContent,
  decorate,
  i18nConfig
} from 'dali';

import {MenuBar} from 'menu-bar/MenuBar';
import {Module1} from 'module1/Module1';
import {Module2} from 'module2/Module2';
import {Module3} from 'module3/Module3';

i18nConfig.init({
  locale: 'en-US',
  timezone: 'Europe/Madrid',
  currency: 'EUR',
  //translations: 'locale_en_US.json'
  translations: {
    en_US : {
      app : {
        title: 'My first Dali app :)',
        total: 'Total: {{total, plural, =0 { You have no new messages } =1 { You have one new message } other { You have # new messages }}}',
        gender: '{{friendGender, gender, male { Invite him } female { Invite her } other { Invite them }}}'
      }
    }
  }
});

/*
@i18nConfig({
  locale: 'en-US',
  timezone: 'Europe/Madrid',
  currency: 'EUR'
  translationUrl : 'locale_en_US.json'
})
*/
@Component({
  name: 'app'
})
@View({
  templateUrl: 'main_view.html'
})
@Runnable
@Inject(RouterContent, MenuBar)
class App {
  @Bindable
  title = "app.title";

  @Bindable
  date = new Date();

  @Bindable
  number = 100000;
}

bootstrap(App);