angular.module('Myapp.services', [])
    .factory('LSFactory', [function () {

        var LSAPI = {

            clear: function () {
                return localStorage.clear();
            },

            get: function (key) {
                return JSON.parse(localStorage.getItem(key));
            },

            getlen: function (key) {
                return localStorage.getItem(key);
            },

            set: function (key, data) {
                return localStorage.setItem(key, JSON.stringify(data));
            },

            delete: function (key) {
                return localStorage.removeItem(key);
            },

            getAll: function () {
                var books = [];
                var items = Object.keys(localStorage);

                for (var i = 0; i < items.length; i++) {
                    if (items[i] !== 'user' || items[i] != 'token') {
                        books.push(JSON.parse(localStorage[items[i]]));
                    }
                }

                return books;
            }

        };

        return LSAPI;

    }]);