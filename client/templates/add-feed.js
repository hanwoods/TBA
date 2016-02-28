var ERRORS_KEY = 'addFeedErrors';
OAuth.initialize('r5LnsctW-k8nlkwUqVmCcSy3aN4');

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
        OAuth.popup('facebook')
            .done(function(result) {
                //use result.access_token in your API request
                //or use result.get|post|put|del|patch|me methods (see below)
                console.log(result);
                //Meteor.call("linkInstagramAccessToken", result.access_token);
            })
            .fail(function (err) {
                //handle error with err
            });
        console.log("Facebook");
    },
    'click .js-twitter': function() {
        OAuth.popup('twitter')
            .done(function(result) {
                //use result.access_token in your API request
                //or use result.get|post|put|del|patch|me methods (see below)
                console.log(result);
                Meteor.call("linkTwitterAccessToken", result.oauth_token);
            })
            .fail(function (err) {
                //handle error with err
            });
        console.log("Twitter");
    },
    'click .js-instagram': function() {
        OAuth.popup('instagram')
            .done(function(result) {
                //use result.access_token in your API request
                //or use result.get|post|put|del|patch|me methods (see below)
                console.log(result);
                Meteor.call("linkInstagramAccessToken", result.access_token);
            })
            .fail(function (err) {
                //handle error with err
            });
    },
    'click .js-tumblr': function() {
        OAuth.popup('tumblr')
            .done(function(result) {
                //use result.access_token in your API request
                //or use result.get|post|put|del|patch|me methods (see below)
                console.log(result);
                Meteor.call("linkTumblrAccessToken", result.oauth_token);
            })
            .fail(function (err) {
                //handle error with err
            });
        console.log("Tumblr");
    },
    'click .js-reddit': function() {
        console.log("Reddit");
    }
});