
var app = {
  server: "https://formsws-hilstaging-com-k0mfqqpppw0s.runscope.net/solar",
  message: []
};


app.init = function() {
  //jQuery cache selectors
  app.$message = $('#message');
  app.$send = $('#send');

  //listeners
  app.$send.on('submit', app.handleSubmit);
};

app.send = function(message) {

  $.ajax({
    // This is the url you should use to communicate with the parse API server.
    url: 'https://formsws-hilstaging-com-k0mfqqpppw0s.runscope.net/solar',
    type: 'POST',
    data: JSON.stringify(message),
    contentType: 'application/json',
    success: function (data) {
      console.log('modernize: lead sent');
      app.$message.val('');
    },
    error: function (error) {
      // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('modernize: Failed to send lead', error);
    }
  });
};
