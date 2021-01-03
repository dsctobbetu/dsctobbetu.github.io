$(document).ready(function () {

    checkDark();

    $('#dark-light-toggle').click(function(){
        toggleDark();
        checkDark();
    })

    // Scroll Clicks
    $("#home").click(function () {
        $('.main-menu').fadeOut(200)
        $('html, body').animate({
            scrollTop: $("#home-scroll").offset().top
        }, 600);
    });

    $(".navbar-dsc-logo").click(function () {
        $('html, body').animate({
            scrollTop: $("#home-scroll").offset().top
        }, 600);
    });

    $("#home-desk").click(function () {
        $('html, body').animate({
            scrollTop: $("#home-scroll").offset().top
        }, 600);
    });

    $("#down-arrow").click(function () {
        $('.main-menu').fadeOut(200)
        $('html, body').animate({
            scrollTop: $("#our-work-scroll").offset().top
        }, 900);
    })

    $("#team").click(function () {
        $('.main-menu').fadeOut(200)
        $('html, body').animate({
            scrollTop: $("#team-scroll").offset().top
        }, 1200);

    });

    $("#team-desk").click(function () {
        $('html, body').animate({
            scrollTop: $("#team-scroll").offset().top
        }, 1200);

    });

    $("#contact").click(function () {
        $('.main-menu').fadeOut(200)
        $('html, body').animate({
            scrollTop: $("#contact-scroll").offset().top
        }, 2100);

    });

    $("#contact-desk").click(function () {
        $('html, body').animate({
            scrollTop: $("#contact-scroll").offset().top
        }, 2100);

    });

    // Open Menu
    $('#menu-open').click(function () {
        $('.main-menu').fadeIn(100);
    })

    // Close Menu
    $('#menu-close').click(function () {
        $('.main-menu').fadeOut(100);
    })

    $(window).on('scroll', function () {

        var LogoMark = $(".main-text-holder-heading").offset().top;

        if ($(this).scrollTop() > LogoMark) {
            if (!$('.navbar').hasClass('navbar-scrolled')) {
                $('.navbar').addClass('navbar-scrolled');
            }
        } else {
            if ($('.navbar').hasClass('navbar-scrolled')) {
                $('.navbar').removeClass('navbar-scrolled');
            }
        }
    });
})

var toggleDark = function(){
    if(!$('body').hasClass('dark')){
        localStorage.setItem('dark',true);
    }
    else{
        localStorage.setItem('dark',false);
    }
}

var checkDark = function (){

    var dark = localStorage.getItem('dark');

    if(dark==='true'){
        $('body').addClass('dark');
        // $('body').addClass('dark');
        $('.logo-light').hide();
        $('.logo').show();
        $('.logo-nav-light').hide();
        $('.logo-nav').show();
        $('.dark-light-toggle').children().text('I want light mode');
    }
    else{
        $('body').removeClass('dark');
        $('.logo-light').show();
        $('.logo').hide();
        $('.logo-nav-light').show();
        $('.logo-nav').hide();
        $('.dark-light-toggle').children().text('I want dark mode');
    }

}
