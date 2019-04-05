$( document ).ready(function() {


//кнопка доп инфы на главной странице
	$(".m2_info").click(function () {
    	$(this).toggleClass("active");
   	});
//открыть меню
	$(".menu").click(function () {
    	$(".menu_hide").addClass("active");
    });
//закрыть меню
   	$(".close_menu").click(function () {
    	$(".menu_hide").removeClass("active");
   	});
   	$(".menu").click(function () {
    	$(".menu_link a").translate({'-webkit-transform' : 'translate(100px,100px)'});​
    });


//постраничная смена секций главной страницы
//считаем прокрутку колеса
	var max = 3200;
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
		else if(i == 3200 || i > 3200){
			i = 3200;
			scroolX(i);
	//		console.log(i);
		}
		else {
			scroolX(i);
			i += 100;
	//		console.log(i);
		}
	});
//меняем section в зависимости от (положения || value) wheel
	function scroolX(temp){

		console.log(temp);
			if(temp >= 0 && temp < 399)
			{
				$(".content").addClass("d-none");
				$("#b1").removeClass("d-none");
			}
			else if(temp > 400 && temp < 799)
			{
				$(".content").addClass("d-none");
				$("#b2").removeClass("d-none");
			}
			else if(temp > 800 && temp < 1199)
			{
				$(".content").addClass("d-none");
				$("#b3").removeClass("d-none");
			}
			else if(temp > 1200 && temp < 1599)
			{
				$(".content").addClass("d-none");
				$("#b4").removeClass("d-none");
			}
			else if(temp > 1600 && temp < 1999)
			{
				$(".content").addClass("d-none");
				$("#b5").removeClass("d-none");
			}
			else if(temp > 2000 && temp < 2399)
			{
				$(".content").addClass("d-none");
				$("#b6").removeClass("d-none");
			}
			else if(temp > 2400 && temp < 2799)
			{
				$(".content").addClass("d-none");
				$("#b6").removeClass("d-none");
			}
			else if(temp > 2800 && temp < 3200)
			{
				$(".content").addClass("d-none");
				$("#b7").removeClass("d-none");
			}
			else{
				$('content').addClass('d-none');
			}
	};

//кнопка скролл вниз

});