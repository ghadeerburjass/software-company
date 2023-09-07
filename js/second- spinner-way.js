$(document).ready(function()
{
	$(".carousel").carousel(
	{
		interval:5000
	});
		

	

//show color option div when click on the gear 
$(".gear-check").click(function()
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
colorLi.click(function()
{
  $("link[href*='theme']").attr("href", $(this).attr("data-value"));    //chang attribute of  href default theme as equal as data value of ul li

	//console.log($(this).attr("data-value"))      print link in console

});

});


// loading screen

$(window).load(function()
{
//loading elements

	$(".loading-overlay.spinner").fadeOut(1000,
		function()
	{
					//show the scrol  

	//$("body").css("overflow","auto");
	

	$(this).parent().fadeOut(1000,
		function()
		{

			// other way to show the scrol  

	$("body").css("overflow","auto");


			$(this).remove();
		});	
	});


});