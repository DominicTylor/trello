/**
 * Created by Владимир on 17.10.2016.
 */

angular.module('app')
    .controller('cardCtrl', ['cardsFactory', function (cardsFactory) {
        this.isEditing = false;
        this.editingCard = null;

        this.removeCard = function (cardId) {
            cardsFactory.removeCard(cardId);
        }
        this.editCard = function (card) {
            this.isEditing = true;
            this.editingCard = angular.copy(card);
        }
        this.updateCard = function (card) {
            cardsFactory.updateCard(this.editingCard);
            this.isEditing = false;
            this.editingCard = null;
        }
    }]);
