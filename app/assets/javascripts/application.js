//= require rails-ujs
//= require jquery
//= require jquery_ujs
//= require_tree .

$(document).on('ready', function() {
  $('#generate_data').click(function(event) {
    event.preventDefault();
    $.ajax({
      method: 'POST',
      url: '/home/generate',
      beforeSend: function() {
        $('#result').html('Processing...');
      },
      success: function(data) {
        $('#result').html('Done!');
      }
    });
  });
});
