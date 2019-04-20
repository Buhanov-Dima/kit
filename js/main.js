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

});

	var main_height = $('.main_content:eq(0)').height();

	var sc = 0;
	var scroll_point = 0;
	
 	var flag = false;
	$(window).bind('mousewheel DOMMouseScroll', function(event){
		var elem1 = $('.main_content:eq(0)').hasClass('active');
		var elem2 = $('.main_content:eq(1)').hasClass('active');
		var elem3 = $('.main_content:eq(2)').hasClass('active');
		var elem4 = $('.main_content:eq(3)').hasClass('active'); 
		var elem5 = $('.main_content:eq(4)').hasClass('active');
		var elem6 = $('.main_content:eq(5)').hasClass('active');
		var elem7 = $('.main_content:eq(6)').hasClass('active');
		console.log(sc);

		


	if(flag == false){
		setTimeout(function(){
			if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0 ) {
				scroll_point -= 100;
				if (scroll_point == -100) {
					scroll_point = 0;
				}
				$('.main_scroll').css({"transform":"translate3d(0px, "+scroll_point+"%, 0px)"});
			}
			else{
				scroll_point += 100;
				if (scroll_point == 700) {
					scroll_point = 600;
				}
				$('.main_scroll').css({"transform":"translate3d(0px, "+scroll_point+"%, 0px)"});
			}

			if(scroll_point == 0){
				$('.main_content').removeClass('active');
				$('.main_content:eq(0)').addClass('active');
			}
			else if(scroll_point == 100){
				$('.main_content').removeClass('active');
				$('.main_content:eq(1)').addClass('active');
				$('.scroll_bar a').removeClass('active');
				$('.sb_1').addClass('active');
			}
			else if(scroll_point == 200){
				$('.main_content').removeClass('active');
				$('.main_content:eq(2)').addClass('active');
				$('.scroll_bar a').removeClass('active');
				$('.sb_2').addClass('active');
			}
			else if(scroll_point == 300){
				$('.main_content').removeClass('active');
				$('.main_content:eq(3)').addClass('active');
				$('.scroll_bar a').removeClass('active');
				$('.sb_3').addClass('active');
			}
			else if(scroll_point == 400){
				$('.main_content').removeClass('active');
				$('.main_content:eq(4)').addClass('active');
				$('.scroll_bar a').removeClass('active');
				$('.sb_4').addClass('active');
			}
			else if(scroll_point == 500){
				$('.main_content').removeClass('active');
				$('.main_content:eq(5)').addClass('active');
				$('.scroll_bar a').removeClass('active');
				$('.sb_5').addClass('active');
			}
			else if(scroll_point == 600){
				$('.main_content').removeClass('active');
				$('.main_content:eq(6)').addClass('active');
				$('.scroll_bar a').removeClass('active');
				$('.sb_6').addClass('active');
				$('.scroll_arrow').css({"opacity":"0", "z-index":"-20"})
				$('#showScroll').css({"opacity":"1", "z-index":"20"});
			}
			if(scroll_point != 600){
				$('.scroll_arrow').css({"opacity":"1", "z-index":"20"})
				$('#showScroll').css({"opacity":"0", "z-index":"-20"});
			}
			flag = false;
        }, 600);

	}
	flag = true;

	console.log(scroll_point);


		if (elem1){
			$('.index_foo').css("opacity", "0");
		}
		else if(elem7){
			$('.index_foo .kit_review').removeClass("right-side");
			$('.index_foo').addClass("active");
		}
		else{
			$('.index_foo').removeClass("active");
			$('.index_foo .kit_review').addClass("right-side");
			$('.index_foo').css("opacity", "1");
		}


		var scroll_Len = $('.scroll_bar a.active').length;
//		console.log(scroll_Len);
		function progress_bar(scroll_Len){
			$('.scroll_bar a').removeClass('red_square');
//			$('.scroll_bar a.active').eq(scroll_Len - 1).addClass('red_square');
		}
		progress_bar(scroll_Len);

		

		

/*		if(elem1){
			$('.kit_review').removeClass('right-side');
		}
		else if(elem7){
			$('.kit_review').removeClass('right-side');
			$('.kit_review').css("margin", "auto");
			$('.index_foo').css({"right": "0", "left":"0", "margin":"auto"});
			$('.index_foo a').css({"margin": "30px"});
		}
		else{
			$('.kit_review').addClass('right-side');
			$('.index_foo').css({"right": "120px", "left":"auto"});
		}
*/		
	});

	var mainTop = 0;

	$( ".scroll_arrow" ).click(function() {

		var r = ($(".main_content.active").index()) + 1;
	  	if(($(".main_content").hasClass("active"))){
			console.log(mainTop);
			mainTop -= 100;
			if(mainTop != -700){
				$(".main").css({"transform":"translate3d(0px, "+mainTop+'%'+", 0px)", "position":"relative", "transition":"all 1000ms ease 0s"})
			}
			else if(elem7 == -700){

			}
			else{
				mainTop += 100;
				$(".main").css({"transform":"translate3d(0px, "+mainTop+'%'+", 0px)", "position":"relative", "transition":"all 1000ms ease 0s"})
			}			
			$(".main_content.active").removeClass("active");
			$(".main_content").eq(r).addClass("active");
		}
	});

	

//SVG index кнопка
	$('.scroll_arrow').mouseover(function(){
		$('.main_line_arrow').addClass('hover_arrow');
		$('.bort_line_arrow').addClass('hover_arrow');
		$('.scroll_arrow svg').addClass('hover_arrow');
	});

	$('.scroll_arrow').mouseout(function(){
		$('.main_line_arrow').removeClass('hover_arrow');
		$('.bort_line_arrow').removeClass('hover_arrow');
		$('.scroll_arrow svg').removeClass('hover_arrow');
	});

	$('#showScroll').mouseover(function(){
		$('.main_line_arrow').addClass('hover_arrow_down');
		$('.bort_line_arrow').addClass('hover_arrow_down');
		$('.scroll_arrow svg').addClass('hover_arrow_down');
	});

	$('#showScroll').mouseout(function(){
		$('.main_line_arrow').removeClass('hover_arrow_down');
		$('.bort_line_arrow').removeClass('hover_arrow_down');
		$('.scroll_arrow svg').removeClass('hover_arrow_down');
	});


//sell_card validator


	


	$('.sl_for_first input').on('change', function() {
		var val = $('.radio:checked').val(); //r2
		console.log(val);
		if(val == 'r1'){
			$('.input_pay_card').removeClass('active');
			$('.sell_in_file').addClass('active');
		}
		if(val == 'r2'){
			$('.sell_in_file').removeClass('active');
			$('.input_pay_card').addClass('active');
		}
	});


	$('.sl_for_second input').on('change', function() {
		var val = $('.sl_for_second .radio:checked').val(); //r2
		console.log(val);
		if(val == 'r4'){
			$('.sell_adress').addClass('active');
		}
		else{
			$('.sell_adress').removeClass('active');
		}
	});















































































































