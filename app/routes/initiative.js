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

    //cancel button
    cancelEdit: function() {
      var initiative = this.get('controller.model');
      this.transitionTo('initiatives');
      //this.transitionToRoute('initiative'); // page still has the edit box and buttons
      // this.refresh();
      //Ember.$.egtScript('/templates/initiative.emblem');
      //document.execCommand('Stop');
    },

    //update edited changes
    updateEdit: function() {
      var _this = this,
          content = this.controller.content,
          initiative = this.get('controller.model');
      debugger;
      this.store.createRecord('initiative');
      initiative.save().then(function(model) {
        _this.transitionTo('initiatives');
      });
    }
  }

});

export default InitiativeRoute;
