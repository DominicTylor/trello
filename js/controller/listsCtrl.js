/**
 * Created by Владимир on 17.10.2016.
 */

angular.module('app')
    .controller('listsCtrl', ['listsFactory', function (listsFactory) {
        this.lists = listsFactory.getLists();
        this.addList = function () {
            listsFactory.addList(this.listName);
            this.listName = '';
        }
    }]);
