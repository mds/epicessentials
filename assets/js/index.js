// $( document ).ready(function() {
$(window).on("load", function() {

  // SCROLL MAGIC
  // init controller
  var controller = new ScrollMagic.Controller();

  // Shirt Scene ------------------------------------------------------------
  // build tween
  var tweenShirt = new TimelineMax ()
    .add([
      TweenMax.fromTo("#shirt .ee-small-product-1", 1, {y: 300}, {y: -500, ease: Linear.easeOut}),
      TweenMax.fromTo("#shirt .ee-small-product-2", 1, {y: 100}, {y: -175, ease: Linear.easeOut})
    ]);

  // build scene
  var scene1 = new ScrollMagic.Scene({triggerElement: "#shirt", triggerHook: 'onLeave', duration: $(".ee-product-container").height()})
    .setTween(tweenShirt)
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);

  // update product info
    scene1.on("enter", function (event) {
      $('.ee-nav a').removeClass("ee-nav--is-active"); // remove active from all
      $('.ee-nav a[href^="#shirt"]').addClass("ee-nav--is-active"); // make active
      $(".ee-product-title").html("epic shirt");
      $(".ee-product-price").html("$35");
      $(".ee-product-style").html('<p>select a color</p><li><a>black</a></li><li><a>grey</a></li><li><a>white</a></li>');
    });
  // END Shirt Scene ------------------------------------------------------------

  // Hoodie Scene ------------------------------------------------------------
  // build tween
  var tweenHoodie = new TimelineMax ()
    .add([
      TweenMax.fromTo("#hoodie .ee-small-product-1", 1, {y: 300}, {y: -500, ease: Linear.easeOut}),
      TweenMax.fromTo("#hoodie .ee-small-product-2", 1, {y: 100}, {y: -175, ease: Linear.easeOut}),
      // TweenMax.fromTo("#hoodie .ee-big-product img", 1, {y: 0}, {y: -400, ease: Linear.easeOut})
    ]);

  // build scene
  var scene2 = new ScrollMagic.Scene({triggerElement: "#hoodie", triggerHook: 'onLeave', duration: $(".ee-product-container").height()})
    .setTween(tweenHoodie)
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);

    // update product info
    scene2.on("enter", function (event) {
      $('.ee-nav a').removeClass("ee-nav--is-active"); // remove active from all
      $('.ee-nav a[href^="#hoodie"]').addClass("ee-nav--is-active"); // make active
      $(".ee-product-title").html("epic hoodie");
      $(".ee-product-price").html("$60");
      $(".ee-product-style").html('<p>select a color</p><li><a>black</a></li><li><a>grey</a></li>');
      $(".ee-product-size").html('<p>select a unisex size</p><li><a>s</a></li><li><a>m</a></li><li><a>l</a></li><li><a>xl</a></li><li><a>xxl</a></li><p>(they run small)</p>');
    });
  // END Hoodie Scene ------------------------------------------------------------

  // Trucker Hat Scene ------------------------------------------------------------
  // build tween
  var tweenTruckerHat = new TimelineMax ()
    .add([
      TweenMax.fromTo("#truckerhat .ee-small-product-1", 1, {y: 300}, {y: -500, ease: Linear.easeOut}),
      TweenMax.fromTo("#truckerhat .ee-small-product-2", 1, {y: 100}, {y: -175, ease: Linear.easeOut})
    ]);

  // build scene
  var scene3 = new ScrollMagic.Scene({triggerElement: "#truckerhat", triggerHook: 'onLeave', duration: $(".ee-product-container").height()})
    .setTween(tweenTruckerHat)
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);

  // update nav + info
    scene3.on("enter", function (event) {
      $('.ee-nav a').removeClass("ee-nav--is-active"); // remove active from all
      $('.ee-nav a[href^="#truckerhat"]').addClass("ee-nav--is-active"); // make active
      $(".ee-product-title").html("epic trucker hat");
      $(".ee-product-price").html("$25");
      $(".ee-product-style").html('<p>select a style</p><li><a>regular</a></li><li><a>distressed</a></li>');
      $(".ee-product-size").html('<p>(one size fits all)</p>');
      $(".ee-product-size").html('<p>select a unisex size</p><li><a>s</a></li><li><a>m</a></li><li><a>l</a></li><li><a>xl</a></li><li><a>xxl</a></li><p>(they run small)</p>');
    });
  // END Trucker Hat Scene ------------------------------------------------------------

  // dad hat scene ------------------------------------------------------------
  // build tween
  var tweenDadHat = new TimelineMax ()
    .add([
      TweenMax.fromTo("#dadhat .ee-small-product-1", 1, {y: 300}, {y: -500, ease: Linear.easeOut}),
      TweenMax.fromTo("#dadhat .ee-small-product-2", 1, {y: 100}, {y: -175, ease: Linear.easeOut})
    ]);

  // build scene
  var scene4 = new ScrollMagic.Scene({triggerElement: "#dadhat", triggerHook: 'onLeave', duration: $(".ee-product-container").height()})
    .setTween(tweenDadHat)
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);

  // update nav + info
    scene4.on("enter", function (event) {
      $('.ee-nav a').removeClass("ee-nav--is-active"); // remove active from all
      $('.ee-nav a[href^="#dadhat"]').addClass("ee-nav--is-active"); // make active
      $(".ee-product-title").html("epic dad hat");
      $(".ee-product-price").html("$25");
      $(".ee-product-style").html('<p>(black)</p>');
      $(".ee-product-size").html('<p>(one size fits all)</p>');
    });
  // END dad hat scene ------------------------------------------------------------

  // Beanie Scene ------------------------------------------------------------
  // build tween
  var tweenBeanie = new TimelineMax ()
    .add([
      TweenMax.fromTo("#beanie .ee-small-product-1", 1, {y: 300}, {y: -500, ease: Linear.easeOut}),
      TweenMax.fromTo("#beanie .ee-small-product-2", 1, {y: 100}, {y: -175, ease: Linear.easeOut})
    ]);

  // build scene
  var scene5 = new ScrollMagic.Scene({triggerElement: "#beanie", triggerHook: 'onLeave', duration: $(".ee-product-container").height()})
    .setTween(tweenBeanie)
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);

  // update nav + info
    scene5.on("enter", function (event) {
      $('.ee-nav a').removeClass("ee-nav--is-active"); // remove active from all
      $('.ee-nav a[href^="#beanie"]').addClass("ee-nav--is-active"); // make active
      $(".ee-product-title").html("epic beanie");
      $(".ee-product-price").html("$25");
      $(".ee-product-style").html('<p>(black)</p>');
      $(".ee-product-size").html('<p>(one size fits all)</p>');
    });
  // END Beanie Scene ------------------------------------------------------------

  // CUSTOM SCROLL JS
  var $root = $('html, body');
  $('.ee-nav a[href^="#"]').click(function() {
      var href = $.attr(this, 'href');

      // updates hashmark on nav
      $('.ee-nav a').removeClass("ee-nav--is-active"); // remove active from all
      $(this).addClass("ee-nav--is-active"); // make active

      // animates scroll
      $root.animate({
          scrollTop: $(href).offset().top + 5
      }, 1000, function () {
          window.location.hash = href;
      });

      return false;
  });

  // updates hashmark on navigation click
  $('.ee-nav a').on("click", function (event) {
    $('.ee-nav a').removeClass("ee-nav--is-active"); // remove active from all
    $(this).addClass("ee-nav--is-active"); // make active
  });

  // select style
  $('.ee-product-style a').on("click", function (event) {
    $('.ee-product-style a').removeClass("ee-product-attribute--is-selected");
    $(this).addClass("ee-product-attribute--is-selected");
    console.log("style fired");
  });

  // select size
  $('.ee-product-size a').on("click", function (event) {
    $('.ee-product-size a').removeClass("ee-product-attribute--is-selected");
    $(this).addClass("ee-product-attribute--is-selected");
    console.log("size fired");
  });


});
