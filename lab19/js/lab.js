/*
  * Authors: Marta Gubanova & Sebastian Tamiano
  * Created: 08 November 2020
  * License: Public Domain
*/
// Define the settings for API src: https://english.api.rakuten.net/matchilling/api/chuck-norris
var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "matchilling-chuck-norris-jokes-v1.p.rapidapi.com",
		"x-rapidapi-key": "028b4d9093msh44b009b56b3c9a0p1f2cc4jsn78386d8982ec",
		"accept": "application/json"
	}
}

// add event listener
$("#my-button").click(function(){
  // Get and post data
	$.ajax(settings).done(function( data ) {
		console.log(data);
    var joke = data.value;
		var url = 'https://assets.chucknorris.host/img/avatar/chuck-norris.png';
		$("#output").html(`<img src='${url}'>`);
    $("#output").append("<p>" + joke);
  })
  // If the request fails - Xsrc: Wes's jsfiddle
  .fail(function( xhr, status, errorThrown ) {
      console.log(errorThrown + " Status:" + status );
	})
})
