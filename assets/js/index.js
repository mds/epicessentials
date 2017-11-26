$( document ).ready(function() {


  // SCROLL MAGIC
  // init controller
  var controller = new ScrollMagic.Controller();

  // Shirt Scene ------------------------------------------------------------
  // build tween
  var tweenShirt = new TimelineMax ()
    .add([
      TweenMax.fromTo("#shirt .ee-small-product-1", 1, {top: 300}, {top: -500, ease: Linear.easeOut}),
      TweenMax.fromTo("#shirt .ee-small-product-2", 1, {top: 100}, {top: -175, ease: Linear.easeOut})
    ]);

  // build scene
  var scene1 = new ScrollMagic.Scene({triggerElement: "#shirt", triggerHook: 'onLeave', duration: $(".ee-big-product-container").height()})
    .setTween(tweenShirt)
    // .addIndicators() // add indicators (requires plugin)
    .addTo(controller);

  // update product info
    scene1.on("enter", function (event) {
      $('.ee-nav a').removeClass("ee-nav--is-active"); // remove active from all
      $('.ee-nav a[href^="#shirt"]').addClass("ee-nav--is-active"); // make active
      $(".ee-product-title").html("epic shirt");
      $(".ee-product-price").html("$35");
      $(".ee-product-style").html('<p>select a color</p><li><a href="#">black</a></li><li><a href="#">grey</a></li><li><a href="#">white</a></li>');
    });
  // END Shirt Scene ------------------------------------------------------------

  // Hoodie Scene ------------------------------------------------------------
  // build tween
  var tweenHoodie = new TimelineMax ()
    .add([
      TweenMax.fromTo("#hoodie .ee-small-product-1", 1, {top: 300}, {top: -500, ease: Linear.easeOut}),
      TweenMax.fromTo("#hoodie .ee-small-product-2", 1, {top: 100}, {top: -175, ease: Linear.easeOut})
    ]);

  // build scene
  var scene2 = new ScrollMagic.Scene({triggerElement: "#hoodie", triggerHook: 'onLeave', duration: $(".ee-big-product-container").height()})
    .setTween(tweenHoodie)
    // .addIndicators() // add indicators (requires plugin)
    .addTo(controller);

    // update product info
    scene2.on("enter", function (event) {
      $('.ee-nav a').removeClass("ee-nav--is-active"); // remove active from all
      $('.ee-nav a[href^="#hoodie"]').addClass("ee-nav--is-active"); // make active
      $(".ee-product-title").html("epic hoodie");
      $(".ee-product-price").html("$60");
      $(".ee-product-style").html('<p>select a color</p><li><a href="#">black</a></li><li><a href="#">grey</a></li>');
    });
  // END Hoodie Scene ------------------------------------------------------------

  // Trucker Hat Scene ------------------------------------------------------------
  // build tween
  var tweenTruckerHat = new TimelineMax ()
    .add([
      TweenMax.fromTo("#truckerhat .ee-small-product-1", 1, {top: 300}, {top: -500, ease: Linear.easeOut}),
      TweenMax.fromTo("#truckerhat .ee-small-product-2", 1, {top: 100}, {top: -175, ease: Linear.easeOut})
    ]);

  // build scene
  var scene3 = new ScrollMagic.Scene({triggerElement: "#truckerhat", triggerHook: 'onLeave', duration: $(".ee-big-product-container").height()})
    .setTween(tweenTruckerHat)
    // .addIndicators() // add indicators (requires plugin)
    .addTo(controller);

  // update nav + info
    scene3.on("enter", function (event) {
      $('.ee-nav a').removeClass("ee-nav--is-active"); // remove active from all
      $('.ee-nav a[href^="#truckerhat"]').addClass("ee-nav--is-active"); // make active
      $(".ee-product-title").html("epic trucker hat");
      $(".ee-product-price").html("$25");
      $(".ee-product-style").html('<p>select a style</p><li><a href="#">regular</a></li><li><a href="#">distressed</a></li>');
      $(".ee-product-size").html('<p>(one size fits all)</p>');
    });
  // END Trucker Hat Scene ------------------------------------------------------------

  // Beanie Scene ------------------------------------------------------------
  // build tween
  var tweenBeanie = new TimelineMax ()
    .add([
      TweenMax.fromTo("#beanie .ee-small-product-1", 1, {top: 300}, {top: -500, ease: Linear.easeOut}),
      TweenMax.fromTo("#beanie .ee-small-product-2", 1, {top: 100}, {top: -175, ease: Linear.easeOut})
    ]);

  // build scene
  var scene4 = new ScrollMagic.Scene({triggerElement: "#beanie", triggerHook: 'onLeave', duration: $(".ee-big-product-container").height()})
    .setTween(tweenBeanie)
    // .addIndicators() // add indicators (requires plugin)
    .addTo(controller);

  // update nav + info
    scene4.on("enter", function (event) {
      $('.ee-nav a').removeClass("ee-nav--is-active"); // remove active from all
      $('.ee-nav a[href^="#beanie"]').addClass("ee-nav--is-active"); // make active
      $(".ee-product-title").html("epic beanie");
      $(".ee-product-price").html("$25");
      $(".ee-product-style").html('<p>(black)</p>');
      $(".ee-product-size").html('<p>(one size fits all)</p>');
    });
  // END Beanie Scene ------------------------------------------------------------

  // // change behaviour of controller to animate scroll instead of jump
  // controller.scrollTo(function (newpos) {
  //   TweenMax.to(window, 0.5, {scrollTo: {y: newpos}});
  // });

  // //  bind scroll to anchor links
  // $(document).on("click", "a[href^='#']", function (e) {
  //   var id = $(this).attr("href");
  //   if ($(id).length > 0) {
  //     e.preventDefault();

  //     // trigger scroll
  //     controller.scrollTo(id);

  //       // if supported by the browser we can even update the URL.
  //     if (window.history && window.history.pushState) {
  //       history.pushState("", document.title, id);
  //     }
  //   }
  // });

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

  function disableScenes(){
    scene1.enabled(false);
    scene2.enabled(false);
    scene3.enabled(false);
    scene4.enabled(false);
  }

  function enableScenes(){
    scene1.enabled(true);
    scene2.enabled(true);
    scene3.enabled(true);
    scene4.enabled(true);
  }


});
