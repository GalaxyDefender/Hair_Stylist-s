//$(document).ready(function(){
//    $('.navbar-nav li').click(function(e){
//       $('.navbar-nav li.active').removeClass('active');
//        $(this).addClass('active');
//        e.preventDefault();
//    });
//});

var j = document.getElementsByClassName("nav");
var x = j.getElementsByTagName("li");

x.addEventListener("click", function(){
   document.getElementsByClassName("nav").style.color = "purple"; 
});