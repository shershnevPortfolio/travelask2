import './index.sass';
import './index.pug';
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel';

export default () => {
  $('.more-info-link').on('click', function(e) {
      e.preventDefault();
      let scrollHeight = $(this).parent().parent('.header').outerHeight();
      $('html').animate({ scrollTop: scrollHeight } ,1000);
      return false;
  });


  $('.view-photo-button').on('click', function(e) {
    e.preventDefault();
    let scrollHeight =  $('#photos-section').offset().top;
    $('html').animate({ scrollTop: scrollHeight } ,1000);
    return false;
  })

const carousel = $('.owl-carousel');
carousel.owlCarousel({
    loop:false,
    margin:10,
    nav:false,
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
    let currentSlideNumber = event.item.index + 1;
    let outputString = currentSlideNumber >= 10?  currentSlideNumber : `0${currentSlideNumber}`;
    $('.slider-toggle__number--left').text(outputString);
    console.log(`current: ${+currentSlideNumber}`);
    console.log(`at all ${+event.item.count}`);
    if(+currentSlideNumber  == +event.item.count) {
      $('.slider-toggle__number--right').addClass('slider-toggle__number--disabled');
      $('.slider-toggle__number--left').removeClass('slider-toggle__number--disabled');
    }
    if(+currentSlideNumber <= 1) {
      $('.slider-toggle__number--left').addClass('slider-toggle__number--disabled');
      $('.slider-toggle__number--right').removeClass('slider-toggle__number--disabled');
    }
  }



  // console.log(carousel.find('.photos__container').length);
  $('.slider-toggle__link--right').on('click', function(e) {
    e.preventDefault();
  //   let currentSlideNumber = $('.slider-toggle__number--left').text();
  //   currentSlideNumber++;
  //   if(currentSlideNumber > numberOfSliderItems) {return false;};
    carousel.trigger('next.owl.carousel');
    // console.log(e.item.index + 'sad');
    // if(currentSlideNumber < 10) {

    //   return false;
    // }

  //   $('.slider-toggle__number--disabled').text(currentSlideNumber);
  //   return false;

  })

  $('.slider-toggle__link--left').on('click', function (e) {
    e.preventDefault();
    // console.log($('.slider-toggle__number--left').text());
    // let currentSlideNumber = $('.slider-toggle__number--left').text();
    // console.log(currentSlideNumber);
    // currentSlideNumber--;
    // if(currentSlideNumber < 1) {return false};
    carousel.trigger('prev.owl.carousel');
    // if(currentSlideNumber < 10) {
    //   $('.slider-toggle__number--left').text(`0${currentSlideNumber}`);
    //   return false;
    // }
    // $('.slider-toggle__number--left').text(currentSlideNumber);


  })


}

