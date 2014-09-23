import Ember from 'ember';

var InitiativeController = Ember.ObjectController.extend({
  //needs: ['somecontroller'],

  //edit initiaitve
  someProperty: "lalalal",

  actions: {
    //edit button
    toggleEditing: function() {
          this.toggleProperty('isEditing');
    },
    //submit edited changes
    submit: function() {  
      var _this = this;
      debugger;
      var initiative = this.modelFor('initiative');
      initiative.save().then(function(model) {
        _this.transitionTo('initiative', model.get('id'));
      });
    },

    // delete initiative
    deleteInitiative: function () {
      var initiative = this.get('model');
      //debugger;
      initiative.deleteRecord();
      initiative.save();      
    }
  }
});

export default InitiativeController;