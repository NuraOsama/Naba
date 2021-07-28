(function ($) {

    "use strict";
    new WOW().init();

      //preloader
      var  mainStatus  = $('#status'),
      mainBody = $('body'),
      mainPreloader  = $('#preloader');
 
      window.onload = function() {
       mainStatus.fadeOut();
       mainPreloader.delay(500).fadeOut('slow');
       mainBody.delay(500).css({
           'overflow': 'visible'
       });
      }

         
    //sticky navbar
    $(window).scroll(function () {
        if ($(window).scrollTop()) {
            $('.navbar-light').addClass('sticky-top').animate({

            }, 4000);

        } else {
            $('.navbar-light').removeClass('sticky-top').animate({

            }, 4000);

        }
    });
  
      // search 
     const $menu = $('.search');

     $(document).mouseup(function (e) {
     if (!$menu.is(e.target) // if the target of the click isn't the container...
     && $menu.has(e.target).length === 0) // ... nor a descendant of the container
     {
     $menu.removeClass('show');
     }
    });

$('.search-icon').on('click', () => {
  $menu.toggleClass('show');

});


(function($) {
    function doAnimations(elems) {
      var animEndEv = "webkitAnimationEnd animationend";
  
      elems.each(function() {
        var $this = $(this),
          $animationType = $this.data("animation");
        $this.addClass($animationType).one(animEndEv, function() {
          $this.removeClass($animationType);
        });
      });
    }
  
    var $myCarousel = $("#MainSliderFade"),
      $firstAnimatingElems = $myCarousel
        .find(".carousel-item:first")
        .find("[data-animation ^= 'animated']");
  
    $myCarousel.carousel();
  
    doAnimations($firstAnimatingElems);
  
    $myCarousel.on("slide.bs.carousel", function(e) {
      var $animatingElems = $(e.relatedTarget).find(
        "[data-animation ^= 'animated']"
      );
      doAnimations($animatingElems);
    });
  })(jQuery);

  //counter
$('.counter').each(function() {
  var $this = $(this),
      countTo = $this.attr('data-count');
  
  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },

  {

    duration: 30000,
    easing:'linear',
    step: function() {
      $this.text(Math.floor(this.countNum));
    },
    complete: function() {
      $this.text(this.countNum);
      //alert('finished');
    }

  });  
});

  //scroll to top
$(window).scroll(function(){
  if($(this).scrollTop() > 300) {
     $(".auto-scroll-to-top").addClass("visible");                    
   } else {
       $(".auto-scroll-to-top").removeClass("visible");
   }        
  });
   
 $(".auto-scroll-to-top").click(function(){
   $("html, body").animate({scrollTop: 0}, 1000);
 });
  
 

     //about testimonials

    $(document).ready(function(){
      $('.about-testimonials-owl').owlCarousel({
      animateOut: 'slideOutDown',
      animateIn: 'slideInUp',
      items:1,
      margin:30,
      stagePadding:30,
      smartSpeed:450,
      autoplay:true,

      });
    });


    //about countries

    $(document).ready(function(){
      $('.about-countries-owl').owlCarousel({
     animateOut: 'zoomOut',
      animateIn: 'zoomIn',
      items:1,
      margin:30,
      stagePadding:30,
      smartSpeed:450,
      autoplay:true,
      nav:false,
      dots:false
      });
    });

    //calender
$('.txtmiladyDate').calendarsPicker({
  dateFormat: 'dd/mm/yyyy',
    
});

// responsive main header

$(".nav-toggle").click(function(){
  $(".aside-header").fadeIn();
  $(this).addClass("hide");
 
  });

$(".btn-close").click(function(){
  $(".aside-header").fadeOut();
  $(".nav-toggle").removeClass("hide");
  });

  $(".background-fader").click(function(){
    $(".aside-header").fadeOut();
    $(".nav-toggle").removeClass("hide");
    });

  
    })(jQuery);