/*РАБОТА СЛАЙДЕРА CATALOGY. ИСПОЛЬЗОВАЛСЯ СЛАЙДЕР ИЗ СТАНДАРТНОЙ JQUERY UI БИБЛИОТЕКИ НАЧАЛО*/

$(function() {
 
  var $width = $(document).width();
  if($width >=769){
  	$('.price-range').remove();
  	$('.polzun:eq(1)').append('<div class="price-range"></div>');
  }
  if($width < 769){
  	$('.price-range').remove();
  	$('.polzun:eq(0)').append('<div class="price-range"></div>');
  }
  var $range = $('.price-range');  
  $('.price-range').slider({       
    range: true,                  
    min: 0,                      
    max: 20000,                     
    values: [2000, 15458],            
    slide: function(event, ui) { 
    	if(ui.handleIndex == 0){
    		$('.ui-slider-handle.ui-corner-all.ui-state-default:eq(0)').text('');
     		$('.ui-slider-handle.ui-corner-all.ui-state-default:eq(0)').append('<p>' + ui.values[ui.handleIndex] + '</p>');
     		$('.ui-slider-handle.ui-corner-all.ui-state-default:eq(0)').children('p').addClass('helvetica14NoUpCaseWhite');
     		$('.from').text("от " + ui.values[ui.handleIndex] + " руб");
     	}
     	if(ui.handleIndex == 1){
    		$('.ui-slider-handle.ui-corner-all.ui-state-default:eq(1)').text('');
     		$('.ui-slider-handle.ui-corner-all.ui-state-default:eq(1)').append('<p>' + ui.values[ui.handleIndex] + '</p>');
     		$('.ui-slider-handle.ui-corner-all.ui-state-default:eq(1)').children('p').addClass('helvetica14NoUpCaseWhite');
     		$('.to').text("до " + ui.values[ui.handleIndex] + " руб");
     	}
    }
  });
  $('.ui-slider-handle.ui-corner-all.ui-state-default:eq(0)').append('<p>' + $('.price-range').slider('values',0) + '</p>');
  $('.ui-slider-handle.ui-corner-all.ui-state-default:eq(1)').append('<p>' + $('.price-range').slider('values',1) + '</p>');
  $('.ui-slider-handle.ui-corner-all.ui-state-default').children('p').addClass('helvetica14NoUpCaseWhite');
  $('.to').text("до " + $('.price-range').slider('values',1) + " руб");
  $('.from').text("от " + $('.price-range').slider('values',0) + " руб");
  }); 
/*РАБОТА СЛАЙДЕРА CATALOGY. ИСПОЛЬЗОВАЛСЯ СЛАЙДЕР ИЗ СТАНДАРТНОЙ JQUERY UI БИБЛИОТЕКИ КОНЕЦ*/


/*АНИМАЦИЯ КНОПКИ SHARE НАЧАЛО*/
$('.button-share img[src="/img/item-card/share.svg"]').on('mouseover', function(){
	$(this).css("display","none");
	$('.button-share img[src="/img/item-card/share_red.svg"]').css("display", "block");
});
$('.button-share img[src="/img/item-card/share_red.svg"]').on('mouseout', function(){
	$(this).css("display","none");
	$('.button-share img[src="/img/item-card/share.svg"]').css("display", "block");
});
/*АНИМАЦИЯ КНОПКИ SHARE КОНЕЦ*/

/*ОТКРЫТИЕ-ЗАКРЫТИЕ КНОПКИ SHARE (ПЕРВЫЕ ПЯТЬ КНОПОК ДЛЯ ДЕСКТОПА, ВТОРЫЕ ПЯТЬ КНОПОК ДЛЯ АДАПТИВА) НАЧАЛО*/
var count = 1;

$('.button-share').on('click', function(){
	count++;
	if(count%2===0){
		$('.share a').each(function(index){
			if(index == 0){
				$(this).delay(100*index).animate({"left":"17px","bottom":"60px", "opacity":"1"}, 100, "linear");	
			}
			if(index == 1){
				$(this).delay(100*index).animate({"left":"57px","bottom":"93px", "opacity":"1"}, 100, "linear");
			}
			if(index == 2){
				$(this).delay(100*index).animate({"left":"109px","bottom":"95px", "opacity":"1"}, 100, "linear");
			}
			if(index == 3){
				$(this).delay(100*index).animate({"left":"152px","bottom":"67px", "opacity":"1"}, 100, "linear");
			}
			if(index == 4){
				$(this).delay(100*index).animate({"left":"170px","bottom":"18px", "opacity":"1"}, 100, "linear");
			}
			if(index == 5){
				$(this).delay(100*(index-5)).animate({"left":"17px","bottom":"60px", "opacity":"1"}, 100, "linear");	
			}
			if(index == 6){
				$(this).delay(100*(index-5)).animate({"left":"57px","bottom":"93px", "opacity":"1"}, 100, "linear");
			}
			if(index == 7){
				$(this).delay(100*(index-5)).animate({"left":"109px","bottom":"95px", "opacity":"1"}, 100, "linear");
			}
			if(index == 8){
				$(this).delay(100*(index-5)).animate({"left":"152px","bottom":"67px", "opacity":"1"}, 100, "linear");
			}
			if(index == 9){
				$(this).delay(100*(index-5)).animate({"left":"170px","bottom":"18px", "opacity":"1"}, 100, "linear");
			}
		})
	}

	if(count%2!==0){
		$('.share a').each(function(index){
		$(this).delay(100*index).animate({"left":"88px","bottom":"13px", "opacity":"0"}, 100, "linear");	
		})
	}

});
/*ОТКРЫТИЕ-ЗАКРЫТИЕ КНОПКИ SHARE (ПЕРВЫЕ ПЯТЬ КНОПОК ДЛЯ ДЕСКТОПА, ВТОРЫЕ ПЯТЬ КНОПОК ДЛЯ АДАПТИВА) КОНЕЦ*/

/*ВЫБОР ЦВЕТОВ НА ITEM-CARD И CATALOG НАЧАЛО*/
$('#choose_colors>div').on('mouseover', function(){
	$(this).addClass('active_hover_white');
});

$('#choose_colors>div').on('mouseout', function(){
	$(this).removeClass('active_hover_white');
});

$('#choose_colors>div').on('click', function(){
	$(this).toggleClass('active_white');
});

$('.colors>div').on('mouseover', function(){
	$(this).addClass('active_hover');
});

$('.colors>div').on('mouseout', function(){ 
	$(this).removeClass('active_hover');
});

$('.colors>div').on('click', function(){
	if($(this).hasClass('active')){
		$(this).removeClass('active');
	}
	if(!($(this).hasClass('active'))){
		$('.colors>div').removeClass('active');
		$(this).addClass('active');
	}
});
/*ВЫБОР ЦВЕТОВ НА ITEM-CARD И CATALOG КОНЕЦ*/

