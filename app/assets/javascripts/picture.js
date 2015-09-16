// $(document).ready(function() {
//   $('.like-btn').on('click', function(e) {
//     e.stopPropagation();
//     e.preventDefault();
//     var url = $(this).parent().attr('href');
//     $.ajax({
//       url: url,
//       method: 'POST'
//     }).done(function(data){
//       $(this).children().toggleClass('red-heart').toggleClass('grey-heart');
//     }.bind(this));
//   });
// });
