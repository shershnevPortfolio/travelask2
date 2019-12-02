import './index.sass';
import './index.pug';

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
}

