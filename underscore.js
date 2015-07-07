$(function() {

var $spotifySearch = $('#spotify-search');
var $track = $('#track');
var $results = $('#results');

var $resultsTemplate = _.template($('#results-template').html());

$spotifySearch.on('submit', function () {
	event.preventDefault();
	
	$.get(
		'https://api.spotify.com/v1/search?q='+ ($track.val()) +'&type=track', function (data) {
    console.log(data);

  });
});


});