var ERRORS_KEY = 'addFeedErrors';

Template.addfeed.onCreated(function() {
    Session.set(ERRORS_KEY, {});
    var path = Router.current().path;
    path = path.substring(path.indexOf("=") + 1);

    if (path != "/addfeed") {
        // access token retrieved
        console.log(path);
    }

});

Template.addfeed.helpers({
    /*services: function () {
        var user = Meteor.user();
        if (user) {
            return _.keys(user.services);
        } else {
            return;
        }
    }*/
});

Template.addfeed.events({
    'click .js-facebook': function() {
        console.log("Facebook");
    },
    'click .js-twitter': function() {
        console.log("Twitter");
    },
    'click .js-instagram': function() {
        window.open("https://api.instagram.com/oauth/authorize/?client_id=2538a46adbf14c8b834785c78a7cd4b7&redirect_uri=http://localhost:3000/instagramauth&response_type=token", "_self");
    },
    'click .js-tumblr': function() {
        console.log("Tumblr");
    },
    'click .js-reddit': function() {
        console.log("Reddit");
    }
});