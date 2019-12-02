import './index.sass';
import './index.pug';

export default () => {
  $('.more-info-link').on('click', function(e) {
      e.preventDefault();
      let scrollHeight = $(this).parent().parent('.header').outerHeight();
      $('html').animate({ scrollTop: scrollHeight } ,1000);
  });
};
