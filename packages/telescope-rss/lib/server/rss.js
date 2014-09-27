var RSS = Npm.require('rss');

<<<<<<< HEAD
serveRSS = function() {
  var feed = new RSS({
=======
var getMeta = function() {
  return {
>>>>>>> eeb961d9059ea8ea21dd225590206a4bb0db568c
    title: getSetting('title'),
    description: getSetting('tagline'),
    feed_url: Meteor.absoluteUrl()+'feed.xml',
    site_url: Meteor.absoluteUrl(),
    image_url: Meteor.absoluteUrl()+'img/favicon.png',
<<<<<<< HEAD
  });
  
  Posts.find({status: STATUS_APPROVED}, {sort: {postedAt: -1}, limit: 20}).forEach(function(post) {
=======
  };
};

servePostRSS = function() {
  var feed = new RSS(getMeta());

  filters = {
    status: STATUS_APPROVED,
    postedAt: {$lte: new Date()}
  };
  Posts.find(filters, {sort: {postedAt: -1}, limit: 20}).forEach(function(post) {
>>>>>>> eeb961d9059ea8ea21dd225590206a4bb0db568c
    var description = !!post.body ? post.body+'</br></br>' : '';
    feed.item({
     title: post.title,
     description: description+'<a href="'+getPostUrl(post._id)+'">Discuss</a>',
     author: post.author,
     date: post.postedAt,
     url: getPostLink(post),
     guid: post._id
    });
  });
<<<<<<< HEAD
  
=======

  return feed.xml();
};

serveCommentRSS = function() {
  var feed = new RSS(getMeta());

  Comments.find({isDeleted: {$ne: true}}, {sort: {postedAt: -1}, limit: 20}).forEach(function(comment) {
    post = Posts.findOne(comment.postId);
    feed.item({
     title: 'Comment on '+post.title,
     description: comment.body+'</br></br>'+'<a href="'+getPostCommentUrl(post._id, comment._id)+'">Discuss</a>',
     author: comment.author,
     date: comment.postedAt,
     url: getCommentUrl(comment._id),
     guid: comment._id
    });
  });

>>>>>>> eeb961d9059ea8ea21dd225590206a4bb0db568c
  return feed.xml();
};
