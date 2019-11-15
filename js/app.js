$(function(){ 
    $('.menu-button').click(function(){
        $(this).find('.hamburger').toggleClass('is-active');
        $('.pop-menu').toggleClass('is-active');
    });
});
