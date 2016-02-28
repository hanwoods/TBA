var ERRORS_KEY = 'feedErrors';
var posts;

Template.feed.onCreated(function() {
    Session.set(ERRORS_KEY, {});

    if (Meteor.user().profile.instagramAccessToken) {
        var instagramAccessToken = Meteor.user().profile.instagramAccessToken[0];
        Meteor.call("retrieveInstagramFeed", instagramAccessToken, function(error, results) {
            var jsonObject = JSON.parse(results.content);
            posts = jsonObject.data;
        });
    }

});

Template.feed.helpers({
    posts: function() {
        return posts;
    }
});

Template.feed.events({

});
