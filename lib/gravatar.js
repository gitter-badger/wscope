// super, super simple
Gravatar = {
  getGravatar: function(user, options) {
    var options = options || {};

    var protocol = options.secure ? 'https' : 'http';
    delete options.secure;
    var hash = !!user.email_hash ? user.email_hash : ''; // if hash not available, just pass empty string
    var url = protocol + '://www.gravatar.com/avatar/' + hash;

<<<<<<< HEAD
    var params = _.map(options, function(val, key) { return key + "=" + val;}).join('&');
    if (params !== '')
    url += '?' + params;
  
=======
    function retinizeSize(size) {
        // return the optimal image size for retina display or zoomed in view.
        return Math.ceil(size * Math.max(1, window.devicePixelRatio));
    }
    options.s = retinizeSize(options.s);

    var params = _.map(options, function(val, key) { return key + "=" + val;}).join('&');
    if (params !== '')
    url += '?' + params;

>>>>>>> eeb961d9059ea8ea21dd225590206a4bb0db568c
    return url;
  }
};