/*ВЫБОР ЦВЕТОВ НА CONSTRUCTOR НАЧАЛО*/
$('#first_constructor .colors>div').on('mouseover', function(){
	$(this).addClass('active_hover_white');
});

$('#first_constructor .colors>div').on('mouseout', function(){ 
	$(this).removeClass('active_hover_white');
});

$('#first_constructor .colors>div').on('click', function(){
	if($(this).hasClass('active_white')){
		$(this).removeClass('active_white');
	}
	if(!($(this).hasClass('active_white'))){
		$('.colors>div').removeClass('active_white');
		$(this).addClass('active_white');
	}
});

/*ВЫБОР ЦВЕТОВ НА CONSTRUCTOR КОНЕЦ*/

/*СМЕНА НАБОРА ИЗ ПЯТИ КНОПОК НА ITEM-CARD С ЧЕРНОГО НА ХОВЕР НАЧАЛО*/
$('.buttons div').on('mouseover', function(){
	$(this).children("img:eq(0)").css("display","none");
	$(this).children("img:eq(1)").css("display", "block");
	$(this).children("p").removeClass('hide');
});

$('.buttons div').on('mouseout', function(){
	$(this).children("img:eq(0)").css("display","block");
	$(this).children("img:eq(1)").css("display", "none");
	$(this).children("p").addClass("hide");
});
/*СМЕНА НАБОРА ИЗ ПЯТИ КНОПОК НА ITEM-CARD С ЧЕРНОГО НА ХОВЕР КОНЕЦ*/
  
                         
/*РАБОТА С КОРЗИНОЙ НАЧАЛО*/
$('.add-to-basket').on('click', function(){
	$(this).children('p').css({"background-color":"#278F25", "padding":"19px 70px"});
	$(this).css("box-shadow","0px 22px 32px rgba(39, 143, 37, 0.2), 0px 10px 16px rgba(39, 143, 37, 0.1)");
	$(this).children('p').text('добавлено');
	setTimeout(function(){
		$('.nmb_user_basket').children("a:eq(4)").css('background','radial-gradient(circle 70px at 11px 3px, red 4.2%, rgba(255,255,255,0) 4.2%)');
	}, 1800);
});

$('.nmb_user_basket a:eq(4)').on('click', function(e){
	e.preventDefault();
	$(".basket").css('display', 'block');
	if(($('.basket-item').length == 0)) $('.basket').css("display","none");
});

$('.nmb_user_basket_white a:eq(4)').on('click', function(e){
	e.preventDefault();
	$(".basket").css('display', 'block');
	if(($('.basket-item').length == 0)) $('.basket').css("display","none");
});

$('.basket').on('click','.minus', function(){
	if($(this).siblings(".value").text() == 0) return;
	var r = $(this).siblings(".value").text();
	$(this).siblings(".value").text(r-1);
});

$('.basket').on('click','.plus', function(){
	var r = $(this).siblings(".value").text();
	$(this).siblings(".value").text(1+(+r));
});

$('.basket').on('click','.close-button', function(){
	$(this).parents('.basket-item').remove();
	if(($('.basket-item').length == 0)) $('.basket').css("display","none");
	if(($('.basket-item').length == 0)) $('.nmb_user_basket').children("a:eq(4)").css('background','none');
});

$(document).mouseup(function (e) {
    var container = $(".basket");
    if (container.has(e.target).length === 0){
        container.css('display', 'none');
    }
});

/*РАБОТА С КОРЗИНОЙ КОНЕЦ*/

/*ПОКАЗ INFO НА CONSTRUCTOR'Е НАЧАЛО*/
$('.info_symbol').on('click', function(e){
	e.preventDefault();
	$(".show-parameters").css('display', 'block');
});

$(document).mouseup(function (e) {
    var container = $(".show-parameters");
    if (container.has(e.target).length === 0){
        container.css('display', 'none');
    }
});

/*ПОКАЗ INFO НА CONSTRUCTOR'Е КОНЕЦ*/

/*СМЕНА ИТЕМОВ ВВЕРХУ СТРАНИЦЫ ITEM-CARD НАЧАЛО*/

$('.left-arrow-item-card').on('click', function(){
	var c = $('.central-item>img').attr('src');
	var l = $('.left-picture img').attr('src');
	var r = $('.right-picture img').attr('src');

	$('.central-item>img').fadeOut(0);	
	$('.left-picture img').fadeOut(0);
	$('.right-picture img').fadeOut(0);

	$('.central-item>img').attr('src', r);	
	$('.left-picture img').attr('src', c);
	$('.right-picture img').attr('src', l);

	$('.central-item>img').delay(300).fadeIn(300);	
	$('.left-picture img').delay(300).fadeIn(300);
	$('.right-picture img').delay(300).fadeIn(300);
	if($('.add-to-basket:eq(1) p').text() == 'добавлено'){
		$('.add-to-basket:eq(1) p').css({'background':'#D91F43'});
		$('.add-to-basket:eq(1) p').text('Добавить в корзину');
	}
});

$('.right-arrow-item-card').on('click', function(){
	var c = $('.central-item>img').attr('src');
	var l = $('.left-picture img').attr('src');
	var r = $('.right-picture img').attr('src');

	$('.central-item>img').fadeOut(0);	
	$('.left-picture img').fadeOut(0);
	$('.right-picture img').fadeOut(0);

	$('.central-item>img').attr('src', l);	
	$('.left-picture img').attr('src', r);
	$('.right-picture img').attr('src', c);

	$('.central-item>img').delay(300).fadeIn(300);	
	$('.left-picture img').delay(300).fadeIn(300);
	$('.right-picture img').delay(300).fadeIn(300);
	if($('.add-to-basket:eq(1) p').text() == 'добавлено'){
		$('.add-to-basket:eq(1) p').css({'background':'#D91F43'});
		$('.add-to-basket:eq(1) p').text('Добавить в корзину');
	}
});

$('.little-left-arrow').on('click', function(){
	var c = $('.central-item>img').attr('src');
	var l = $('.left-picture img').attr('src');
	var r = $('.right-picture img').attr('src');

	$('.central-item>img').fadeOut(0);	
	$('.left-picture img').fadeOut(0);
	$('.right-picture img').fadeOut(0);

	$('.central-item>img').attr('src', r);	
	$('.left-picture img').attr('src', c);
	$('.right-picture img').attr('src', l);

	$('.central-item>img').delay(300).fadeIn(300);	
	$('.left-picture img').delay(300).fadeIn(300);
	$('.right-picture img').delay(300).fadeIn(300);
	if($('.add-to-basket:eq(0) p').text() == 'добавлено'){
		$('.add-to-basket:eq(0) p').css({'background':'#D91F43'});
		$('.add-to-basket:eq(0) p').text('Добавить в корзину');
	}
});

