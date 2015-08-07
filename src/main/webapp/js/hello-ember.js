window.App = Ember.Application.create();
App.ApplicationRoute = Ember.Route.extend({
    model: function() {
        return { name: 'Ember.js' };
    }
});
