import Ember from 'ember';

var InitiativeController = Ember.ObjectController.extend({

  actions: {
    //edit button
    toggleEditing: function() {
          this.toggleProperty('isEditing');
    },

    // delete initiative
    deleteInitiative: function () {
      var initiative = this.get('model');
      initiative.deleteRecord();
      initiative.save();   
      initiative.save().then(function(model) {
        _this.transitionTo('initiative', model.get('id'));
      });   
    }
  }
});

export default InitiativeController;