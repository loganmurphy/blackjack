/*
This is for refactoring
// For Deck
class Deck {
  constructor(deck, used_cards) {
    this.deck = [{point: 6, suit: "clubs"}, {point: 1, suit: "spades"}, {point: 5, suit: "diamonds"}, {point: 10, suit: "hearts"}];
    this.used_cards = [];
  }
  draw() {
    console.log(this.deck[0]);
    this.used_cards.push(this.deck[0]);
    console.log(this.used_cards);

    this.deck.shift();
  }
  cards_left() {
    console.log(this.deck.length);
  }
  shuffle(deck) {
    for (var i = this.deck.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = this.deck[i];
        this.deck[i] = this.deck[j];
        this.deck[j] = temp;
    }
    return this.deck;
  }
}
// For Hand
class Hand{
  constructor(cards){
    this.cards = []
  }
  addCard(cards){
    this.cards.push(cards);
    return this.cards;
  }
  getPoints(cards, point_tally){
    point_tally = Number('');
    this.cards.forEach(function(card){
      point_tally += Number(card['points'])
      console.log(point_tally);
    })
  }
}
// For Cards
class Card {
  constructor(point, suit, url){
  this.point = point;
  this.suit = suit;
  this.url = url;
  }
  get_image_url(){
    this.url = 'blackjack/cards/' + this.point + '_of_' + this.suit + '.png';
    console.log(this.url);
    return this.url;
  }
}
*/

var deck = [
  { point: 10, suit: 'hearts', img: '<img src="cards/queen_of_hearts.png">'},
  { point: 10, suit: 'diamonds', img: '<img src="cards/queen_of_diamonds.png">'},
  { point: 10, suit: 'clubs', img: '<img src="cards/queen_of_clubs.png">'},
  { point: 10, suit: 'spades', img: '<img src="cards/queen_of_spades.png">'},
  { point: 10, suit: 'hearts', img: '<img src="cards/king_of_hearts.png">'},
  { point: 10, suit: 'diamonds', img: '<img src="cards/king_of_diamonds.png">'},
  { point: 10, suit: 'clubs', img: '<img src="cards/king_of_clubs.png">'},
  { point: 10, suit: 'spades', img: '<img src="cards/king_of_spades.png">'},
  { point: 10, suit: 'hearts', img: '<img src="cards/jack_of_hearts.png">'},
  { point: 10, suit: 'diamonds', img: '<img src="cards/jack_of_diamonds.png">'},
  { point: 10, suit: 'clubs', img: '<img src="cards/king_of_clubs.png">'},
  { point: 10, suit: 'spades', img: '<img src="cards/jack_of_spades.png">'},
  { point: 10, suit: 'hearts', img: '<img src="cards/10_of_hearts.png">'},
  { point: 10, suit: 'diamonds', img: '<img src="cards/10_of_diamonds.png">'},
  { point: 10, suit: 'clubs', img: '<img src="cards/10_of_clubs.png">'},
  { point: 10, suit: 'spades', img: '<img src="cards/10_of_spades.png">'},
  { point: 9, suit: 'hearts', img: '<img src="cards/9_of_hearts.png">'},
  { point: 9, suit: 'diamonds', img: '<img src="cards/9_of_diamonds.png">'},
  { point: 9, suit: 'clubs', img: '<img src="cards/9_of_clubs.png">'},
  { point: 9, suit: 'spades', img: '<img src="cards/9_of_spades.png">'},
  { point: 8, suit: 'hearts', img: '<img src="cards/8_of_hearts.png">'},
  { point: 8, suit: 'diamonds', img: '<img src="cards/8_of_diamonds.png">'},
  { point: 8, suit: 'clubs', img: '<img src="cards/8_of_clubs.png">'},
  { point: 8, suit: 'spades', img: '<img src="cards/8_of_spades.png">'},
  { point: 7, suit: 'hearts', img: '<img src="cards/7_of_hearts.png">'},
  { point: 7, suit: 'diamonds', img: '<img src="cards/7_of_diamonds.png">'},
  { point: 7, suit: 'clubs', img: '<img src="cards/7_of_clubs.png">'},
  { point: 7, suit: 'spades', img: '<img src="cards/7_of_spades.png">'},
  { point: 6, suit: 'hearts', img: '<img src="cards/6_of_hearts.png">'},
  { point: 6, suit: 'diamonds', img: '<img src="cards/6_of_diamonds.png">'},
  { point: 6, suit: 'clubs', img: '<img src="cards/6_of_clubs.png">'},
  { point: 6, suit: 'spades', img: '<img src="cards/6_of_spades.png">'},
  { point: 5, suit: 'hearts', img: '<img src="cards/5_of_hearts.png">'},
  { point: 5, suit: 'diamonds', img: '<img src="cards/5_of_diamonds.png">'},
  { point: 5, suit: 'clubs', img: '<img src="cards/5_of_clubs.png">'},
  { point: 5, suit: 'spades', img: '<img src="cards/5_of_spades.png">'},
  { point: 4, suit: 'hearts' , img: '<img src="cards/4_of_hearts.png">'},
  { point: 4, suit: 'diamonds', img: '<img src="cards/4_of_diamonds.png">'},
  { point: 4, suit: 'clubs', img: '<img src="cards/4_of_clubs.png">'},
  { point: 4, suit: 'spades', img: '<img src="cards/4_of_spades.png">'},
  { point: 3, suit: 'hearts', img: '<img src="cards/3_of_hearts.png">'},
  { point: 3, suit: 'diamonds', img: '<img src="cards/3_of_diamonds.png">'},
  { point: 3, suit: 'clubs', img: '<img src="cards/3_of_clubs.png">'},
  { point: 3, suit: 'spades', img: '<img src="cards/3_of_spades.png">'},
  { point: 2, suit: 'hearts', img: '<img src="cards/2_of_hearts.png">'},
  { point: 2, suit: 'diamonds', img: '<img src="cards/2_of_diamonds.png">'},
  { point: 2, suit: 'clubs', img: '<img src="cards/2_of_clubs.png">'},
  { point: 2, suit: 'spades', img: '<img src="cards/2_of_spades.png">'},
  { point: 11, suit: 'hearts', img: '<img src="cards/ace_of_hearts.png">'},
  { point: 11, suit: 'diamonds', img: '<img src="cards/ace_of_diamonds.png">'},
  { point: 11, suit: 'clubs', img: '<img src="cards/ace_of_clubs.png">'},
  { point: 11, suit: 'spades', img: '<img src="cards/ace_of_spades.png">'},
];
var blank_card = {point: 0, img: '<img src="cards/back.png">'};
var used_deck = [];
// var player_points= $('#player-points').text();
var un_hit = $('#hit-button').attr('disabled', 'disabled');
var un_stand = $('#stand-button').attr('disabled', 'disabled');

