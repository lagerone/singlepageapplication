define(['knockout', 'services/dataservice', 'models/Ninja'], function (ko, dataservice, Ninja) {

    'use strict';

    var vm = {};

    vm.ninjas = ko.observableArray();

    vm.activate = function () {
        return dataservice.getNinjas()
            .done(function (ninjas) {
                vm.ninjas.map(ninjas, Ninja);
            });
    };

    return vm;

});
