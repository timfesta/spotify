$(function() {

	var $spotifySearch = $('#spotify-search')
	var $track = $('#track');
	var $resultsList = $('#results-list')

$spotifySearch.on('submit', function(event) {
	console.log('searching a song');
	event.preventDefault();
	console.log($track.val());

	$resultsList.append($('<li></li>').text($track.val()));
});

$.get(
  https://i.scdn.co/image/b0ae201f3095f165f02bf23d41725023d33f0cbd,
  function(data) {
    console.log(data);
  }
);

});
