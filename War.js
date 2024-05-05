//creates card class
class Card {
    constructor(face, suit){
        this.face = face;
        this.suit = suit;
    }
}

//creates deck class with few methods
class Deck {
    constructor(){
        this.deckCards = [];
    }

    //shuffles the deck of cards
    shuffle(array){
        let current = array.length;
        while(current != 0){
           let random = Math.floor(Math.random() * current);
            current--;

            [array[current], array[random]] = [array[random], array[current]]
        }
    }

    //creates cards and pushes the new card to deck
    cardsList(){
        this.deckCards.push(new Card('A', '♣️'));
        this.deckCards.push(new Card(2, '♣️'));
        this.deckCards.push(new Card(3, '♣️'));
        this.deckCards.push(new Card(4, '♣️'));
        this.deckCards.push(new Card(5, '♣️'));
        this.deckCards.push(new Card(6, '♣️'));
        this.deckCards.push(new Card(7, '♣️'));
        this.deckCards.push(new Card(8, '♣️'));
        this.deckCards.push(new Card(9, '♣️'));
        this.deckCards.push(new Card(10, '♣️'));
        this.deckCards.push(new Card('J', '♣️'));
        this.deckCards.push(new Card('Q', '♣️'));
        this.deckCards.push(new Card('K', '♣️'));

        this.deckCards.push(new Card('A', '♥️'));
        this.deckCards.push(new Card(2, '♥️'));
        this.deckCards.push(new Card(3, '♥️'));
        this.deckCards.push(new Card(4, '♥️'));
        this.deckCards.push(new Card(5, '♥️'));
        this.deckCards.push(new Card(6, '♥️'));
        this.deckCards.push(new Card(7, '♥️'));
        this.deckCards.push(new Card(8, '♥️'));
        this.deckCards.push(new Card(9, '♥️'));
        this.deckCards.push(new Card(10, '♥️'));
        this.deckCards.push(new Card('J', '♥️'));
        this.deckCards.push(new Card('Q', '♥️'));
        this.deckCards.push(new Card('K', '♥️'));
    
        this.deckCards.push(new Card('A', '♦️'));
        this.deckCards.push(new Card(2, '♦️'));
        this.deckCards.push(new Card(3, '♦️'));
        this.deckCards.push(new Card(4, '♦️'));
        this.deckCards.push(new Card(5, '♦️'));
        this.deckCards.push(new Card(6, '♦️'));
        this.deckCards.push(new Card(7, '♦️'));
        this.deckCards.push(new Card(8, '♦️'));
        this.deckCards.push(new Card(9, '♦️'));
        this.deckCards.push(new Card(10, '♦️'));
        this.deckCards.push(new Card('J', '♦️'));
        this.deckCards.push(new Card('Q', '♦️'));
        this.deckCards.push(new Card('K', '♦️'));

        this.deckCards.push(new Card('A', '♠️'));
        this.deckCards.push(new Card(2, '♠️'));
        this.deckCards.push(new Card(3, '♠️'));
        this.deckCards.push(new Card(4, '♠️'));
        this.deckCards.push(new Card(5, '♠️'));
        this.deckCards.push(new Card(6, '♠️'));
        this.deckCards.push(new Card(7, '♠️'));
        this.deckCards.push(new Card(8, '♠️'));
        this.deckCards.push(new Card(9, '♠️'));
        this.deckCards.push(new Card(10, '♠️'));
        this.deckCards.push(new Card('J', '♠️'));
        this.deckCards.push(new Card('Q', '♠️'));
        this.deckCards.push(new Card('K', '♠️'));
    }


}

//creates player class
class Player {
    constructor(playerPosition, score){
        this.playerPosition = 'Player: ' + playerPosition;
        this.hand = [];
        this.score = 0;
    }
}

//game class with method which contains code for running game
class Game {
    constructor(){
        this.players = [];
    }

    start(){
        this.players.push(player, player2);
        let b = 0;
        let x = 0;

        for( let i = 0 ; player.hand.length < 26 && i < 26; i++){
            let index = deck.deckCards.pop();
            player.hand.push(index);
            while(player.hand.length == 26 && i < 52 && player2.hand.length !== 26){
                let index = deck.deckCards.pop();
                player2.hand.push(index);
                i++;
            }
        }
        
           /* while(this.players[0].hand.length !== 0){

                if(this.players[0].hand[b].face == '' || this.players[1].hand[x].face  == ''){
            this.players[0].hand[''].face = 10;

                if(this.players[0].hand[b].face > this,players[1].hand[x].face){
                    this.players[0].score++;
                } else {
                    this.players[1].score++;
                }
                
            }
            this.players[0].hand.lenght - 1;
        }*/
    }
}

let card = new Card();
let deck = new Deck();
let player = new Player(1, 0);
let player2 = new Player(2, 0);
//suits = ['♣️', '♠️', '♥️', '♦️'];
let game = new Game();
deck.cardsList();
deck.shuffle(deck.deckCards);
game.start();
//console.log(deck.deckCards[50]);
console.log(game.players[0], game.players[1]);
console.log(game.players[1].hand[0].face)
console.log(game.players[0].score, game.players[1].score)