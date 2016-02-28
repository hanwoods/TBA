Meteor.methods({
    'linkInstagramAccessToken': function (accessToken) {
        return Meteor.users.update( { _id: Meteor.userId() }, { $set: { 'instagramAccessToken': accessToken }} );
    },
    'linkTumblrAccessToken': function (accessToken) {
        return Meteor.users.update( { _id: Meteor.userId() }, { $set: { 'tumblrAccessToken': accessToken }} );
    },
    'linkFacebookAccessToken': function (accessToken) {
        return Meteor.users.update( { _id: Meteor.userId() }, { $set: { 'facebookAccessToken': accessToken }} );
    },
    'linkTwitterAccessToken': function (accessToken) {
        return Meteor.users.update( { _id: Meteor.userId() }, { $set: { 'twitterAccessToken': accessToken }} );
    }
});