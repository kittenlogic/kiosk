/* ========================================================================
 * Aeon Lasers USA
 *
 * ========================================================================*/


jQuery(document).ready(function($){

  /******************
   scroll-to-element
  ******************/

  $('a[href^="#"]:not([data-toggle="collapse"]):not([href="#"]):not([href="#0"]):not([href="#models"]):not([href="#size"]):not([href="#power"]):not([href="#accessories"]):not([href="#upgrade"]):not([href="#summary"])').click(function(e){
      e.preventDefault();
      var id = $(this).attr("href").substring(1);
      $("body, html").animate({
          'scrollTop': $("#" + id).offset().top
      });
  });


  /******************
   isotope.pkgd.js
  ******************/

  // init Isotope
  var $grid = $('.grid').isotope({
    itemSelector: '.machine'
  });

  // store filter for each group
  var filters = {};

  $('.filters').on( 'click', '.button', function() {
    var $this = $(this);
    // get group key
    var $buttonGroup = $this.parents('.button-group');
    var filterGroup = $buttonGroup.attr('data-filter-group');
    // set filter for group
    filters[ filterGroup ] = $this.attr('data-filter');
    // combine filters
    var filterValue = concatValues( filters );
    // set filter for Isotope
    $grid.isotope({ filter: filterValue });
  });

  // change is-checked class on buttons
  $('.button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'button', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $( this ).addClass('is-checked');
    });
  });

  // flatten object by concatting values
  function concatValues( obj ) {
    var value = '';
    for ( var prop in obj ) {
      value += obj[ prop ];
    }
    return value;
  }

  /******************
   slick slider
  ******************/

    $('.slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      fade: false,
      asNavFor: '.slider-nav-thumbnails',
    });

    $('.slider-nav-thumbnails').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      asNavFor: '.slider',
      dots: true,
      centerMode: false,
      focusOnSelect: true
    });

    $('.carousel-banner').slick({
      dots: true,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear',
      autoplay: true,
      autoplaySpeed: 12000,
      lazyLoad: 'ondemand'
    });

    $('.carousel-whyus').slick({
      dots: true,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear',
      autoplay: true,
      autoplaySpeed: 12000,
      lazyLoad: 'ondemand'
    });

    $('.carousel-webinar').slick({
      dots: true,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear',
      autoplay: true,
      autoplaySpeed: 15000,
      lazyLoad: 'ondemand'
    });

    $('.carousel-support').slick({
      dots: true,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear',
      autoplay: true,
      autoplaySpeed: 15000,
      lazyLoad: 'ondemand'
    });

    $('.carousel-spotlight').slick({
      dots: true,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear',
      autoplay: true,
      autoplaySpeed: 8000,
      lazyLoad: 'ondemand'
    });

    $('.carousel-cabinet').slick({
      dots: true,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear',
      autoplay: true,
      autoplaySpeed: 8000,
      lazyLoad: 'ondemand'
    });


  /******************
   lightbox
  ******************/

  $('.lightbox').click(function(){
    var modelsList = $('.models-list .js-radio');
    $('#roll_top').hide();
    $('#fb-root').hide();
    $('.lightbox-backdrop, .lightbox-box').animate({'opacity':'.50'}, 300, 'linear');
    $('.lightbox-box').animate({'opacity':'1.00'}, 300, 'linear');
    $('.lightbox-backdrop, .lightbox-box').css('display', 'block');
    $("body").css("overflow", "hidden");
    if ( modelsList.hasClass('selected') ) {
      console.log('meow');
    } else {
      $( ".cd-product-builder .models-list .radio" ).trigger( "click" );
    }

    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();
    if (dd < 10) {
      dd = '0' + dd;
    }
    if (mm < 10) {
      mm = '0' + mm;
    }
    today = mm + '/' + dd + '/' + yyyy;
    document.getElementById('timestamp').innerHTML = today;
  });

  $('.lightbox-close').click(function(){
    close_box();
    $("body").css("overflow", "auto");
  });

  $('.lightbox-backdrop').click(function(){
    close_box();
    $("body").css("overflow", "auto");
  });

  function close_box(){
    $('.lightbox-backdrop, .lightbox-box').animate({'opacity':'0'}, 300, 'linear', function(){
      $('.lightbox-backdrop, .lightbox-box').css('display', 'none');
    });
  }

  $('a[data-toggle="tooltip"]').tooltip({
    animated: 'fade',
    placement: 'top',
    trigger: 'click hover focus'
  });

  $('a[data-toggle="tooltip-left"]').tooltip({
    animated: 'fade',
    placement: 'left',
    trigger: 'click hover focus'
  });

  $('a[data-toggle="popover"]').popover({
    animated: 'fade',
    placement: 'top',
    trigger: 'click hover focus'
  });



});

/******************
 autoselect model
******************/
function dropDownSelect(selected) {
  $(".choose-model select").val(selected);
}

/******************
 notification bar
******************/
$('#notify').click(function (e) {
    e.stopPropagation();
});
$('.notifications').click(function (e) {
    if (!$('.notify').is($(e.target))) {
        $('#notify').prop("checked", false);
    }
});
