$(function(){

    //NAVBAR
  
    $(window).scroll(function(){

        //slideUp slideDown

        if($(window).scrollTop() < 80){
            $('.navbar').css({"margin-top":"-100px","opacity":"0"})
        }else{$('.navbar').css({"margin-top":"0","opacity":"1","background-color":"rgba(59, 59, 59, 0.7)"})}

        //active class when scroll to section

        $('section').each(function(){

            const thisSection = $(this);
            const bb = thisSection.attr("id");
            const hei = thisSection.outerHeight();
            const grttop = thisSection.offset().top - 70;

            if($(window).scrollTop() > grttop && $(window).scrollTop() < grttop + hei) {
                $(".navbar-nav li a[href='#"+ bb +"']").parent().addClass("active")
            }else{
                $(".navbar-nav li a[href='#"+ bb +"']").parent().removeClass("active")
            }
        })

    })

    $('.nav-item').on('click',function(){
        const thisItem = $(this);
        thisItem.parent().find('li').removeClass('active')
        thisItem.eq(0).addClass('active');
    })

    $('.counter-num').counterUp({
        delay: 10,
        time: 2000
    });
   
})

//WOW INITIALIZE

$(document).ready(function(){new WOW().init()}) 
