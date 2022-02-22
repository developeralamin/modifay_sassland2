$(document).ready(function(){
    $('.navbar_toggler').click(function(){
        $('.navbar_collaspe').slideToggle(300);
    });

  smallScreenMenu();
    let temp;
    function resizeEnd(){
        smallScreenMenu();
    }

    $(window).resize(function(){
        clearTimeout(temp);
        temp = setTimeout(resizeEnd, 100);
        resetMenu();
    });

  

    // progress Bar area
    // progress Bar area

    	// $('.circlechart').circlechart(); // Initialization

      $('.dark').hide();

    $(window).on('scroll', function(){
        if($(this).scrollTop() >10){
        $('.main_wraper').addClass('sticky_nav');
        $('.dark').show();
        $('.light').hide();
        }else{
        $('.main_wraper').removeClass('sticky_nav');
        $('.dark').hide();
        $('.light').show();
    }

});
    

});



const subMenus = $('.sub_menu');
const menuLinks = $('.menu-link');

function smallScreenMenu(){
    if($(window).innerWidth() <= 992){
        menuLinks.each(function(item){
            $(this).click(function(){
                $(this).next().slideToggle();
            });
        });
    } else {
        menuLinks.each(function(item){
            $(this).off('click');
        });
    }
}

function resetMenu(){
    if($(window).innerWidth() > 992){
        subMenus.each(function(item){
            $(this).css('display', 'none');
        });
    }
}