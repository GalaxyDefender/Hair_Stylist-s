$(document).ready(function(){
    $('.navbar-nav li').click(function(e){
       $('.navbar-nav li.active').removeClass('active');
        $(this).addClass('active');
        e.preventDefault();
    });
});