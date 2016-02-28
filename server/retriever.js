Meteor.methods({
    retrieveInstagramFeed: function (accessToken) {
        this.unblock();
        return Meteor.http.call("GET", "https://api.instagram.com/v1/users/self/feed?access_token=" + accessToken);
    }
});