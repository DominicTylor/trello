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

        services.addCard = function (listId, description) {
            cards.push({
                id: cards[cards.length-1].id + 1,
                description: description,
                listId: listId,
            });
        };

        services.removeCard = function (cardId) {
            for (var i = 0; i < cards.length; i++) {
                if (cards[i].id === cardId) {
                    cards.splice(i,1);
                    break;
                }
            }
        };

        services.updateCard = function (updatingCard) {
            for (var i = 0; i < cards.length; i++) {
                if (cards[i].id === updatingCard.id) {
                    cards[i].description = updatingCard.description;
                    cards[i].listId = updatingCard.listId;
                    break;
                }
            }
        }

        return services;
    });