$('.little-right-arrow').on('click', function(){
	var c = $('.central-item>img').attr('src');
	var l = $('.left-picture img').attr('src');
	var r = $('.right-picture img').attr('src');

	$('.central-item>img').fadeOut(0);	
	$('.left-picture img').fadeOut(0);
	$('.right-picture img').fadeOut(0);

	$('.central-item>img').attr('src', l);	
	$('.left-picture img').attr('src', r);
	$('.right-picture img').attr('src', c);

	$('.central-item>img').delay(300).fadeIn(300);	
	$('.left-picture img').delay(300).fadeIn(300);
	$('.right-picture img').delay(300).fadeIn(300);
	if($('.add-to-basket:eq(0) p').text() == 'добавлено'){
		$('.add-to-basket p').css({'background':'#D91F43','box-shadow':'none'});
		$('.add-to-basket').css({'box-shadow':'0px 10px 40px rgba(217, 31, 67, 0.5)'});
		$('.add-to-basket p').text('Добавить в корзину');
	}
});

$('.filter').on('click', function(){
	$('.hide-filter').toggleClass('show-filter');
});

/*СМЕНА ИТЕМОВ ВВЕРХУ СТРАНИЦЫ ITEM-CARD КОНЕЦ*/

/*РВАНАЯ СМЕНА СЛАЙДОВ FOTORAM'Ы ITEM-CARD НАЧАЛО*/
$(function(){
$('.fotorama').on('fotorama:show', function (e, fotorama) {
 	$('.fotorama__stage__shaft').css({'transition':'.1s cubic-bezier(.98,.05,.16,.96)'});
 }).fotorama();
});
/*РВАНАЯ СМЕНА СЛАЙДОВ FOTORAM'Ы ITEM-CARD КОНЕЦ*/



/*УЛЕТ ЦЕНТРАЛЬНОГО ИТЕМА В КОРЗИНУ ITEM-CARD НАЧАЛО*/

$('#item-card .add-to-basket').on('click', function () {
        if($(document).width() >= 768){
        var cart = $('.nmb_user_basket a:eq(4)');
        var r = $('.central-item>img').attr('src');
        var imgtodrag = $('.central-item');
            var imgclone = imgtodrag.clone(true, true)
                .offset({
                top: imgtodrag.offset().top,
                left: imgtodrag.offset().left
            })
                .css({
                'opacity': '0.5',
                'position': 'absolute',
                'z-index': '100'
            })
                .appendTo($('body'))
                .animate({
                'top': cart.offset().top - 50,
                    'left': cart.offset().left - 20,
                    'width': 50,
                    'height': 50
            }, 1000, 'easeInOutExpo');
            
            setTimeout(function () {
                cart.effect("shake", {
                    times: 2
                }, 200);
            }, 1500);

            imgclone.animate({
                'width': 0,
                'height': 0,
                'top': cart.offset().top + 10,
                'left': cart.offset().left + 10
            }, function () {
                $(this).detach()
            });
        }
        if($(document).width() < 768 && $(document).width() >= 576){
        var cart = $('.nmb_user_basket a:eq(4)');
        var r = $('.central-item>img').attr('src');
        var imgtodrag = $('.central-item>img');
        $('.central-item').css({'position':'relative','width':'100%'})
            var imgclone = imgtodrag.clone(true, true)
                .offset({
                top: imgtodrag.offset().top,
                left: imgtodrag.offset().left
            })
                .css({
                'opacity': '0.5',
                'position': 'absolute',
                'margin':'auto',
                'width': '70%',
                'left':'0',
                'right': '0',
                'margin':'auto',
                'height': '130px',
                'z-index': '100'
            })
                .appendTo($('body'))
                .animate({
                'top': cart.offset().top - 60,
                    'left': cart.offset().left - 70,
                    'width': 80,
                    'height': 45
            }, 1000, 'easeInOutExpo');
            
            setTimeout(function () {
                cart.effect("shake", {
                    times: 2
                }, 200);
            }, 1500);

            imgclone.animate({
                'width': 0,
                'height': 0,
                'top': cart.offset().top + 10,
                'left': cart.offset().left -70
            }, function () {
                $(this).detach()
            });
        }
        if($(document).width() < 576){
        var cart = $('.nmb_user_basket a:eq(4)');
        var r = $('.central-item>img').attr('src');
        var imgtodrag = $('.central-item>img');
        $('.central-item').css({'position':'relative','width':'100%'})
            var imgclone = imgtodrag.clone(true, true)
                .offset({
                top: imgtodrag.offset().top,
                left: imgtodrag.offset().left
            })
                .css({
                'opacity': '0.5',
                'position': 'absolute',
                'margin':'auto',
                'width': '70%',
                'left':'0',
                'right': '0',
                'margin':'auto',
                'height': '130px',
                'z-index': '100'
            })
                .appendTo($('body'))
                .animate({
                'top': cart.offset().top - 60,
                    'left': cart.offset().left - 30,
                    'width': 80,
                    'height': 45
            }, 1000, 'easeInOutExpo');
            
            setTimeout(function () {
                cart.effect("shake", {
                    times: 2
                }, 200);
            }, 1500);

            imgclone.animate({
                'width': 0,
                'height': 0,
                'top': cart.offset().top + 10,
                'left': cart.offset().left - 30
            }, function () {
                $(this).detach()
            });
        }
            $('.basket').prepend('<div class="basket-item"><div class="basket-item-header"><div><img src="' + r + '"></div><p class="helvetica14NoUpCaseBlackNorm">Кухонная мойка ' + r + '</p><div class="close-button"><img src="/img/item-card/close.png" alt="close"></div></div><div class="cost-number-total"><div class="cost-basket"><p class="helvetica8UpCaseBlackOpacity03">цена</p><p class="helvetica14NoUpCaseBlack">18 999 руб.</p></div><div class="number-basket"><p class="helvetica8UpCaseBlackOpacity03">количество</p><div><div class="minus"><img src="/img/item-card/minus.png" alt="minus"></div><p class="helvetica14NoUpCaseBlack value">1</p><div class="plus"><img src="/img/item-card/plus.png" alt="plus"></div></div></div><div class="total"><p class="helvetica8UpCaseBlackOpacity03">всего</p><p class="helvetica14NoUpCaseBlack">37 998 руб.</p></div></div></div>');

    });

/*УЛЕТ ЦЕНТРАЛЬНОГО ИТЕМА В КОРЗИНУ ITEM-CARD КОНЕЦ*/


$('.nmb_user_basket a:eq(4)').on('mouseover', function(){
	$('.nmb_user_basket a:eq(4)>img').attr('src','/img/assets/shopping-bag-red.svg');
});
$('.nmb_user_basket a:eq(4)').on('mouseout', function(){
	$('.nmb_user_basket a:eq(4)>img').attr('src','/img/assets/shopping-bag.svg');
})





