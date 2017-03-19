$(document).ready(function(){
//    var $this = $(this);
    $('li a').click(function(e){
        e.preventDefault();
//        if((this).hasClass('active')){
          $('a').removeClass('active');
          $(this).addClass('active');
//        };
    });
    
    $("p").click(function(){
        $("p").hide(); 
    });
});