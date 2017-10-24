//= require rails-ujs
//= require pusher
//= require jquery
//= require jquery_ujs
//= require_tree .

Pusher.logToConsole = true;

var pusher = new Pusher('7c6209e9c11fb9e50bc4', {
  cluster: 'eu',
  encrypted: true
});

$(document).on('ready', function() {
  $('#generate_data').click(function(event) {
    var channel = pusher.subscribe('my-channel');
    event.preventDefault();

    $.ajax({
      method: 'POST',
      url: '/home/generate',
      beforeSend: function() {
        $('#result').html('Processing...');
      },
      success: function(data) {
        channel.bind('generate', function(data) {
          $('#result').html(data.url);
        });
      }
    });
  });
});