/*!!!!!!!!!!!!!!!!!!!!!!КОНСТРУКТОР!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
var save_wash;
var save_desk;
var save_stand;
var save_countertop;
var save_apron;


var foldersWashes = ['Creek_Y900M', 'Gulf_K850.2B', 'Lake_510', 'Ocean_К600', 'Pond_K850M', 
					 'River_K775', 'Sea_K850', 'Spring_C510', 'Stream_С510М'];
var foldersDesks = ['K600', 'K775', 'K850.2B', 'K850M', 'O510', 'River_K775', 'Y900M'];
var foldersStands = ['C510', 'K850', 'K850.2B', 'O510', 'Y900M', 'River_K775', 'Sea_K850', 'Spring_C510', 'Stream_С510М']; 
var st = ['black', 'blue', 'dark-grey', 'grey', 'pink', 'red', 'turquoise', 'yellow'];	
$(document).ready(function(){
	$('.owl_constructor_1').owlCarousel({
		items: 3,
		margin: 10,
		autoWidth: true,
		center: true,
		loop: true,
		nav:true,
		smartSpeed:1000,
		navText: ["<img src='/img/constructor/right_arrow.png'>","<img src='/img/constructor/left_arrow.png'>"],
		dots: false 
	});

	$('.owl_constructor_2').owlCarousel({
		items: 3,
		margin: 200,
		autoWidth: true,
		center: true,
		loop: true,
		nav:true,
		smartSpeed:1000,
		navText: ["<img src='/img/constructor/right_arrow.png'>","<img src='/img/constructor/left_arrow.png'>"],
		dots: false 
	});
	$('.owl_constructor_3').owlCarousel({
		items: 1,
		margin: 570,
		autoWidth: true,
		center: true,
		loop: true,
		nav:true,
		smartSpeed:1000,
		navText: ["<img src='/img/constructor/right_arrow.png'>","<img src='/img/constructor/left_arrow.png'>"],
		dots: false 
	});
	$('.owl_constructor_4').owlCarousel({
		items: 1,
		margin: 570,
		autoWidth: true,
		center: true,
		loop: true,
		nav:true,
		smartSpeed:1000,
		navText: ["<img src='/img/constructor/right_arrow.png'>","<img src='/img/constructor/left_arrow.png'>"],
		dots: false 
	});
	$('.owl_constructor_5').owlCarousel({
		items: 1,
		margin: 570,
		autoWidth: true,
		center: true,
		loop: true,
		nav:true,
		smartSpeed:1000,
		navText: ["<img src='/img/constructor/right_arrow.png'>","<img src='/img/constructor/left_arrow.png'>"],
		dots: false 
	});
});
$('.delegate_right').click(function(){
	$('.owl_constructor_5').trigger('prev.owl.carousel');
});

$('.delegate_left').click(function(){
	$('.owl_constructor_5').trigger('next.owl.carousel');
});


var k = 0;

$('.tab_constructor .colors>div').on('click', function(){
	if($(this).index() == 0){
		var r = 0;
		for(let i = 0; i<19; i++){
			if(r == 9) r = 0;
			$('.washes_slide').eq(i).children('img').attr('src', '/img/constructor/washes/' + foldersWashes[r] + '/dark-grey.png');
			r++;
		}
	}
	if($(this).index() == 1){
		var	 r = 0;
		for(let i = 0; i<19; i++){
			if(r == 9) r = 0;
			$('.washes_slide').eq(i).children('img').attr('src', '/img/constructor/washes/' + foldersWashes[r] + '/grey.png');
			r++;
		}
	}
	if($(this).index() == 2){
		var r = 0;
		for(let i = 0; i<19; i++){
			if(r == 9) r = 0;
			$('.washes_slide').eq(i).children('img').attr('src', '/img/constructor/washes/' + foldersWashes[r] + '/white.png');
			r++;
		}
	}
	if($(this).index() == 3){
		var r = 0;
		for(let i = 0; i<19; i++){
			if(r == 9) r = 0;
			$('.washes_slide').eq(i).children('img').attr('src', '/img/constructor/washes/' + foldersWashes[r] + '/brown.png');
			r++;
		}
	}
	if($(this).index() == 4){
		var r = 0;
		for(let i = 0; i<19; i++){
			if(r == 9) r = 0;
			$('.washes_slide').eq(i).children('img').attr('src', '/img/constructor/washes/' + foldersWashes[r] + '/black.png');
			r++;
		}
	}

});


/*ИСХОДЯ ИЗ ТОГО, ЧТО ПОКАЗАНО НА ЭКРАНЕ НА ЦЕНТРАЛЬНОМ IMAGE ФОРМИРУЕТСЯ НАЗВАНИЕ НА #FIRST_CONSTRUCTOR НАЧАЛО*/
$('.owl_constructor_1').on('translated.owl.carousel', function(){
	var s1 = $('.owl-item.active.center img').attr('src');
	var s2 = s1.split('/');
	var s3 = s2[s2.length-2];
	var s4 = s3.split('_');
	var search_name = s4[0];
	$('#first_constructor .name_name').text(search_name);
});
/*ИСХОДЯ ИЗ ТОГО, ЧТО ПОКАЗАНО НА ЭКРАНЕ НА ЦЕНТРАЛЬНОМ IMAGE ФОРМИРУЕТСЯ НАЗВАНИЕ НА #FIRST_CONSTRUCTOR КОНЕЦ*/

/*НАЧАЛО СОБЫТИЙ КНОПКИ И ПЕРЕХОДОВ НА ПЕРВОМ ЭКРАНЕ*/

$('#button_red_arrow_1 .button_add').on('click', function(){
	save_wash = $('.owl_constructor_1 .owl-item.active.center img').attr('src');
	$(this).children('p').css('background','rgb(39, 143, 37)');
	$(this).children('p').text('Добавлено');
	$(this).css('box-shadow','rgba(39, 143, 37, 0.2) 0px 22px 32px, rgba(39, 143, 37, 0.1) 0px 10px 16px');
	$('.desks').prepend('<div class="final-wash"></div>');
	$('.final-wash').append('<img src="' + save_wash +'">');
});

$('#tab_desk_1 a').on('click', function(e){
	e.preventDefault();
	var trans_link = $(this).attr('href');
	$('.tab_constructor').not(trans_link).css('display','none');
	$(trans_link).fadeIn(400);
	
	$(".button_add").children('p').css('background','#D91F43');
	$(".button_add").children('p').text('Добавить в кит');
	$(".button_add").css('box-shadow','0px 10px 40px rgba(217, 31, 67, 0.5)');

	$('#button_red_arrow_1').css('display', 'none');
	$('#button_red_arrow_2').css('display','block');

	var r1 = save_wash.split('/');
	var r2 = r1[r1.length-2];
	var r3 = r2.split('_');
	var type_of_desk = r3[1];
	for(let i = 0; i<19; i++){
		$('.desks_slide').eq(i).children('img').attr('src', '/img/constructor/desks/' + type_of_desk + '/' + type_of_desk + '.png');
	}
});	
/*КОНЕЦ СОБЫТИЙ КНОПКИ И ПЕРЕХОДОВ НА ПЕРВОМ ЭКРАНЕ*/

