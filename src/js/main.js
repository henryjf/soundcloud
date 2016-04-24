import $ from 'jquery';

var token = 'ca1d7249459344a30f833b3bc59fc9ba';
var url = 'https://api.soundcloud.com/tracks/?client_id=' + token + "&limit=15&q=springsteen";

  var trackTemplate = function (track){
    if (track.artwork_url === null)
    track.artwork_url = 'http://placehold.it/100x100'

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
