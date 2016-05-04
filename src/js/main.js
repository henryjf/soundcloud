import $ from 'jquery';

// var btn = document.querySelector('.button')
var jbtn = $('.button');
var form =$('.searchbox')
var search = $('.text');
var albums = $('.albums');

form.on('submit', function(event){
  event.preventDefault();

  var searchTerm = search.val()
  console.log(searchTerm);

  albums.empty();

  // Using JSON/promise to return responses until the designated number is reached
  $.getJSON(url + searchTerm).then(function (response){
    response.forEach(function(track){
      var html = trackTemplate(track);
      albums.append(html);
    });
    console.log(response);
  });


});

albums.on('click', '.artwork', function (event) {
  event.preventDefault();
  console.log($(this).find('span').text());
});


var token = 'ca1d7249459344a30f833b3bc59fc9ba';
var url = 'https://api.soundcloud.com/tracks/?client_id=' + token + "&limit=15&q=";

// Creating an expression to display artwork if available, otherwise display blank placeholdit
  var trackTemplate = function (track){
    if (track.artwork_url === null)
    track.artwork_url = 'http://placehold.it/100x100'

//Converting html to js via template to pull in artwork and title
  return `
    <div class="artwork">
      <img src="${track.artwork_url}"alt="${track.title}" />
      <p>${track.title}</p>
      <span>${track.title}</span>
    </div>
     `};
