Meteor.startup(function () {

  Router.map(function() {

<<<<<<< HEAD
    // RSS
=======
    // Post RSS
>>>>>>> eeb961d9059ea8ea21dd225590206a4bb0db568c

    this.route('feed', {
      where: 'server',
      path: '/feed.xml',
      action: function() {
<<<<<<< HEAD
        this.response.write(serveRSS());
=======
        this.response.write(servePostRSS());
        this.response.end();
      }
    });

    // Comment RSS

    this.route('rss_comments', {
      where: 'server',
      path: '/rss/comments.xml',
      action: function() {
        this.response.write(serveCommentRSS());
>>>>>>> eeb961d9059ea8ea21dd225590206a4bb0db568c
        this.response.end();
      }
    });

  });

<<<<<<< HEAD
});
=======
});
>>>>>>> eeb961d9059ea8ea21dd225590206a4bb0db568c
