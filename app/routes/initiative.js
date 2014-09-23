import Ember from 'ember';

var InitiativeRoute = Ember.Route.extend({

  model: function(params) {
    return this.store.find('initiative', params.initiative_id);
  },

  actions: {
    supportIt: function() {
      var initiative = this.get('controller.model');
      initiative.set('isSupported', true)
    },

    removeSupport: function() {
      var initiative = this.get('controller.model');
      initiative.set('isSupported', false);
      this.transitionTo('initiative');
    },

    edit: function( model ) {
      console.log("kakaka", model);
      this.transitionTo( 'initiatives.new', model.copy() ); //Cannot read property 'copy' of undefined 
      //this.transitionTo( 'initiatives.new');
    },
  }

});

export default InitiativeRoute;
