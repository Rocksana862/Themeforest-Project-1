(function ($){
// video play pluging
  "use strict";
  new VenoBox({
    selector: ".my-link"
});

// slick slider
$('.client-logo-carousel').slick({
  dots: false,
  infinite: true,
  autoplay: true,
  arrows: false,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 5,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: false,
        dots: false
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: false,
        dots: false
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: false,
        dots: false
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: false,
        dots: false
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        dots: false
      }
    },
  






    

  ]
});

//  Main Menu  Responsive
    $('.main-menu').find('li a').each(function () {
      if ($(this).next().length > 0) {
        $(this).parent('li').append('<span class="menu-trigger"><i class="icofont-thin-down"></i></span>');
      }
    }); 
  
    $('.main-menu').find('li .menu-trigger').on('click', function (e) {
      e.preventDefault();
      $(this).toggleClass('open').parent('li').children('ul').stop(true, true).slideToggle(350);
      $(this).find("i").toggleClass("icofont-thin-up icofont-thin-down");
    });
  
  function breakpointCheck() {
    var windoWidth = window.innerWidth;

    if (windoWidth <= 991) {
      $('.header-menu').addClass('mobile-menu');
    } else {
      $('.header-menu').removeClass('mobile-menu');
    }
  }
  
  breakpointCheck();
  $(window).on('resize', function () {
    breakpointCheck();
  });


  $('.nav-toggler').on('click', function (e) {
    $('.site-navbar').toggleClass('menu-on');
    e.preventDefault();
  });

  // Close menu on toggler click
  $('.nav-close').on('click', function (e) {
    $('.site-navbar').removeClass('menu-on');
    e.preventDefault();
  });


// Stickey Menu bar

  // $(window).scroll(function () {
  //   var window_top = $(window).scrollTop() + 1;
  //   if (window_top > 50) {
  //     $('.navbar-sticky').addClass('menu_fixed animated fadeInDown');
  //   } else {
  //     $('.navbar-sticky').removeClass('menu_fixed animated fadeInDown');
  //   }
  // });



})(jQuery);