function deck_checker(){
  if (deck.length < 10){
    used_deck.forEach(function(item){
    deck.push(item);
    console.log(deck);
    });
  }
}

function double_ace_checker(){
  var player_points = $('#player_points').text();
  var dealer_points = $('#dealer_points').text();
  if ($('#player_points') == 22){
    Number($('#player_points').text(player_points -= 11))
  }
  if ($('#dealer_points') == 22){
    Number($('#dealer_points').text(dealer_points -= 11))
  }
}

$('#stand-button').click(function(){
  var dealer_points = Number($('#dealer-points').text());
  // dealer_point_checker();
  $('#hit-button').attr('disabled', 'disabled');
  $('#stand-button').attr('disabled', 'disabled');
  return Number($('#dealer-points').text());
});
$('#stand-button').click(function(){
  dealer_hit();
});

function dealer_hit(){
  $('#dealer-hand :first-child').remove();
  double_ace_checker();
  var player_points = Number($('#player_points').text());
  var dealer_points = Number($('#dealer_points').text());
  var old_player_wins_value = Number($('#player_wins').text());
    while (true){
      if (Number($('#dealer-points').text() < 17)){
      var dealer_card = deck[Math.floor(Math.random()*deck.length)];
      var index_dealer = deck.indexOf(dealer_card);
      var dealer_old_value = Number($('#dealer-points').text());
      var old_player_wins_value = Number($('#player_wins').text());
      $('#dealer-hand').append(dealer_card['img']);
      Number($('#dealer-points').text(dealer_old_value + dealer_card['point']));
      used_deck.push(dealer_card);
      deck.splice(index_dealer, 1);
    }
    else if (Number($('#dealer-points').text()) > 21){
        $('#modal3').show();
        $.playSound('/sounds/explosion.mp3');
        $('#hit-button').attr('disabled', 'disabled');
        $('#stand-button').attr('disabled', 'disabled');
        (Number($('#player_wins').text(old_player_wins_value + 5)));
        return false;
      } else if (Number($('#dealer-points').text()) === Number($('#player-points').text())){
        $('#modal_push').show();
        $('#hit-button').attr('disabled', 'disabled');
        $('#stand-button').attr('disabled', 'disabled');
        return false;
      } else if (Number($('#dealer-points').text()) > Number($('#player-points').text())){
        $('#modal_dealer_win').show();
        $.playSound('/sounds/sad.mp3');
        $('#hit-button').attr('disabled', 'disabled');
        $('#stand-button').attr('disabled', 'disabled');
        (Number($('#player_wins').text(old_player_wins_value - 5)));
        return false;
      } else if (Number($('#dealer-points').text()) < Number($('#player-points').text())){
        $('#modal_player_win').show();
        $.playSound('/sounds/applause.mp3');
        $('#hit-button').attr('disabled', 'disabled');
        $('#stand-button').attr('disabled', 'disabled');
        (Number($('#player_wins').text(old_player_wins_value + 5)));
      } else {
        $('#modal3').hide();
        return false;
      }
    }
    if (dealer_points > player_points && dealer-points > 16){
      $('#modal_dealer_win').show();
      $.playSound('/sounds/sad.mp3');
      $('#hit-button').attr('disabled', 'disabled');
      $('#stand-button').attr('disabled', 'disabled');
      Number($('#player_wins').text(old_player_wins_value - 5));
    } else if (Number($('#dealer-points').text()) < Number($('#player-points').text()) && Number($('#dealer-points').text()) > 16){
      $('modal_player_win').show()
      $.playSound('/sounds/applause.mp3');
      $('#hit-button').attr('disabled', 'disabled');
      $('#stand-button').attr('disabled', 'disabled');
      (Number($('#player_wins').text(old_player_wins_value + 5)));
    } else if (Number($('#dealer-points').text()) === Number($('#player-points').text()) && Number($('#dealer-points').text()) >= 17){
      $('#modal_push').show();
      $('#hit-button').attr('disabled', 'disabled');
      $('#stand-button').attr('disabled', 'disabled');
    }
}

