var ERRORS_KEY = 'instagramAuthErrors';

Template.instagramauth.onCreated(function() {
    Session.set(ERRORS_KEY, {});
    var path = Router.current().path;
    var accessToken = path.substring(path.indexOf("=") + 1);
    if (accessToken != path) {
        Meteor.users.update( { _id: Meteor.userId() }, { $set: { 'profile.instagramAccessToken': [accessToken] }} );
    }
});