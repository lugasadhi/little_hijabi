import $ from 'jquery';

$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() < 20){
            $('.page-header, .menu-link, .page-header .navbar-brand').removeClass('scroll');
        }else{
            $('.page-header, .menu-link, .page-header .navbar-brand').addClass('scroll');
        }
    });
    $(".menu-item").click(function(){
        $('.page-header, .menu-link, .page-header .navbar-brand').toggleClass('active');
    });
});