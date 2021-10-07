 $(function(){
	 $(window).resize(function(){
		 var docao = $(window).height();
		 $('.nen1').css({'height':docao})
	 })

	 $('.nut').click(function(){
	 	$('.menuphai').addClass('out');
	 	return false;
	 })

	 $('.putoff').click(function(){
	 	$('.menuphai').removeClass('out');
	 	return false;
	 })

	$('.nen1 a.btn.btn-default').click(function(){
 	 	$('html').animate({scrollTop:$('.nen2').offset().top},1000);

 	 	return false;
 	 })

	$('.li2.a1').click(function(){
 	 	$('html').animate({scrollTop:$('.nen1').offset().top},1000);
 	 	$('.menuphai').removeClass('out');
 	 	return false;
 	 })

	$('.li2.a2').click(function(){
 	 	$('html').animate({scrollTop:$('.nen2').offset().top},1000);
 	 	$('.menuphai').removeClass('out');
 	 	return false;
 	 })

	$('.li2.a3').click(function(){
 	 	$('html').animate({scrollTop:$('.nen3').offset().top},1000);
 	 	$('.menuphai').removeClass('out');
 	 	return false;
 	 })

	$('.li2.a4').click(function(){
 	 	$('html').animate({scrollTop:$('.nen5').offset().top},1000);
 	 	$('.menuphai').removeClass('out');
 	 	return false;
 	 })

	$('.li2.a5').click(function(){
 	 	$('html').animate({scrollTop:$('.nen7').offset().top},1000);
 	 	$('.menuphai').removeClass('out');
 	 	return false;
 	 })
	

 })
