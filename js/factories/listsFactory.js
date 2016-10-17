/**
 * Created by Владимир on 17.10.2016.
 */

angular.module('app')
    .factory('listsFactory', function () {
        var services = {},
            lists = [
                {
                    id: 1,
                    listName: 'ToDo',
                },
                {
                    id: 2,
                    listName: 'Doing',
                },
                {
                    id: 3,
                    listName: 'Done',
                },
            ];

        services.getLists = function () {
            return lists;
        };

        services.addList = function (listName) {
            lists.push({
                id: lists[lists.length-1].id + 1,
                listName: listName,
            });
        };

        services.removeList = function (listId) {
            for (var i = 0; i < lists.length; i++) {
                if (lists[i].id === listId) {
                    lists.splice(i,1);
                    break;
                }
            }
        };

        return services;
    });