$(document).ready(function(){$(".js--services-section").waypoint(function(n){"down"==n?$("nav").addClass("sticky"):$("nav").removeClass("sticky")});mixitup(".container")});var overlay=document.querySelector(".overlay"),manubtn=document.querySelector(".manubtn"),closbtn=document.querySelector(".closebtn");function mainManuLi(){overlay.style.width="0%"}manubtn.addEventListener("click",function(){overlay.style.width="100%"}),closbtn.addEventListener("click",function(){overlay.style.width="0%"}),mainManuLi();
$("svg.radial-progress").each(function(e,t){$(this).find($("circle.complete")).removeAttr("style")}),$(window).scroll(function(){$("svg.radial-progress").each(function(e,t){$(window).scrollTop()>$(this).offset().top-.75*$(window).height()&&$(window).scrollTop()<$(this).offset().top+$(this).height()-.25*$(window).height()&&(percent=$(t).data("percentage"),radius=$(this).find($("circle.complete")).attr("r"),circumference=2*Math.PI*radius,strokeDashOffset=circumference-percent*circumference/100,$(this).find($("circle.complete")).animate({"stroke-dashoffset":strokeDashOffset},1250))})}).trigger("scroll");