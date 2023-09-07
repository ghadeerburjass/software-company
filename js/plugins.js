
/*global $, jQuery, alert*/
$(document).ready(function () {
	"use strict";
	$(".carousel").carousel(
	{
		interval:5000
	});
		

	

//show color option div when click on the gear 
$(".gear-check").click(function ()
{
	$(".color-option").fadeToggle();
});


//change theme color on click

var colorLi = $(".color-option ul li");
colorLi
.eq(0).css("backgroundColor","red").end()
.eq(1).css("backgroundColor","green").end()
.eq(2).css("backgroundColor","yellow").end()
.eq(3).css("backgroundColor","pink");
colorLi.click(function ()
{
  $("link[href*='theme']").attr("href", $(this).attr("data-value"));    //chang attribute of  href default theme as equal as data value of ul li

	//console.log($(this).attr("data-value"))      print link in console

});

//Cashing The Scroll Top Element
var scrollButton = $("#scroll-top");
$(window).scroll(function ()
{
	//short if function

	$(this).scrollTop()>=700? scrollButton.show() : scrollButton.hide();

});

	//click on button to scroll

	scrollButton.click(function () {
     

		$("html,body").animate({scrollTop:0},600);
	});





});


// loading screen

$(window).load(function () {
	"use strict";
	$("body").css("overflow","auto");


	$(".loading-overlay,.loading-overlay.sk-chase").fadeOut(5000);
	



});