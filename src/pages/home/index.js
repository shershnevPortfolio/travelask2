import './index.sass';
import './index.pug';
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel';

export default () => {
  $('.more-info-link').on('click', function(e) {
      e.preventDefault();
      let scrollHeight = $(this).parent().parent('.header').outerHeight();
      $('html').animate({ scrollTop: scrollHeight } ,1400);
      return false;
  });


  $('.view-photo-button').on('click', function(e) {
    e.preventDefault();
    let scrollHeight =  $('#photos-section').offset().top;
    $('html').animate({ scrollTop: scrollHeight } ,1400);
    return false;
  })

const carousel = $('.owl-carousel');
carousel.owlCarousel({
    loop:false,
    margin:10,
    nav:false,
    autoHeight : true,
    onChanged: callback,
    onInitialized: initialized,
    responsive:{
      0:{
          items:1
      },


  },


  },


  )

  function initialized(event) {
    let numberOfSliderNumbers = event.item.count;
    let outputString =  numberOfSliderNumbers >= 10?  numberOfSliderNumbers : `0${numberOfSliderNumbers}`;
    $('.slider-toggle__number--right').text(outputString);

    }

  function callback(event) {
    $('.slider-toggle__number--left').removeClass('slider-toggle__number--disabled');
    $('.slider-toggle__number--right').removeClass('slider-toggle__number--disabled');
    let currentSlideNumber = event.item.index + 1;
    let outputString = currentSlideNumber >= 10?  currentSlideNumber : `0${currentSlideNumber}`;
    $('.slider-toggle__number--left').text(outputString);
    if(+currentSlideNumber  == +event.item.count) {
      $('.slider-toggle__number--right').addClass('slider-toggle__number--disabled');
      $('.slider-toggle__number--left').removeClass('slider-toggle__number--disabled');
    }
    if(+currentSlideNumber <= 1) {
      $('.slider-toggle__number--left').addClass('slider-toggle__number--disabled');
      $('.slider-toggle__number--right').removeClass('slider-toggle__number--disabled');
    }
  }



  $('.slider-toggle__link--right').on('click', function(e) {
    e.preventDefault();
    carousel.trigger('next.owl.carousel');

  })

  $('.slider-toggle__link--left').on('click', function (e) {
    e.preventDefault();
    carousel.trigger('prev.owl.carousel');
  })


}

