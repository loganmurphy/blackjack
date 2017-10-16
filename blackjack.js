// can only deal once per game
// when modal is up buttons don't work


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

var used_deck = [];
var player_points= $('#player-points').text();

function dealer_hit(){
  while (Number($('#dealer-points').text() < 17)){
    var dealer_card = deck[Math.floor(Math.random()*deck.length)];
    var index_dealer = deck.indexOf(dealer_card);
    var dealer_old_value = Number($('#dealer-points').text());
    var old_player_wins_value = Number($('#player_wins').text());
    $('#dealer-hand').append(dealer_card['img']);
    Number($('#dealer-points').text(dealer_old_value + dealer_card['point']));
    used_deck.push(dealer_card);
    deck.splice(index_dealer, 1);
    if(Number($('#dealer-points').text()) > 21){
      $('#modal3').show();
      (Number($('#player_wins').text(old_player_wins_value + 1)));
      old_player_wins_value = 0
    } else {
      $('#modal3').hide();
    }
  }
}

$('#deal-button').click(function(){
  i = 0;
    while (i < 2){
    var dealer_card = deck[Math.floor(Math.random()*deck.length)];
    var index_dealer = deck.indexOf(dealer_card);
    var dealer_old_value = Number($('#dealer-points').text());
    var player_card = deck[Math.floor(Math.random()*deck.length)];
    var index_player = deck.indexOf(player_card);
    var player_old_value = Number($('#player-points').text());
    $('#dealer-hand').append(dealer_card['img']);
    Number($('#dealer-points').text(dealer_old_value + dealer_card['point']));
    used_deck.push(dealer_card);
    deck.splice(index_dealer, 1);
    $('#player-hand').append(player_card['img']);
    Number($('#player-points').text(player_old_value + player_card['point']));
    used_deck.push(player_card);
    deck.splice(index_player, 1);
    // console.log('used', used_deck);
    // console.log('have', deck);
    i++;
  };
});

$('#hit-button').click(function(){
  var player_card = deck[Math.floor(Math.random()*deck.length)];
  var index_player = deck.indexOf(player_card);
  var player_old_value = Number($('#player-points').text());
  Number($('#player-points').text(player_old_value + player_card['point']));
  $('#player-hand').append(player_card['img']);
  used_deck.push(player_card);
  deck.splice(index_player, 1);
  var old_dealer_wins_value = Number($('#dealer_wins').text());
  if(Number($('#player-points').text()) > 21){
    $('#modal').show();
    Number($('#dealer_wins').text(old_dealer_wins_value +1));
    old_dealer_wins_value = 0
  } else {
    $('#modal').hide();
  }
});

$('#stand-button').click(function(){
  dealer_hit();
});

$('#yes').click(function(){
  Number($('#player-points').text(0));
  Number($('#dealer-points').text(0));
  $('#player-hand').empty();
  $('#dealer-hand').empty();
  $('#modal').hide();
});

$('#no').click(function(){
  Number($('#player-points').text(0));
  Number($('#dealer-points').text(0));
  $('#player-hand').empty();
  $('#dealer-hand').empty();
  $('#modal').hide();
  $('#modal2').show();
  if(Number($('#dealer_wins').text()) < Number($('#player_wins').text())){
    $('#the_winner_is').text('Congratulations, you win!');
  } else {
    $('#the_winner_is').text('The house wins, better luck next time!');
  }
});

$('#yes2').click(function(){
  Number($('#player-points').text(0));
  Number($('#dealer-points').text(0));
  $('#player-hand').empty();
  $('#dealer-hand').empty();
  $('#modal').hide();
});

$('#no2').click(function(){
  Number($('#player-points').text(0));
  Number($('#dealer-points').text(0));
  $('#player-hand').empty();
  $('#dealer-hand').empty();
  $('#modal3').hide();
  $('#modal2').show();
  if(Number($('#dealer_wins').text()) < Number($('#player_wins').text())){
    $('#the_winner_is').text('Congratulations, you win!');
  } else {
    $('#the_winner_is').text('The house wins, better luck next time!');
  }
});
