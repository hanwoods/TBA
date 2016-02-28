var ERRORS_KEY = 'feedErrors';
console.log("Hello world");


Template.join.onCreated(function() {
    Session.set(ERRORS_KEY, {});
});
var getTweets = function (){
    var Twit = Meteor.npmRequire('twit');
    //var returnData;

    var T = new Twit({
        consumer_key:         'DMJkS0WTvfofkoSt5bKGpQbXT', // API key
        consumer_secret:      'CbQQ6PABc0fqcE2wao0exg0wliytCIKjd1zOCjEAT91TbTnrNw', // API secret
        access_token:         '171332224-RRM8w8Sy51ZlXXPZaztslMOpV1qy3ZfJGpOGtPAT',
        access_token_secret:  'TU5y8lt0AhjuNEYeQVUos4NCPTb5Nm6D6EtEGfD89874Z'
    });
    //  search twitter for the user's home_timeline
    T.get('search/tweets',
        {
            q: 'banana since:2011-11-11',
            count: 100
        },
        function(err, data, response) {
            console.log(data);
        }
    );


}
getTweets();
Template.join.helpers({

});

Template.feed.events({


});

Template.index.helpers({
    fbPage: function () {
        return Session.get("fbPage");
    }
});

function loadFBPosts() {
    var fbPage = Session.get("fbPage");

    if (fbPage) {
        Meteor.call('getProcessedPagePosts', fbPage, MAX_RETRIEVED_POSTS, function (err, postsData) {
            if (err) {
                console.log(err);
                Session.set("retrievingCards", false);
            }
            else {
                if (postsData && postsData.data) {

                    displayedCards.set(postsData.data);
                    retrievedCards.set(postsData.data);

                    $('#refreshPostsButton').removeClass('disabled');

                    //pagination
                    if (postsData.paging.next) {
                        Session.set("nextPostsUntil", postsData.paging.next);
                    }
                    else {
                        Session.set("nextPostsUntil", "");
                    }
                }
                Session.set("retrievingCards", false);
            }
        });
    }
}


