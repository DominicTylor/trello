/**
 * Created by Владимир on 17.10.2016.
 */

angular.module('app')
    .controller('listCtrl', ['listsFactory', 'cardsFactory', function (listsFactory, cardsFactory) {
        this.removeList = function (listId) {
            listsFactory.removeList(listId);
        }
        this.getCards = function (listId) {
            return cardsFactory.getCards(listId);
        }
        this.addCard = function (listId) {
            cardsFactory.addCard(listId, this.description);
        }
    }]);
