// nav bar
const toogleBtn = document.querySelector('.navbar_toogleBtn');
const menu = document.querySelector('.navbar_menu');
const welcome = document.querySelector('.welcomeInfo')

toogleBtn.addEventListener('click', ()=>{
    menu.classList.toggle('active');
    welcome.classList.toggle('deactive');
});

// logo section
const inner = document.querySelector(".logoBg");
const section = document.querySelector(".logo_big");

window.onscroll = function() {
  let value = window.pageYOffset / section.offsetTop;
  inner.style.transform = `scale(${value})`;
};

$(function(){
    AOS.init();

    // nav section
    $(window).resize(function(){
        if($(window).width() >= 1024 ){
            $('.navbar_menu').removeClass('active');
            $('.welcomeInfo').removeClass('deactive');
        }
    });

    // welcome_text
    setInterval(function() {
        $('.welcome_text span.past').removeClass('past');
        $('.welcome_text span.active').addClass('past').removeClass('active');
        $('.welcome_text span.past + span').addClass('active');
        if ($('.welcome_text span.active').length == 0) {
            $('.welcome_text span:nth-child(1)').addClass('active');
        }
    }, 1000);

    // list section
    $('.slider_list').slick({
        adaptiveHeight: true,
        infinite : true,
        slidesToShow : 1, 
        slidesToScroll : 1,
        autoplay : true,
        speed : 1000,
        autoplaySpeed : 1000,
        pauseOnHover : true,
        draggable : true,
        responsive: [ 
            {                      
                breakpoint: 1024,
                settings: {
                    adaptiveHeight: true,
                    infinite : true,
                    slidesToShow : 1, 
                    slidesToScroll : 1,
                    autoplay : true,
                    speed : 1000,
                    autoplaySpeed : 1000,
                    pauseOnHover : true,
                    draggable : true
                } 
            },
            { 
                breakpoint: 768,
                settings: {    
                    adaptiveHeight: true,
                    infinite : true,
                    slidesToShow : 1, 
                    slidesToScroll : 1,
                    autoplay : true,
                    speed : 1000,
                    autoplaySpeed : 1000,
                    pauseOnHover : true,
                    draggable : true
                } 
            }
        ]
    });

    $('.discover_list').slick({
        prevArrow:$('.prevArrow'),
        nextArrow:$('.nextArrow'),
        adaptiveHeight: false,
        infinite : true,
        slidesToShow : 2, 
        slidesToScroll : 1,
        autoplay : true,
        speed : 1000,
        autoplaySpeed : 1000,
        pauseOnHover : true,
        draggable : true,
        centerMode: true,
        responsive: [
        {  
                breakpoint: 1024,
                settings: {
                    adaptiveHeight: false,
                    infinite : true,
                    slidesToShow : 1, 
                    slidesToScroll : 1,
                    autoplay : true,
                    speed : 1000,
                    autoplaySpeed : 1000,
                    pauseOnHover : true,
                    draggable : true,
                } 
            },
            { 
                breakpoint: 768, 
                settings: {
                    adaptiveHeight: false,
                    infinite : true,
                    slidesToShow : 1, 
                    slidesToScroll : 1,
                    autoplay : true,
                    speed : 1000,
                    autoplaySpeed : 1000,
                    pauseOnHover : true,
                    draggable : true
                } 
            }
        ]
    });

    $('.use_list').slick({
        prevArrow:$('.use_prevArrow'),
        nextArrow:$('.use_nextArrow'),
        adaptiveHeight: false,
        infinite : true,
        slidesToShow : 1, 
        slidesToScroll : 1,
        autoplay : true,
        speed : 1000,
        autoplaySpeed : 1000,
        pauseOnHover : true,
        draggable : true,
        responsive: [ 
        {  
                breakpoint: 1024, 
                settings: {
                    adaptiveHeight: true,
                    infinite : true,
                    slidesToShow : 1, 
                    slidesToScroll : 1,
                    autoplay : true,
                    speed : 1000,
                    autoplaySpeed : 1000,
                    pauseOnHover : true,
                    draggable : true,
                    centerMode: true
                } 
            },
            { 
                breakpoint: 768, 
                settings: {
                    adaptiveHeight: true,
                    infinite : true,
                    slidesToShow : 1, 
                    slidesToScroll : 1,
                    autoplay : true,
                    speed : 1000,
                    autoplaySpeed : 1000,
                    pauseOnHover : true,
                    draggable : true,
                    centerMode: true
                } 
            }
        ]
    });

    $('.recommend_list').slick({
        adaptiveHeight: false,
        infinite : true,
        slidesToShow : 2, 
        slidesToScroll : 1,
        autoplay : true,
        speed : 1000,
        autoplaySpeed : 1000,
        pauseOnHover : true,
        draggable : true,
        centerMode: true,
        responsive: [
        {  
                breakpoint: 1024,
                settings: {
                    adaptiveHeight: false,
                    infinite : true,
                    slidesToShow : 1, 
                    slidesToScroll : 1,
                    autoplay : true,
                    speed : 1000,
                    autoplaySpeed : 1000,
                    pauseOnHover : true,
                    draggable : true,
                } 
            },
            { 
                breakpoint: 768, 
                settings: {
                    adaptiveHeight: false,
                    infinite : true,
                    slidesToShow : 1, 
                    slidesToScroll : 1,
                    autoplay : true,
                    speed : 1000,
                    autoplaySpeed : 1000,
                    pauseOnHover : true,
                    draggable : true
                } 
            }
        ]
    });
    
})
