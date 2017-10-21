$(function() {
  
  
      // make the call to the endpoint
     $.ajax({
        method: 'GET',
        url: 'https://swapi.co/api/people/',
        dataType: 'json'
      })
      // if it works...
      .done(function(data) {
        d = data.results;
        console.log(data);
        
      })
      // and if it fails...
      .fail(function() {
        $('div').append('<li>Sorry! There was a problem, please try again.</li>');
      });
  });
  