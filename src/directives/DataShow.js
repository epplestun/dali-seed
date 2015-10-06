import {
  Directive,
  Inject,
  Evaluator
} from 'dali';

@Directive({
  name: 'data-show'
})
@Inject(Evaluator)
class DataShow {
  constructor(evaluator) {
    this.evaluator = evaluator;
  }

  render(element, data, value) {
    element.style.display = this.evaluator.eval(data, value) ? 'block' : 'none';
  }
}