import $ from 'jquery';
import Model from './Model';

const renderers = [];

class Renderer {
  constructor(model, el) {
    if (!model || !(model instanceof Model) || !el) {
      throw new Error('Must instantiate with (1) instance of Model and (2) valid DOM selector. If using super(), make sure to pass those parameters in.');
    }

    this.model = model;
    this.model.bindView(this);
    this.$el = $(el);

    if (
      !this.template || 
      typeof this.template !== 'function' ||
      typeof this.template() !== 'string'
    ) {
      throw new Error('Classes that inherit Renderer REQUIRE a template() function that returns an HTML string');
    }

    if (this.getEvents) {
      const events = this.getEvents();
      const eventKeys = Object.keys(events);

      eventKeys.forEach(eventString => {
        const [ eventName, selector ] = eventString.split(' ');
        const fn = this[events[eventString]];
        this.$el.on(eventName, selector, fn.bind(this));
      }); 
    }
    
    renderers.push(this);
    this.render();
  } 

  renderAll() {
    renderers.forEach(renderer => renderer.render());
  }

  render() {
    this.$el.html(this.template());
  }
}

export default Renderer;