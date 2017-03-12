$(document).ready(function(){
    var $this = $(this);
    $('.navbar .navbar-nav li .active a').click(function(e){
        if(!$this.hasClass('active')){
//          $this.removeClass('active');
          $this.addClass('active');
        };
    e.preventDefault();
    });
})