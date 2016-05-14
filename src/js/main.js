import $ from 'jquery';

// var btn = document.querySelector('.button')
var jbtn = $('.button');
var form =$('.searchbox')
var search = $('.text');
var albums = $('.albums');
var token = 'd852a0ec23f62dadd3e6ed6411a8a8dc';
var url = 'https://api.soundcloud.com/' ;


form.on('submit', function(event){
  event.preventDefault();
  var searchTerm = search.val()
  albums.empty();

  // Using JSON/promise to return responses until the designated number is reached
  $.getJSON(url + 'tracks/?client_id='+ token + '&q=' + searchTerm).then(function (response){
    response.forEach(function(track){
      var html = trackTemplate(track);
      albums.append(html);
    });
    // console.log(response);
  });
  albums.on('click', '.artwork', function (event) {
    event.preventDefault();
    var song = $(this).find('.stream_url').text()+ '?client_id=' + token ;
    console.log(song);
    $('audio').attr('src', song);
    //console.log($(this).find('span').text());
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
