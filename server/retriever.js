Meteor.methods({
    retrieveInstagramFeed: function () {
        this.unblock();
        return Meteor.http.call("GET", "https://api.instagram.com/oauth/authorize/?client_id=2538a46adbf14c8b834785c78a7cd4b7&redirect_uri=http://localhost:3000/_oauth/instagram&response_type=code");
    }
});