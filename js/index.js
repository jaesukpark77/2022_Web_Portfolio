// nav bar
const toogleBtn = document.querySelector('.navbar_toogleBtn');
const menu = document.querySelector('.navbar_menu');
const welcome = document.querySelector('.welcomeInfo')

toogleBtn.addEventListener('click', ()=>{
    menu.classList.toggle('active');
    welcome.classList.toggle('deactive')
});

// list section
$(function(){
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
        responsive: [ // 반응형 웹 구현 옵션
            {                      
                breakpoint: 1024, //화면 사이즈 1024px
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
                breakpoint: 768, //화면 사이즈 768px
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
        responsive: [ // 반응형 웹 구현 옵션
        {  
                breakpoint: 1024, //화면 사이즈 1024px
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
                breakpoint: 768, //화면 사이즈 768px
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
        responsive: [ // 반응형 웹 구현 옵션
        {  
                breakpoint: 1024, //화면 사이즈 1024px
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
                breakpoint: 768, //화면 사이즈 768px
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
})