/*НАЧАЛО СОБЫТИЙ КНОПКИ И ПЕРЕХОДОВ НА ВТОРОМ ЭКРАНЕ*/
$('#tab_desk_1_back a').on('click', function(e){
	e.preventDefault();
	var trans_link = $(this).attr('href');
	$('.tab_constructor').not(trans_link).css('display','none');
	$(trans_link).fadeIn(400);

	$(".button_add").children('p').css('background','#D91F43');
	$(".button_add").children('p').text('Добавить в кит');
	$(".button_add").css('box-shadow','0px 10px 40px rgba(217, 31, 67, 0.5)');

	$('#button_red_arrow_2').css('display', 'none');
	$('#button_red_arrow_1').css('display','block');
	$('.final-wash').remove();
});	

$('#button_red_arrow_2 .button_add').on('click', function(){
	save_desk = $('.owl_constructor_2 .owl-item.active.center img').attr('src');
	$(this).children('p').css('background','rgb(39, 143, 37)');
	$(this).children('p').text('Добавлено');
	$(this).css('box-shadow','rgba(39, 143, 37, 0.2) 0px 22px 32px, rgba(39, 143, 37, 0.1) 0px 10px 16px');
	$('.stands').prepend('<div class="final-desk"></div>');
	$('.final-desk').append('<img src="' + save_desk +'">');
	$('.stands').prepend('<div class="final-wash"></div>');
	$('.final-wash:eq(1)').append('<img src="' + save_wash +'">');
});


$('#tab_desk_2 a').on('click', function(e){
	e.preventDefault();
	var trans_link = $(this).attr('href');
	$('.tab_constructor').not(trans_link).css('display','none');
	$(trans_link).fadeIn(400);
	
	$(".button_add").children('p').css('background','#D91F43');
	$(".button_add").children('p').text('Добавить в кит');
	$(".button_add").css('box-shadow','0px 10px 40px rgba(217, 31, 67, 0.5)');

	$('#button_red_arrow_2').css('display', 'none');
	$('#button_red_arrow_3').css('display','block');

	var r1 = save_wash.split('/');
	var r2 = r1[r1.length-2];
	var r3 = r2.split('_');
	var type_of_desk = r3[1];
	var m = 0;
	for(let i = 0; i<19; i++){
		
		if(m == 8) m = 0;
		$('.stands_slide').eq(i).children('img').attr('src', '/img/constructor/stands/' + type_of_desk + '/' + st[m] + '.png');
		m++;
	}
});	
/*КОНЕЦ СОБЫТИЙ КНОПКИ И ПЕРЕХОДОВ НА ВТОРОМ ЭКРАНЕ*/


/*ИСХОДЯ ИЗ ТОГО, ЧТО ПОКАЗАНО НА ЭКРАНЕ НА ЦЕНТРАЛЬНОМ IMAGE ФОРМИРУЕТСЯ НАЗВАНИЕ НА #THIRD_CONSTRUCTOR НАЧАЛО*/
$('.owl_constructor_3').on('translated.owl.carousel', function(){
	var s1 = $('.owl_constructor_3 .owl-item.active.center img').attr('src');
	var s2 = s1.split('/');
	var s3 = s2[s2.length-1];
	var s4 = s3.split('.');
	var search_color_rus = 0;
	var search_color_eng = s4[0];
	if (search_color_eng == 'black') search_color_rus = 'Черная';
	if (search_color_eng == 'dark-grey') search_color_rus = 'Темно-серая'; 
	if (search_color_eng == 'grey') search_color_rus = 'Серая'; 
	if (search_color_eng == 'pink') search_color_rus = 'Розовая'; 
	if (search_color_eng == 'yellow') search_color_rus = 'Желтая'; 
	if (search_color_eng == 'blue') search_color_rus = 'Синяя'; 
	if (search_color_eng == 'turquoise') search_color_rus = 'Бирюзовая'; 
	if (search_color_eng == 'red') search_color_rus = 'Красная';   
	$('#third_constructor .name_name').text(search_color_rus);
});
/*ИСХОДЯ ИЗ ТОГО, ЧТО ПОКАЗАНО НА ЭКРАНЕ НА ЦЕНТРАЛЬНОМ IMAGE ФОРМИРУЕТСЯ НАЗВАНИЕ НА #THIRD_CONSTRUCTOR КОНЕЦ*/


/*НАЧАЛО СОБЫТИЙ КНОПКИ И ПЕРЕХОДОВ НА ТРЕТЬЕМ ЭКРАНЕ*/
$('#tab_desk_2_back a').on('click', function(e){
	e.preventDefault();
	var trans_link = $(this).attr('href');
	$('.tab_constructor').not(trans_link).css('display','none');
	$('.tab_constructor').has(trans_link).css('display','block');
	$(trans_link).fadeIn(400);

	$(".button_add").children('p').css('background','#D91F43');
	$(".button_add").children('p').text('Добавить в кит');
	$(".button_add").css('box-shadow','0px 10px 40px rgba(217, 31, 67, 0.5)');

	$('#button_red_arrow_2').css('display', 'block');
	$('#button_red_arrow_3').css('display','none');
	$('.final-desk').remove();
	$('.final-wash:eq(1)').remove();
});	

$('#button_red_arrow_3 .button_add').on('click', function(){
	save_stand = $('.owl_constructor_3 .owl-item.active.center img').attr('src');
	$(this).children('p').css('background','rgb(39, 143, 37)');
	$(this).children('p').text('Добавлено');
	$(this).css('box-shadow','rgba(39, 143, 37, 0.2) 0px 22px 32px, rgba(39, 143, 37, 0.1) 0px 10px 16px');
	$('.countertops').prepend('<div class="final-stand"></div>');
	$('.final-stand').append('<img src="' + save_stand +'">');
	$('.countertops').prepend('<div class="final-desk"></div>');
	$('.final-desk:eq(1)').append('<img src="' + save_desk +'">');
	$('.countertops').prepend('<div class="final-wash"></div>');
	$('.final-wash:eq(2)').append('<img src="' + save_wash +'">');
});

$('#tab_desk_3 a').on('click', function(e){
	e.preventDefault();
	var trans_link = $(this).attr('href');
	$('.tab_constructor').not(trans_link).css('display','none');
	$(trans_link).fadeIn(400);
	
	$(".button_add").children('p').css('background','#D91F43');
	$(".button_add").children('p').text('Добавить в кит');
	$(".button_add").css('box-shadow','0px 10px 40px rgba(217, 31, 67, 0.5)');

	$('#button_red_arrow_3').css('display', 'none');
	$('#button_red_arrow_4').css('display','block');
});	
/*КОНЕЦ СОБЫТИЙ КНОПКИ И ПЕРЕХОДОВ НА ТРЕТЬЕМ ЭКРАНЕ*/

