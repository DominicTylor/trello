/**
 * Created by Владимир on 17.10.2016.
 */

angular.module('app')
    .controller('listCtrl', ['listsFactory', function (listsFactory) {
        this.removeList = function (listId) {
            listsFactory.removeList(listId);
        }
    }]);
