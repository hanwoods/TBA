Meteor.methods({
    'linkInstagramAccessToken': function (accessToken) {
        return Meteor.users.update( { _id: Meteor.userId() }, { $set: { 'instagramAccessToken': accessToken }} );
    }
});