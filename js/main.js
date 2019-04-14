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
				$(".main_content").addClass("d-none");
				$("#b1").removeClass("d-none");

			}
			else if(temp > 400 && temp < 799)
			{
				$(".main_content").addClass("d-none");
				$("#b2").removeClass("d-none");
			}
			else if(temp > 800 && temp < 1199)
			{
				$(".main_content").addClass("d-none");
				$("#b3").removeClass("d-none");
			}
			else if(temp > 1200 && temp < 1599)
			{
				$(".main_content").addClass("d-none");
				$("#b4").removeClass("d-none");
			}
			else if(temp > 1600 && temp < 1999)
			{
				$(".main_content").addClass("d-none");
				$("#b5").removeClass("d-none");
			}
			else if(temp > 2000 && temp < 2399)
			{
				$(".main_content").addClass("d-none");
				$("#b6").removeClass("d-none");
			}
			else if(temp > 2400 && temp < 2799)
			{
				$(".main_content").addClass("d-none");
				$("#b6").removeClass("d-none");
			}
			else if(temp > 2800 && temp < 3200)
			{
				$(".main_content").addClass("d-none");
				$("#b7").removeClass("d-none");
			}
			else{
				
			}
	};



	//кнопка скролл вниз
	$('.md-open').on('click', function(e){
		e.preventDefault();
	});
	$('.md-close').on('click', function(e){
		e.preventDefault();
	});

	$(window).scroll(function(){
		if ($(window).scrollTop() > 50) {
	    	$('header').addClass('fixed');
		}
		else {
	    	$('header').removeClass('fixed');
		};
	});



	$('#tab_box a').click(function(e) {
    e.preventDefault();
        $('#tab_box .active').removeClass('active');
        $(this).addClass('active');
        var tab = $(this).attr('href');
        $('.tab_order').not(tab).css({'display':'none'});
        $(tab).fadeIn(400);
	})

	
//progress_bar



//tracking_bar
/*

	var arr_track = new Array($('.tracking_bar').length);

	$('.tracking_bar').each(function(index){
		var r = 0;
		for(let i = 0; i < $(this).children('.active').length; i++){
			r++;
		}
		arr_track[index] = r;
	})
	for(var i = 0; i < arr_track[i]; ++i){
		if (arr_track[i] < 5) {
			$('.tracking_bar div:last-child').removeClass('active');
			$('.tracking_bar div:last-child').addClass('weiting');
		}
		if(arr_track[i] == 5){
			$(this).removeClass('active');
			$(this).addClass('sucsses');
		}
	}
	*/
//tracking_bar
	
});


//выравнивание по высоте на мобилке на главной странице блока left-side и kit_review
var winHeight = $(window).height();
var winWidth = $(window).width();

if (winWidth <= 993) {
	var lside = winHeight - 165;
	var rside = winHeight - 120;

	console.log(rside);
	$('.left_side').addClass('left_side_mob');
	$('.kit_review').addClass('right_side_mob');
	if (lside <= 140){
		lside = 200;
	}
	if (rside <= 180) {
		rside = 240;
	}
	$('.left_side_mob').css('top', lside);
	$('.right_side_mob').css('top', rside);
}