/*НАЧАЛО СОБЫТИЙ КНОПКИ И ПЕРЕХОДОВ НА ЧЕТВЕРТОМ ЭКРАНЕ*/
$('#tab_desk_3_back a').on('click', function(e){
	e.preventDefault();
	var trans_link = $(this).attr('href');
	$('.tab_constructor').not(trans_link).css('display','none');
	$('.tab_constructor').has(trans_link).css('display','block');
	$(trans_link).fadeIn(400);

	$(".button_add").children('p').css('background','#D91F43');
	$(".button_add").children('p').text('Добавить в кит');
	$(".button_add").css('box-shadow','0px 10px 40px rgba(217, 31, 67, 0.5)');

	$('#button_red_arrow_3').css('display', 'block');
	$('#button_red_arrow_4').css('display','none');
	$('.final-stand').remove();
	$('.final-desk:eq(1)').remove();
	$('.final-wash:eq(2)').remove();
});	

$('#button_red_arrow_4 .button_add').on('click', function(){
	save_countertop = $('.owl_constructor_4 .owl-item.active.center img').attr('src');
	$(this).children('p').css('background','rgb(39, 143, 37)');
	$(this).children('p').text('Добавлено');
	$(this).css('box-shadow','rgba(39, 143, 37, 0.2) 0px 22px 32px, rgba(39, 143, 37, 0.1) 0px 10px 16px');
	$('.aprons').prepend('<div class="final-stand"></div>');
	$('.final-stand:eq(1)').append('<img src="' + save_stand +'">');
	$('.aprons').prepend('<div class="final-desk"></div>');
	$('.final-desk:eq(2)').append('<img src="' + save_desk +'">');
	$('.aprons').prepend('<div class="final-wash"></div>');
	$('.final-wash:eq(3)').append('<img src="' + save_wash +'">');
	$('.aprons').prepend('<div class="final-countertop"></div>');
	$('.final-countertop').append('<img src="' + save_countertop +'">');
	$('#fifth_constructor').css('background','none');
});

$('#tab_desk_4 a').on('click', function(e){
	e.preventDefault();
	var trans_link = $(this).attr('href');
	$('.tab_constructor').not(trans_link).css('display','none');
	$(trans_link).fadeIn(400);
	
	$(".button_add").children('p').css('background','#D91F43');
	$(".button_add").children('p').text('Добавить в кит');
	$(".button_add").css('box-shadow','0px 10px 40px rgba(217, 31, 67, 0.5)');

	$('#button_red_arrow_4').css('display', 'none');
	$('#button_red_arrow_5').css('display','block');
});	

/*КОНЕЦ СОБЫТИЙ КНОПКИ И ПЕРЕХОДОВ НА ЧЕТВЕРТОМ ЭКРАНЕ*/

/*НАЧАЛО СОБЫТИЙ КНОПКИ И ПЕРЕХОДОВ НА ПЯТОМ ЭКРАНЕ*/

$('#tab_desk_4_back a').on('click', function(e){
	e.preventDefault();
	var trans_link = $(this).attr('href');
	$('.tab_constructor').not(trans_link).css('display','none');
	$('.tab_constructor').has(trans_link).css('display','block');
	$(trans_link).fadeIn(400);

	$(".button_add").children('p').css('background','#D91F43');
	$(".button_add").children('p').text('Добавить в кит');
	$(".button_add").css('box-shadow','0px 10px 40px rgba(217, 31, 67, 0.5)');

	$('#button_red_arrow_4').css('display', 'block');
	$('#button_red_arrow_5').css('display','none');
	$('.final-countertop').remove();
	$('.final-stand:eq(1)').remove();
	$('.final-desk:eq(2)').remove();
	$('.final-wash:eq(3)').remove();
});	

$('#button_red_arrow_5 .button_add').on('click', function(){
	save_apron = $('.owl_constructor_5 .owl-item.active.center img').attr('src');
	$(this).children('p').css('background','rgb(39, 143, 37)');
	$(this).children('p').text('Добавлено');
	$(this).css('box-shadow','rgba(39, 143, 37, 0.2) 0px 22px 32px, rgba(39, 143, 37, 0.1) 0px 10px 16px');
	$('#sixth_constructor').css('background','url(' + save_apron + ') center no-repeat');
	$('.final-kit').prepend('<div class="final-stand"></div>');
	$('.final-stand:eq(2)').append('<img src="' + save_stand +'">');
	$('.final-kit').prepend('<div class="final-desk"></div>');
	$('.final-desk:eq(3)').append('<img src="' + save_desk +'">');
	$('.final-kit').prepend('<div class="final-wash"></div>');
	$('.final-wash:eq(4)').append('<img src="' + save_wash +'">');
	$('.final-kit').prepend('<div class="final-countertop"></div>');
	$('.final-countertop:eq(1)').append('<img src="' + save_countertop +'">');
	var r3 = 0; /*Начинается подсчет суммы всех выбранных итемов. Происходит сначала преобразования строки в число для вычисления суммы, затем происходит обратное преобразование числа в строку для разделения десятков тысяч от сотен и последующая подмена текста в final-cost*/
	for(let i = 0; i<5;i++){
		var parse_cost = $('.constructor-cost').eq(i).text();
		var r1 = parse_cost.split(' ');
		var r2 = r1[0] + r1[1]; 
		r3 += Number.parseInt(r2);
	}
	var r6 = String(r3);
	var r4 = r6.split('');
	var sum_firstPart = r4[0]+r4[1];
	var sum_secondPart = r4[2]+r4[3]+r4[4];
	$('.final-cost').text(sum_firstPart + ' ' + sum_secondPart + ' рублей');

});

$('#tab_desk_5 a').on('click', function(e){
	e.preventDefault();
	var trans_link = $(this).attr('href');
	$('.tab_constructor').not(trans_link).css('display','none');
	$(trans_link).fadeIn(400);
	
	$(".button_add").children('p').css('background','#D91F43');
	$(".button_add").children('p').text('Добавить в кит');
	$(".button_add").css('box-shadow','0px 10px 40px rgba(217, 31, 67, 0.5)');

	$('#button_red_arrow_5').css('display', 'none');
	$('#button_red_arrow_6').css('display','block');

});	

/*КОНЕЦ СОБЫТИЙ КНОПКИ И ПЕРЕХОДОВ НА ПЯТОМ ЭКРАНЕ*/

/*НАЧАЛО СОБЫТИЙ КНОПКИ И ПЕРЕХОДОВ НА ШЕСТОМ ЭКРАНЕ*/
$('#tab_desk_5_back a').on('click', function(e){
	e.preventDefault();
	var trans_link = $(this).attr('href');
	$('.tab_constructor').not(trans_link).css('display','none');
	$('.tab_constructor').has(trans_link).css('display','block');
	$(trans_link).fadeIn(400);

	$(".button_add").children('p').css('background','#D91F43');
	$(".button_add").children('p').text('Добавить в кит');
	$(".button_add").css('box-shadow','0px 10px 40px rgba(217, 31, 67, 0.5)');

	$('#button_red_arrow_5').css('display', 'block');
	$('#button_red_arrow_6').css('display','none');
	$('.final-countertop:eq(1)').remove();
	$('.final-stand:eq(2)').remove();
	$('.final-desk:eq(3)').remove();
	$('.final-wash:eq(4)').remove();
});	

