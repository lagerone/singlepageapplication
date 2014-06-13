define(['knockout'], function (ko) {

    'use strict';

    ko.observableArray.fn.map = function (data, Constructor) {
        var existing = this();
        ko.utils.arrayForEach(data, function (d) {
           existing.push(new Constructor(d));
        });
        return existing;
    }

});