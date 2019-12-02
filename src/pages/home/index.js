import './index.sass';
import './index.pug';
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel';

export default () => {
  $('.more-info-link').on('click', function(e) {
      e.preventDefault();
      let scrollHeight = $(this).parent().parent('.header').outerHeight();
      $('html').animate({ scrollTop: scrollHeight } ,1500);
      return false;
  });


  $('.view-photo-button').on('click', function(e) {
    e.preventDefault();
    let scrollHeight =  $('#photos-section').offset().top;
    $('html').animate({ scrollTop: scrollHeight } ,1500);

  })

  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
      0:{
          items:1
      }
  }


  })




}