$('#button_red_arrow_6 .button_add').on('click', function(e){
	e.preventDefault();
	save_apron = $('.owl_constructor_5 .owl-item.active.center img').attr('src');
	$(this).children('a').css('background','rgb(39, 143, 37)');
	$(this).children('a').text('кит собран');
	$(this).css('box-shadow','rgba(39, 143, 37, 0.2) 0px 22px 32px, rgba(39, 143, 37, 0.1) 0px 10px 16px');
	
	var r1 = save_wash.split('/');
	var r2 = r1[r1.length-2];
	var r3 = r2.split('_');
	var wash_name = r3[0];

	var r1 = save_desk.split('/');
	var r2 = r1[r1.length-2];
	var desk_name = r2;

	var r1 = save_stand.split('/');
	var r2 = r1[r1.length-2];
	var stand_name = r3[0];

	/*var r1 = save_countertop.split('/');
	var r2 = r1[r1.length-2];
	var r3 = r2.split('_');  ПОЯВИТСЯ КОГДА ПОЯВЯТСЯ ИТЕМЫ*/
	var countertop_name = 'Hooray!';

	/*var r1 = save_apron.split('/');
	var r2 = r1[r1.length-2];
	var r3 = r2.split('_');  ПОЯВИТСЯ КОГДА ПОЯВЯТСЯ ИТЕМЫ*/
	var apron_name = "Плитка-улитка";

	for(let i=0; i<5; i++){
		if(i==0){
			$('.basket').prepend('<div class="basket-item"><div class="basket-item-header"><div><img src="' + save_wash + '"></div><p class="helvetica14NoUpCaseBlackNorm">Кухонная мойка ' + wash_name + '</p><div class="close-button"><img src="/img/item-card/close.png" alt="close"></div></div><div class="cost-number-total"><div class="cost-basket"><p class="helvetica8UpCaseBlackOpacity03">цена</p><p class="helvetica14NoUpCaseBlack">18 999 руб.</p></div><div class="number-basket"><p class="helvetica8UpCaseBlackOpacity03">количество</p><div><div class="minus"><img src="/img/item-card/minus.png" alt="minus"></div><p class="helvetica14NoUpCaseBlack value">1</p><div class="plus"><img src="/img/item-card/plus.png" alt="plus"></div></div></div><div class="total"><p class="helvetica8UpCaseBlackOpacity03">всего</p><p class="helvetica14NoUpCaseBlack">37 998 руб.</p></div></div></div>');
		}
		if(i==1){
			$('.basket').prepend('<div class="basket-item"><div class="basket-item-header"><div><img src="' + save_desk + '"></div><p class="helvetica14NoUpCaseBlackNorm">Разделочная доска ' + desk_name + '</p><div class="close-button"><img src="/img/item-card/close.png" alt="close"></div></div><div class="cost-number-total"><div class="cost-basket"><p class="helvetica8UpCaseBlackOpacity03">цена</p><p class="helvetica14NoUpCaseBlack">18 999 руб.</p></div><div class="number-basket"><p class="helvetica8UpCaseBlackOpacity03">количество</p><div><div class="minus"><img src="/img/item-card/minus.png" alt="minus"></div><p class="helvetica14NoUpCaseBlack value">1</p><div class="plus"><img src="/img/item-card/plus.png" alt="plus"></div></div></div><div class="total"><p class="helvetica8UpCaseBlackOpacity03">всего</p><p class="helvetica14NoUpCaseBlack">37 998 руб.</p></div></div></div>');
		}
		if(i==2){
			$('.basket').prepend('<div class="basket-item"><div class="basket-item-header"><div><img src="' + save_stand + '"></div><p class="helvetica14NoUpCaseBlackNorm">Подставка ' + stand_name + '</p><div class="close-button"><img src="/img/item-card/close.png" alt="close"></div></div><div class="cost-number-total"><div class="cost-basket"><p class="helvetica8UpCaseBlackOpacity03">цена</p><p class="helvetica14NoUpCaseBlack">18 999 руб.</p></div><div class="number-basket"><p class="helvetica8UpCaseBlackOpacity03">количество</p><div><div class="minus"><img src="/img/item-card/minus.png" alt="minus"></div><p class="helvetica14NoUpCaseBlack value">1</p><div class="plus"><img src="/img/item-card/plus.png" alt="plus"></div></div></div><div class="total"><p class="helvetica8UpCaseBlackOpacity03">всего</p><p class="helvetica14NoUpCaseBlack">37 998 руб.</p></div></div></div>');
		}
		if(i==3){
			$('.basket').prepend('<div class="basket-item"><div class="basket-item-header"><div><img src="' + save_countertop + '"></div><p class="helvetica14NoUpCaseBlackNorm">Столешница ' + countertop_name + '</p><div class="close-button"><img src="/img/item-card/close.png" alt="close"></div></div><div class="cost-number-total"><div class="cost-basket"><p class="helvetica8UpCaseBlackOpacity03">цена</p><p class="helvetica14NoUpCaseBlack">18 999 руб.</p></div><div class="number-basket"><p class="helvetica8UpCaseBlackOpacity03">количество</p><div><div class="minus"><img src="/img/item-card/minus.png" alt="minus"></div><p class="helvetica14NoUpCaseBlack value">1</p><div class="plus"><img src="/img/item-card/plus.png" alt="plus"></div></div></div><div class="total"><p class="helvetica8UpCaseBlackOpacity03">всего</p><p class="helvetica14NoUpCaseBlack">37 998 руб.</p></div></div></div>');
		}
		if(i==4){
			$('.basket').prepend('<div class="basket-item"><div class="basket-item-header"><div><img src="' + save_apron + '"></div><p class="helvetica14NoUpCaseBlackNorm">Кухонный фартук ' + apron_name + '</p><div class="close-button"><img src="/img/item-card/close.png" alt="close"></div></div><div class="cost-number-total"><div class="cost-basket"><p class="helvetica8UpCaseBlackOpacity03">цена</p><p class="helvetica14NoUpCaseBlack">18 999 руб.</p></div><div class="number-basket"><p class="helvetica8UpCaseBlackOpacity03">количество</p><div><div class="minus"><img src="/img/item-card/minus.png" alt="minus"></div><p class="helvetica14NoUpCaseBlack value">1</p><div class="plus"><img src="/img/item-card/plus.png" alt="plus"></div></div></div><div class="total"><p class="helvetica8UpCaseBlackOpacity03">всего</p><p class="helvetica14NoUpCaseBlack">37 998 руб.</p></div></div></div>');
		}
	}

});