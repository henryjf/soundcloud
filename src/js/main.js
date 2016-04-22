import $ from 'jquery';

var token = 'ca1d7249459344a30f833b3bc59fc9ba';
var url = 'https://api.soundcloud.com/tracks?client_id=' + token + "&limit=15&q=beatles";

$.getJSON(url).then(function (res){
  res.forEach(function(track){

    var htmlBlock = trackTemplate(track);

    $('.contianter').append(htmlBlock);
  })
  console.log(res);
});

function trackTemplate(track) {

  if (track.artwork_url=== null) 
    track.artowrk_url = 'http://placehold.it.100x200'

  return `
  <li><img src="${track.artwork_url}"><h4>${track.title}</h4></li>


<audio controls='controls'src="${track.stream_url}?client_id=?{token}"></audio>



  `
};
