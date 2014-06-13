define(['plugins/router', 'durandal/app'], function (router, app) {
    return {
        router: router,
        activate: function () {
            router.map([
                { route: '', title: 'Ninjas', moduleId: 'viewmodels/home', nav: true },
                { route: 'ninja/:id', title: 'Ninja', moduleId: 'viewmodels/ninja', nav: false },
                { route: 'about', title: 'About', moduleId: 'viewmodels/about', nav: true }
            ]).buildNavigationModel();

            return router.activate();
        }
    };
});