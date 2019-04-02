$( document ).ready(function() {

	$(".m2_info").click(function () {
     $(this).toggleClass("active");
   });

})


//скрываем блок скролле, открываем нужный
/*
	var i = 0;
	window.onwheel = function() {
		i += 1;
  	console.log(i);
*/



var max = 5100;
var min = 0;
var i = 0;
$(window).bind('mousewheel DOMMouseScroll', function(event){
	if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
		i -= 100;
		scroolX(i);
//		console.log(i);
	}
	else if(i < 0){
		i = 100;
		scroolX(i);
//		console.log(i);
	}
	else if(i == 5100 || i > 5100){
		i = 5100;
		scroolX(i);
//		console.log(i);
	}
	else {
		scroolX(i);
		i += 100;
//		console.log(i);
	}
});

function scroolX(temp){

	console.log(temp);
	if(temp >= 0 && temp < 400)
	{
		$(".content").addClass("d-none");
		$("#b1").removeClass("d-none");
	}
	else if(temp >= 400 && temp <= 900)
	{
		$("#b1").addClass("d-none");
		$("#b2").removeClass("d-none");
	}
	else{
		$('content').removeClass('d-none');
	}

};
