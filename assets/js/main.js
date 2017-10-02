"use strict";


jQuery(document).ready(function ($) {


    /*---------------------------------------------*
     * Mobile menu
     ---------------------------------------------*/
    $('#navbar-collapse').find('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: (target.offset().top - 40)
                }, 1000);
                if ($('.navbar-toggle').css('display') != 'none') {
                    $(this).parents('.container').find(".navbar-toggle").trigger("click");
                }
                return false;
            }
        }
    });

    $('.navbar-toggle').on('click',function(){ 
         $('.navbar-collapse').fadeToggle(1000);
    });
    
    $('.dropdown-toggle').on('click',function(){ 
         $('.dropdown-menu').fadeToggle(1000);
    });
    
console.log('ok');

    /*---------------------------------------------*
     * Comment textarea
     ---------------------------------------------*/    
    
     var text_max = 200;
     $('#count_message').html(text_max + ' remaining');
       $('.text-area').keyup(function() {
       var text_length = $('.text-area').val().length;
       var text_remaining = text_max - text_length;
       $('.count_message').html(text_remaining + ' remaining');
     });


    /*---------------------------------------------*
     * STICKY scroll
     ---------------------------------------------*/

    $.localScroll();



// scroll Up

    $(window).scroll(function () {
        if ($(this).scrollTop() > 600) {
            $('.scrollup').fadeIn('slow');
        } else {
            $('.scrollup').fadeOut('slow');
        }
    });
    $('.scrollup').click(function () {
        $("html, body").animate({scrollTop: 0}, 1000);
        return false;
    });


    //End
});
