$(document).ready(function(){

   //This is to remove the validation message if no poster image is present

   $('#term').focus(function(){
      var full = $("#poster").has("img").length ? true : false;
      if(full == false){
         $('#poster').empty();
      }
   });
	 //function definition

	    var getPoster = function(){

	         //Grab the movie title and store it in a variable

	         var film = $('#term').val();

	          //Check if the user has entered anything

	          if(film == ’){

	             //If the input field was empty, display a message

	             $('#poster').html("<h2 class='loading'>Ha! We haven't forgotten to validate the form! Please enter something.</h2>");
