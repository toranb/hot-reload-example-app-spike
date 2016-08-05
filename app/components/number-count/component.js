import Ember from 'ember';
import hbs from 'htmlbars-inline-precompile';
import connect from 'ember-redux/components/connect';

var stateToComputed = (state) => {
  return {
    number: state.number
  };
};

var dispatchToActions = (dispatch) => {
  return {
    add: () => dispatch({type: 'ADD'})
  };
};

var NumbersComponent = Ember.Component.extend({
    layout: hbs`
      <h1>number is {{number}}</h1>
      <button onclick={{action "add"}}>add</button>
    `
});

export default connect(stateToComputed, dispatchToActions)(NumbersComponent);
