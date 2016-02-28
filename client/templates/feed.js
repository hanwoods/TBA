var ERRORS_KEY = 'feedErrors';

Template.join.onCreated(function() {
    Session.set(ERRORS_KEY, {});
});

Template.join.helpers({

});

Template.feed.events({

});

Template.index.helpers({
    fbPage: function () {
        return Session.get("fbPage");
    }
});

Template.feed.events({
    'click #btn-user-data': function(e) {
        Meteor.call('getUserData', function(err, data) {
            $('#result').text(JSON.stringify(data, undefined, 4));
        });
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


