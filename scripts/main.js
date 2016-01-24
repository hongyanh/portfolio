var tags = $('figure .tag');
var selectedTag = '';

$('.filter .tag').click(function() {
  selectedTag = $(this).text();
  $('.filter .tag').removeClass('active');
  $(this).addClass('active');
  $('figure').hide();
  for (var i = 0; i < tags.length; i++) {
    if (tags[i].innerHTML == selectedTag) {
      $(tags[i].parentElement.parentElement).show();
    }
  }
});

$( ".filter .tag:first" ).trigger( "click" );