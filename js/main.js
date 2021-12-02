$(document).ready(function () {
    
    // console.log($(".header__account-link"));
    $(".header__account-link").click(function(e){
        e.preventDefault();
        $(".header__account-link").removeClass("btn--green");
        $(this).addClass("btn--green");
    });

    $('.header__slider-wrapper').slick({
        prevArrow:"<button class='slider-prev slider-btn'><span class='slider-btn-title'>Previous</span> <span class='slider-btn-text'>Kaktus Plant</span></button>",

        nextArrow:"<button class='slider-next btn--green slider-btn'><span class='slider-btn-title'>Next</span> <span class='slider-btn-text'>Rahasia Plant</span></button>"
    });

    $(".slider-btn").click(function(e){
        e.preventDefault();
        $(".slider-btn").removeClass("btn--green");
        $(this).addClass("btn--green");    

    });

    $(".plants__slider").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        variableWidth: true,
        arrows: false,
        responsive: [
            {
              breakpoint: 1300,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                variableWidth: true,
                arrows: false,
              }
            }
          ]
    });

});
