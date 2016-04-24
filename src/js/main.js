import $ from 'jquery';

var token = 'ca1d7249459344a30f833b3bc59fc9ba';
var url = 'https://api.soundcloud.com/tracks/?client_id=' + token + "&limit=15&q=springsteen";
// var url = 'https://api.soundcloud.com/tracks/?client_id=ca1d7249459344a30f833b3bc59fc9ba&limit=15&q=beatles';

// var container = $('.container');

  var trackTemplate = function (track){
    if (track.artwork_url === null)
    track.artwork_url = 'http://placehold.it/100x100'

    // <audio src="${track.stream_url}/?client_id=${token}" controls="controls"></audio>
  return `


    <div class="artwork">
      <img src="${track.artwork_url}"alt="${track.title}" />
      <p>${track.title}</p>
    </div>

  `
};
$.getJSON(url).then(function (response){
  response.forEach(function(track){
    var html = trackTemplate(track);
    $('.container').append(html);
  });
  console.log(response);
});


    // var htmlBlock = trackTemplate(track);
    //
    // $('.container').append(htmlBlock);

// function trackTemplate(track) {
//
//   if (track.artwork_url=== null)
//     track.artwork_url = 'http://placehold.it/100x100'
//
//   return `
//   <li><img src="${track.artwork_url}"><h4>${track.title}</h4></li>
// <audio controls='controls'src="${track.stream_url}?client_id=?{token}"></audio>
//
//
//
//   `
 // };
