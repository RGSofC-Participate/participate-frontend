import startApp from 'participate-frontend/tests/helpers/start-app';
import Resolver from 'participate-frontend/tests/helpers/resolver';

var App;

var expect = chai.expect

suite('Posting an initiative', {
  setup: function(){
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('Successfully', function(){
  visit('/').then(function() {
    click( $("a:contains('Start a new initiative')") ).then(function() {
      expect(currentURL()).to.equal('/initiatives/new');
      fillIn('div.title input', 'Public health clinic');
      fillIn('div.description textarea', 'Allocate compensation money to create a local public health clinic');
      click('form input[type=submit]').then(function() {
        // Ideally I'd prefer to:
        //   expect(currentURL()).to.equal('/initiatives/' + initiativeID);
        // but haven't found an ember equivalent of active record's Post.first.id,
        // nor a way to get at the local store and use store.all('initiative').objectAt(0).get('id').
        // Also can't get a record count yet
        expect(currentPath()).to.equal('initiatives.show');
        expect(find('.title').text()).to.equal('Public health clinic');
        expect(find('.description').text()).to.equal('Allocate compensation money to create a local public health clinic');
      });
    });
  });
});

test('With the title missing', function(){
  visit('/').then(function() {
    click( $("a:contains('Start a new initiative')") ).then(function() {
      expect($(':submit').attr('disabled')).to.equal('disabled');
      expect($("input :contains('Start a new initiative')"));
      fillIn('div.title input', '');
      fillIn('div.description textarea', 'Allocate compensation money to create a local public health clinic').then(function() {
        expect(find('.title .error').text()).to.equal("can't be blank");
      });  
    });
  });
});