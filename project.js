if(Meteor.isClient) {
  Template.email.events({
    'click #btn': function () {

      Meteor.call('sendEmail', $('#email').val());
      Session.set('done', true);
    }
  });
  Template.email.done = function () { return Session.equals('done', true); }
}

if(Meteor.isServer) {

  Meteor.methods({
    sendEmail: function(email) {


    }
  });
}
