$(document).ready(function () {
    
  // console.log($(".header__account-link"));
  $(".header__account-link").click(function(e){
      e.preventDefault();
      $(".header__account-link").removeClass("btn--green");
      $(this).addClass("btn--green");
  });

  $('.header__slider-wrapper').slick({
    slidesToShow: 1,
      prevArrow:"<button class='slider-prev slider-btn'><span class='slider-btn-title'>Previous</span> <span class='slider-btn-text'>Kaktus Plant</span></button>",

      nextArrow:"<button class='slider-next btn--green slider-btn'><span class='slider-btn-title'>Next</span> <span class='slider-btn-text'>Rahasia Plant</span></button>"
  });


  $(".plants__slider").slick({
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      centerMode: true,
      variableWidth: true,
      arrows: false,
      responsive: [
          {
            breakpoint: 1301,
            settings: {
              infinite: true,
              slidesToShow: 4,
              slidesToScroll: 1,
              centerMode: false,
              variableWidth: false,
              arrows: false,
            }
          },
          {
            breakpoint: 769,
            settings: {
              infinite: true,
              slidesToShow: 3,
              slidesToScroll: 1,
              centerMode: false,
              variableWidth: false,
              arrows: false,
            }
          },
          {
            breakpoint: 591,
            settings: {
              infinite: true,
              slidesToShow: 2,
              slidesToScroll: 1,
              centerMode: false,
              variableWidth: false,
              arrows: false,
            }
          },

        ]
  });

  $(".slider-btn").click(function(e){
    e.preventDefault();
    $(".slider-btn").removeClass("btn--green");
    $(this).addClass("btn--green");    

});

});