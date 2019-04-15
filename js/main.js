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


/*
//постраничная смена секций главной страницы
//считаем прокрутку колеса
	var max = 3200;
	var i = 0;
	var pro_height = 0;
	var k = i;
	$(window).bind('mousewheel DOMMouseScroll', function(event){
//		pro_height = pro_height + ($(window).height() / 30);
		
		if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0 ) {
			i -= 100;
			if(i < 0){
				i = 0;
			}
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
		if(k < i){
			pro_height += ($(window).height() / 21.2);
		}
		if(k > i){
			pro_height -= ($(window).height() / 21.2);
		}
		k = i;

	});
//меняем section в зависимости от (положения || value) wheel
*/
/*	

	function scroolX(temp){

		console.log(temp);
			if(temp == 400)
			{
				$(".main_content").fadeOut(400).css("display", "none");
				$("#b1").fadeIn(400);
				$('#progress').css('height', pro_height);
			}
			else if(temp == 800)
			{
				$(".main_content").fadeOut(400).css("display", "none");
				$("#b2").fadeIn(400);
				$('#progress').css('height', pro_height);
			}
			else if(temp == 1200)
			{
				$(".main_content").fadeOut(400).css("display", "none");
				$("#b3").fadeIn(400);
				$('#progress').css('height', pro_height);
			}
			else if(temp == 1600)
			{
				$(".main_content").fadeOut(400).css("display", "none");
				$("#b4").fadeIn(400);
				$('#progress').css('height', pro_height);
			}
			else if(temp == 2000)
			{
				$(".main_content").fadeOut(400).css("display", "none");
				$("#b5").fadeIn(400);
				$('#progress').css('height', pro_height);
			}
			else if(temp == 2400)
			{
				$(".main_content").fadeOut(400).css("display", "none");
				$("#b6").fadeIn(400);
				$('#progress').css('height', pro_height);
			}
			else if(temp == 2800)
			{
				$(".main_content").fadeOut(400).css("display", "none");
				$("#b6").fadeIn(400);
				$('#progress').css('height', pro_height);
			}
			else if(temp == 3200)
			{
				$(".main_content").fadeOut(400).css("display", "none");
				$("#b7").fadeIn(400);
				$('#progress').css('height', pro_height);
			}
			else{
				
			}
	};

*/

//	main_stop(main_height);

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

	
	$(".slaider_washes").owlCarousel({
		items: 3,
		stagePadding: 50,
		autoWidth: true,
		center: true,
		loop: true,
		nav:true
	});

	$(".slaider_desks").owlCarousel({
		items: 3,
		stagePadding: 50,
		autoWidth: true,
		center: true,
		loop: true
	});

	
	
	


			
	$(document).on('scroll', function(){
		var scrollBottom = $(window).scrollTop() + $(window).height();
		var r = $(window).scrollTop();
//		console.log(r);
//		main_stop(scrollBottom);
		
		});
	
	var main_height = $('.main_content:eq(0)').height();

	

	$(window).bind('mousewheel DOMMouseScroll', function(event){
		var elem1 = $('.main_content:eq(0)').hasClass('active');
		var elem2 = $('.main_content:eq(1)').hasClass('active');
		var elem3 = $('.main_content:eq(2)').hasClass('active');
		var elem4 = $('.main_content:eq(3)').hasClass('active'); 
		var elem5 = $('.main_content:eq(4)').hasClass('active');
		var elem6 = $('.main_content:eq(5)').hasClass('active');
		var elem7 = $('.main_content:eq(6)').hasClass('active');

		if(elem2){
			$('.sb_2').addClass('active');
		}

		if(elem3){
			$('.sb_3').addClass('active');
		}
		if(elem4 || elem5){
			$('.sb_4').addClass('active');
		}
		else{
			$('.sb_4').removeClass('active');
		}
		if($('.main_content:eq(4)').hasClass('active') && $('.main_content:eq(5)').hasClass('active')){
			$('.sb_5').addClass('active');
		}
		else{
			$('.sb_5').removeClass('active');
		}
		if($('.main_content:eq(5)').hasClass('active') || ){
			$('.sb_6').addClass('active');
		}
		else{
			$('.sb_6').removeClass('active');
		}
	});

	

/*	
	if($('.main_content:eq(1)').hasClass('active')){
		$('.sb_2').addClass('active');
	}
	if($('.main_content:eq(2)').hasClass('active')){
		$('.sb_3').addClass('active');
	}
	if($('.main_content:eq(3)').hasClass('active')){
		$('.sb_4').addClass('active');
	}
	if($('.main_content:eq(4)').hasClass('active')){
		$('.sb_5').addClass('active');
	}
	if($('.main_content:eq(5)').hasClass('active')){
		$('.sb_6').addClass('active');
	}
	if($('.main_content:eq(6)').hasClass('active')){
		$('.sb_7').addClass('active');
	}
*/
/*
	function main_stop(scrollBottom){
		
		if(scrollBottom >= main_height){
			var divide = $(document).height() - ($(document).height() - $('.main_content:eq(0)').height())
			$(document).scrollTop(divide);
			main_height = $('.main_content:eq(0)').height() + $('.main_content:eq(1)').height();
		}


	}

*/

$(".main").onepage_scroll({
   sectionContainer: "section",     // sectionContainer accepts any kind of selector in case you don't want to use section
   easing: "ease",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
                                    // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
   animationTime: 1000,             // AnimationTime let you define how long each section takes to animate
   pagination: false,                // You can either show or hide the pagination. Toggle true for show, false for hide.
   updateURL: false,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
   beforeMove: function(index) {},  // This option accepts a callback function. The function will be called before the page moves.
   afterMove: function(index) {},   // This option accepts a callback function. The function will be called after the page moves.
   loop: false,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
   keyboard: true,                  // You can activate the keyboard controls
   responsiveFallback: false,        // You can fallback to normal page scroll by defining the width of the browser in which
                                    // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
                                    // the browser's width is less than 600, the fallback will kick in.
   direction: "vertical"            // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".  
});