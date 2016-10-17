/**
 * Created by Владимир on 17.10.2016.
 */

angular.module('app')
    .factory('cardsFactory', function () {
        var services = {},
            cards = [
                {
                    id: 1,
                    description: 'Пофиксить баг в плеере',
                    listId: 1,
                },
                {
                    id: 2,
                    description: 'Добавить поункты в меню',
                    listId: 2,
                },
                {
                    id: 3,
                    description: 'Выучить AngularJS',
                    listId: 3,
                },
                {
                    id: 4,
                    description: 'Выучить AngularJS 2',
                    listId: 1,
                },
            ];

        services.getCards = function (listId) {
            return cards.filter(function (item) {
                if (item.listId === listId) {
                    return true;
                }
            });
        };

        return services;
    });