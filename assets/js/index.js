$( document ).ready(function() {

  // rellax parallax
  // var rellax = new Rellax('.rellax', {
  //   center: true,
  //   speed: -2,
  //   vertical: true,
  //   callback: function(position) {
  //       // callback every position change
  //       console.log(position);
  //   }
  // });

  // scroll to anchor
  var $root = $('html, body');
  $('a[href^="#"]').click(function() {
      var href = $.attr(this, 'href');

      $root.animate({
          scrollTop: $(href).offset().top
      }, 1000, function () {
          window.location.hash = href;
      });

      return false;
  });

  // updates hashmark on navigation click
  $('.ee-nav a').on("click", function (event) {
    $('.ee-nav a').removeClass("ee-nav--is-active"); // remove has from all
    $(this).addClass("ee-nav--is-active"); // add to the one that was clicked
  });


});
