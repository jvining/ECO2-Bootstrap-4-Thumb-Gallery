// Enable Tool Tips Globally 
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});


 
$(document).ready(function(){
	//Show carousel-control
	$("#myCarousel").mouseover(function(){
		$("#myCarousel .carousel-control").show();
	});

	$("#myCarousel").mouseleave(function(){
		$("#myCarousel .carousel-control").hide();
	});
	
	//Active thumbnail
	$("#thumbCarousel .thumb").on("click", function(){
		$(this).addClass("active");
		$(this).siblings().removeClass("active");
	});
	
	//When the carousel slides, auto update
	$('#myCarousel').on('slid.bs.carousel', function(){
	   var index = $('.carousel-inner .carousel-item.active').index();
 	   var thumbnailActive = $('.thumb[data-slide-to="' + index + '"]');
	   
	   thumbnailActive.addClass('active');
	   $(thumbnailActive).siblings().removeClass("active");
 
 	});
	
	// Enables Thumbnail side scrolling
	const element = document.querySelector(".side-scroll");

	element.addEventListener('wheel', (event) => {
	  event.preventDefault();

	  element.scrollBy({
	    left: event.deltaY < 0 ? -30 : 30,

	  });
	});
});