$('#deal-button').click(function(){
  deck_checker();
  double_ace_checker();
  $('#dealer-hand').append(blank_card['img']);
  var dealer_card = deck[Math.floor(Math.random()*deck.length)];
  var dealer_old_value = Number($('#dealer-points').text());
  var index_dealer = deck.indexOf(dealer_card);
  $('#dealer-hand').append(dealer_card['img']);
  Number($('#dealer-points').text(dealer_old_value + dealer_card['point']));
  used_deck.push(dealer_card);
  deck.splice(index_dealer, 1);
  i = 0;
    while (i < 2){
    var index_dealer = deck.indexOf(dealer_card);
    var player_card = deck[Math.floor(Math.random()*deck.length)];
    var index_player = deck.indexOf(player_card);
    var player_old_value = Number($('#player-points').text());
    $('#player-hand').append(player_card['img']);
    Number($('#player-points').text(player_old_value + player_card['point']));
    used_deck.push(player_card);
    deck.splice(index_player, 1);
    i++;
    $('#deal-button').attr('disabled', 'disabled');
    $('#hit-button').removeAttr('disabled', 'disabled');
    $('#stand-button').removeAttr('disabled', 'disabled');
  };
  return Number($('#dealer-points').text());
});

$('#hit-button').click(function(){
  var dealer_points = Number($('#dealer-points').text());
  deck_checker();
  var player_card = deck[Math.floor(Math.random()*deck.length)];
  var index_player = deck.indexOf(player_card);
  var player_old_value = Number($('#player-points').text());
  var old_player_wins_value = Number($('#player_wins').text());
  Number($('#player-points').text(player_old_value + player_card['point']));
  $('#player-hand').append(player_card['img']);
  used_deck.push(player_card);
  deck.splice(index_player, 1);
  if(Number($('#player-points').text()) > 21){
    $('#modal').show();
    $.playSound('/sounds/explosion.mp3');
    $('#hit-button').attr('disabled', 'disabled');
    $('#stand-button').attr('disabled', 'disabled');
    Number($('#player_wins').text(old_player_wins_value - 5));
  }
  return Number($('#dealer-points').text());
});

$('#yes').click(function(){
  Number($('#player-points').text(0));
  Number($('#dealer-points').text(0));
  $('#player-hand').empty();
  $('#dealer-hand').empty();
  $('.modal').hide();
  $('#deal-button').removeAttr('disabled');
});

