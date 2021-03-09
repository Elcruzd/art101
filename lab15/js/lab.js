/*
* Author: Zhendong Jiang & Danielle Kraljevski
* Created: 3/3/2021
* License: Public Domain
*/

$('#activate').click(function() {
    var topic = $('#input').val();
  console.log(topic)
    var apiUrl = "https://en.wikipedia.org/api/rest_v1/page/summary/" + topic.replace(" ", "_") + "?redirect=true";
  console.log(apiUrl);
  $.ajax({
      // The URL for the request
      url: apiUrl,
      // The data to send (will be converted to a query string)
      data: { },
      // Whether this is a POST or GET request
      type: "GET",
      // The type of data we expect back
      dataType : "json",
  })
    // If the request succeeds
  .done(function(data) {
      $('#output').html(data.extract_html);
  })
  // If the request fails
  .fail(function(xhr, status, errorThrown) {
      $('#output').html('<p>I could not find anything!</p>');
  });
})
