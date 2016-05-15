import $ from 'jquery';

// var btn = document.querySelector('.button')
var jbtn = $('.button');
var form =$('.searchbox')
var search = $('.text');
var albums = $('.albums');
var token = 'd852a0ec23f62dadd3e6ed6411a8a8dc';
var url = 'https://api.soundcloud.com/' ;

//form.on when clicked only targets searchTerm and prevents the whole page from refreshing
form.on('submit', function(event){
  event.preventDefault();
  //searchTerm is using search.val() to get the value of the search
  var searchTerm = search.val()
  //clears previous search and prevents appending of new data
  albums.empty();

  // Using JSON/promise to return responses until the designated number of responses is reached
  $.getJSON(url + 'tracks/?client_id='+ token + '&limit=15&q=' + searchTerm).then(function (response){
    //forEach iterates over the chosen array and selects tracks requested
    response.forEach(function(track){
      var html = trackTemplate(track);
      //adds each track to the end of array and posts to the page
      albums.append(html);
    });
  });

  //click event on albums which selects artwork class
  albums.on('click', '.artwork', function (event) {
    event.preventDefault();
//song is assigned value to find specific url for each selected album
    var song = $(this).find('.stream_url').text() + '?client_id=' + token  + "&limit=15&q=";
    // gets the attribute value of the audio source and song variable
    $('audio').attr('src', song);
    // console.log($(this).find('.stream_url').text());
  });

});

// Creating an expression to display artwork if available, otherwise display blank placeholdit
  var trackTemplate = function (track){
    if (track.artwork_url === null){
      track.artwork_url = 'http://placehold.it/100x100';
    }
//Converting html to js via template to pull in artwork and title
  return `
    <div class="artwork">
      <span class="stream_url">${track.stream_url}</span>
      <img src="${track.artwork_url}"alt="${track.title}" />
      <p>${track.title}</p>
      <span>${track.title}</span>
    </div>
     `};
