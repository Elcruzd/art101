/*
* Author: Zhendong Jiang & Danielle Kraljevski
* Created: 3/8/2021
* License: Public Domain
*/

// Using the core $.ajax() method
$('#activate').click(function() {
    var apiUrl = "https://xkcd.com/info.0.json";
    var comicObj = {};

    $.ajax({
      // The URL for the request (from the api docs)
      url: apiUrl,
      // The data to send (will be converted to a query string)
      data: {

            },
      // Whether this is a POST or GET request
      type: "GET",
      // The type of data we expect back
      dataType : "json",
      // What do we do when the api call is successful
      //   all the action goes in here
      success: function(comicObj) {
        // do stuff
        // comicObj = data;
        $("#output-image").attr({
          src: comicObj.img,
          title: comicObj.title,
          alt: comicObj.alt
        });
        $("#srcLink").html("<p>" + comicObj.title + "</p> <img src='" + comicObj.img + "' title='" + comicObj.title + "' alt='" + comicObj.alt + "'>");
      },
      // What we do if the api call fails
      error: function (jqXHR, textStatus, errorThrown) {
          // do stuff
          console.log("Error:", textStatus, errorThrown);
          $("#output").html('<p>Error</p>');
      }
});
})
