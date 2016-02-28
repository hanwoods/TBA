var ERRORS_KEY = 'addFeedErrors';

Template.addfeed.onCreated(function() {
    Session.set(ERRORS_KEY, {});
});

Template.addfeed.helpers({

});

Template.addfeed.events({
    'click .js-facebook': function() {
        console.log("Facebook");
    },
    'click .js-twitter': function() {
        console.log("Twitter");
    },
    'click .js-instagram': function() {
        console.log("Instagram");
    },
    'click .js-tumblr': function() {
        console.log("Tumblr");
    },
    'click .js-reddit': function() {
        console.log("Reddit");
    }
});