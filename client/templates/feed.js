var ERRORS_KEY = 'feedErrors';

Template.feed.onCreated(function() {
    Session.set(ERRORS_KEY, {});

    if (Meteor.user().profile.instagramAccessToken) {
        var instagramAccessToken = Meteor.user().profile.instagramAccessToken[0];
        Meteor.call("retrieveInstagramFeed", instagramAccessToken, function(error, results) {
            console.log(results.content); //results.data should be a JSON object
        });
    }

});

Template.feed.helpers({

});

Template.feed.events({

});
