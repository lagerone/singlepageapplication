define(['jquery'], function ($) {
    var ds = {};

    ds.getNinjas = function () {
        return $.ajax({
            url: '/api/Ninjas/'
        });
    };

    ds.getNinjaById = function (id) {
        return $.ajax({
            url: '/api/Ninjas/' + id
        });
    };

    ds.saveMessageToNinja = function (data) {
        return $.ajax({
            type: 'post',
            url: '/api/Ninjas/',
            data: JSON.stringify(data),
            contentType: 'application/json'
        });
    }

    return ds; 
})