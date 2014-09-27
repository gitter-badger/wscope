Meteor.startup(function () {
  Router.map(function() {
    this.route('suggest', {
      path: '/suggest',
      template: getTemplate('suggestPage')
    });
  });
});

primaryNav.push('suggestLink');