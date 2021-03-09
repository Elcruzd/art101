/*
* Author: Zhendong Jiang & Danielle Kraljevski
* Created: 3/8/2021
* License: Public Domain
*/

// Using the core $.ajax() method
$("#backward").hide();
$("#forward").hide();
$("#tryAgain").hide();

$('#activate').click(function() {
    var apiUrl = "https://xkcd.com/info.0.json";
    var comicObj = {};

    function getAndPutData(apiUrl) { $.ajax({
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
      success: function(data) {
        // do stuff
        comicObj = data;
        $("#output-image").attr({
          src: data.img,
          title: data.title,
          alt: data.alt
        });
        $("#srcLink").html("<p>" + data.title + "</p> <img src='" + data.img + "' title='" + data.title + "' alt='" + data.alt + "'>");
      },
      // What we do if the api call fails
      error: function (jqXHR, textStatus, errorThrown) {
          // do stuff
          console.log("Error:", textStatus, errorThrown);
          $("#output").html('<p>Error! Please use the try again button.</p>');
          $("#tryAgain").show();
          $("#activate").hide();
          $("#other").hide();
      }
});
}
getAndPutData("https://xkcd.com/info.0.json");
$("#backward").click(function() {
  var comicNum = comicObj.num - 1;
  var newUrl = "https://xkcd.com/" + comicNum + "/info.0.json";
  getAndPutData(newUrl);
})

$("#forward").click(function() {
  var comicNum = comicObj.num + 1;
  var newUrl = "https://xkcd.com/" + comicNum + "/info.0.json";
  getAndPutData(newUrl);
})

$("#backward").show();
$("#forward").show();
})

$('#other').click(function() {
    var apiUrl = "https://xkcd.com/info.0.json";
    var comicObj = {};

    function getAndPutData(apiUrl) { $.ajax({
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
      success: function(data) {
        // do stuff
        comicObj = data;
        $("#output-image").attr({
          src: data.img,
          title: data.title,
          alt: data.alt
        });
        $("#srcLink").html("<p>" + data.title + "</p> <img src='" + data.img + "' title='" + data.title + "' alt='" + data.alt + "'>");
      },
      // What we do if the api call fails
      error: function (jqXHR, textStatus, errorThrown) {
          // do stuff
          console.log("Error:", textStatus, errorThrown);
          $("#output").html('<p>Error! Please use the try again button.</p>');
          $("#tryAgain").show();
          $("#activate").hide();
          $("#other").hide();
      }
});
}
getAndPutData("https://xkcd.com/614/info.0.json");
$("#backward").click(function() {
  var comicNum = comicObj.num - 1;
  var newUrl = "https://xkcd.com/" + comicNum + "/info.0.json";
  getAndPutData(newUrl);
})

$("#forward").click(function() {
  var comicNum = comicObj.num + 1;
  var newUrl = "https://xkcd.com/" + comicNum + "/info.0.json";
  getAndPutData(newUrl);
})
$("#backward").show();
$("#forward").show();
})

$("#tryAgain").click(function() {
  window.location.reload();
})
