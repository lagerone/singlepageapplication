define(['knockout', 'services/dataservice', 'models/Ninja', 'moment', 'underscore', 'config'], function (ko, dataservice, Ninja, moment, _, config) {

    'use strict';

    var vm = {};

    vm.ninja = ko.observable();

    vm.newMessage = ko.observable();

    vm.addNewMessage = function () {
        var messageItem = {
            id: vm.ninja().id,
            message: vm.newMessage(),
            dateAdded: moment().format(config.dateFormat)
        };
        vm.ninja().messages.push(messageItem);
        dataservice.saveMessageToNinja(messageItem)
            .done(function () {
                vm.newMessage('');
            });
    };

    vm.activate = function (id) {
        return dataservice.getNinjaById(id)
            .done(function (ninja) {
                _.each(ninja.messages, function (m) {
                    m.dateAdded = moment(m.dateAdded).format(config.dateFormat);
                });
                vm.ninja(new Ninja(ninja));
            });
    };

    return vm;

});
