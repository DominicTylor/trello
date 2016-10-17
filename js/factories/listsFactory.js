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
        }

        services.addList = function (listName) {
            lists.push({
                id: lists.length + 1,
                listName: listName,
            });
        }

        return services;
    });