Meteor.startup(function () {
  Router.map(function() {
    this.route('contact', {
      path: '/contact',
      template: getTemplate('contactPage')
    });
  });
});

primaryNav.push('contactLink');