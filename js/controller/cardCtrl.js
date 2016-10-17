/**
 * Created by Владимир on 17.10.2016.
 */

angular.module('app')
    .controller('cardCtrl', ['cardsFactory', function (cardsFactory) {
        this.removeCard = function (cardId) {
            cardsFactory.removeCard(cardId);
        }
        this.changeMoveCard = function (cardId, listId) {
            console.log(cardId + ' ' + listId);
        }
        /*this.moveCard = function (cardId, listId) {
         cardsFactory.moveCard(cardId, listId);
         }*/
    }]);