$('#no').click(function(){
  Number($('#player-points').text(0));
  Number($('#dealer-points').text(0));
  $('#player-hand').empty();
  $('#dealer-hand').empty();
  $('#modal').hide();
  $('#modal2').show();
  if(Number($('#player_wins').text()) > 0){
    $('#the_winner_is').text('Congratulations, you\'re leaving the casino with money!');
    $.playSound('/sounds/applause.mp3');
  } else {
    $('#the_winner_is').text('The house wins, better luck next time!');
    $.playSound('/sounds/sad.mp3');
  }
});

$('#yes2').click(function(){
  Number($('#player-points').text(0));
  Number($('#dealer-points').text(0));
  $('#player-hand').empty();
  $('#dealer-hand').empty();
  $('#modal3').hide();
  $('#deal-button').removeAttr('disabled');
  $('#hit-button').removeAttr('disabled', 'disabled');
  $('#stand-button').removeAttr('disabled', 'disabled');
});

$('#no2').click(function(){
  Number($('#player-points').text(0));
  Number($('#dealer-points').text(0));
  $('#player-hand').empty();
  $('#dealer-hand').empty();
  $('#modal3').hide();
  $('#modal2').show();
  if(Number($('#player_wins').text()) > 0){
    $('#the_winner_is').text('Congratulations, you\'re leaving the casino with money!');
    $.playSound('/sounds/applause.mp3');
  } else {
    $('#the_winner_is').text('The house wins, better luck next time!');
    $.playSound('/sounds/sad.mp3');
  }
});

$('#yes3').click(function(){
  Number($('#player-points').text(0));
  Number($('#dealer-points').text(0));
  $('#player-hand').empty();
  $('#dealer-hand').empty();
  $('#modal_dealer_win').hide();
  $('#deal-button').removeAttr('disabled');
  $('#hit-button').removeAttr('disabled', 'disabled');
  $('#stand-button').removeAttr('disabled', 'disabled');
});

$('#no3').click(function(){
  Number($('#player-points').text(0));
  Number($('#dealer-points').text(0));
  $('#player-hand').empty();
  $('#dealer-hand').empty();
  $('#modal_dealer_win').hide();
  $('#modal2').show();
  if(Number($('#player_wins').text()) > 0){
    $('#the_winner_is').text('Congratulations, you\'re leaving the casino with money!');
    $.playSound('/sounds/applause.mp3');
  } else {
    $('#the_winner_is').text('The house wins, better luck next time!');
    $.playSound('/sounds/sad.mp3');
  }
});

$('#yes4').click(function(){
  Number($('#player-points').text(0));
  Number($('#dealer-points').text(0));
  $('#player-hand').empty();
  $('#dealer-hand').empty();
  $('#modal_player_win').hide();
  $('#deal-button').removeAttr('disabled');
  $('#hit-button').removeAttr('disabled', 'disabled');
  $('#stand-button').removeAttr('disabled', 'disabled');
});

$('#no4').click(function(){
  Number($('#player-points').text(0));
  Number($('#dealer-points').text(0));
  $('#player-hand').empty();
  $('#dealer-hand').empty();
  $('#modal_player_win').hide();
  $('#modal2').show();
  if(Number($('#player_wins').text()) > 0){
    $('#the_winner_is').text('Congratulations, you\'re leaving the casino with money!');
    $.playSound('/sounds/applause.mp3');
  } else {
    $('#the_winner_is').text('The house wins, better luck next time!');
    $.playSound('/sounds/sad.mp3');
  }
});

$('#yes5').click(function(){
  Number($('#player-points').text(0));
  Number($('#dealer-points').text(0));
  $('#player-hand').empty();
  $('#dealer-hand').empty();
  $('#modal_push').hide();
  $('#deal-button').removeAttr('disabled');
  $('#hit-button').removeAttr('disabled', 'disabled');
  $('#stand-button').removeAttr('disabled', 'disabled');
});

$('#no5').click(function(){
  Number($('#player-points').text(0));
  Number($('#dealer-points').text(0));
  $('#player-hand').empty();
  $('#dealer-hand').empty();
  $('#modal_push').hide();
  $('#modal2').show();
  if(Number($('#player_wins').text()) > 0){
    $('#the_winner_is').text('Congratulations, you\'re leaving the casino with money!');
    $.playSound('/sounds/applause.mp3');
  } else {
    $('#the_winner_is').text('The house wins, better luck next time!');
    $.playSound('/sounds/sad.mp3');
  }
});
