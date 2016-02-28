var ERRORS_KEY = 'feedErrors';
console.log("Hello world");


Template.join.onCreated(function() {
    Session.set(ERRORS_KEY, {});
});
var getTweets = function (){
    var Twit = Meteor.npmRequire('twit');

    var T = new Twit({
        consumer_key:         'DMJkS0WTvfofkoSt5bKGpQbXT', // API key
        consumer_secret:      'CbQQ6PABc0fqcE2wao0exg0wliytCIKjd1zOCjEAT91TbTnrNw', // API secret
        access_token:         '171332224-RRM8w8Sy51ZlXXPZaztslMOpV1qy3ZfJGpOGtPAT',
        access_token_secret:  'TU5y8lt0AhjuNEYeQVUos4NCPTb5Nm6D6EtEGfD89874Z'
    });
    //  search twitter for all tweets containing the word 'banana'
    //  since Nov. 11, 2011
    T.get(statuses/home_timeline, { count: 15 }, function(err, data, response) {
        console.log(data)
    });
}
console.log("Hello world");
getTweets();

Template.join.helpers({

});

Template.feed.events({


});
