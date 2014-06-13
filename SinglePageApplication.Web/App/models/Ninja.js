define(['knockout', 'config'], function (ko, config) {

    'use strict';

    var Ninja = function (data) {
        this.id = data.id;
        this.name = data.name;
        this.detailsUrl = this.getDetailsUrl(this.id);
        this.imageUrl = data.imageUrl;
        this.messages = ko.observableArray(data.messages);
        this.description = data.description;
    };

    Ninja.prototype = {
        getDetailsUrl: function (id) {
            return config.routes.ninja + id;
        }
    }

    return Ninja;

});