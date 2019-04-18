$( document ).ready(function() {

//one page_scroll для index
	if(window.location.pathname == '/'){
		$(".index_page .main").onepage_scroll({
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
	}
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

	$(window).bind('mousewheel DOMMouseScroll', function(event){
		var elem1 = $('.main_content:eq(0)').hasClass('active');
		var elem2 = $('.main_content:eq(1)').hasClass('active');
		var elem3 = $('.main_content:eq(2)').hasClass('active');
		var elem4 = $('.main_content:eq(3)').hasClass('active'); 
		var elem5 = $('.main_content:eq(4)').hasClass('active');
		var elem6 = $('.main_content:eq(5)').hasClass('active');
		var elem7 = $('.main_content:eq(6)').hasClass('active');
		
		if (elem1){
			$('.kit_review.right-side').removeClass("right-side");
			$('.index_foo').css("display", "none");
			$('.index_foo').css({"margin":"5vh"});
		}
		else{
			$('.index_foo').css("display", "flex");
			$('.kit_review').css("display", "flex");
			$('.kit_review').addClass("right-side");
		}

		if(elem2 || elem3 || elem4 || elem5 || elem6 || elem7){
			$('.sb_2').addClass('active');
		}
		else{
			$('.sb_2').removeClass('active');
		}

		if(elem3 || elem4 || elem5 || elem6 || elem7){
			$('.sb_3').addClass('active');
		}
		else{
			$('.sb_3').removeClass('active');
		}

		if(elem4 || elem5 || elem6 || elem7){
			$('.sb_4').addClass('active');
			
		}
		else{
			$('.sb_4').removeClass('active');
		}

		if(elem5 || elem6 || elem7){
			$('.sb_5').addClass('active');
		}
		else{
			$('.sb_5').removeClass('active');
		}

		if(elem6 || elem7){
			$('.sb_6').addClass('active');
		}
		else{
			$('.sb_6').removeClass('active');
		}

		if(elem1){
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
		
		
		var scroll_Len = $('.scroll_bar a.active').length;
		console.log(scroll_Len);
		function progress_bar(scroll_Len){
			$('.scroll_bar a').removeClass('red_square');
			$('.scroll_bar a.active').eq(scroll_Len - 1).addClass('red_square');
		}

		progress_bar(scroll_Len);	
	});

	var mainTop = 0;

	$( ".scroll_arrow" ).click(function() {

		var r = ($(".main_content.active").index()) + 1;
	  	if(($(".main_content").hasClass("active"))){
			console.log(mainTop);
			mainTop -= 100;
			if(mainTop != -600){
				$(".main").css({"transform":"translate3d(0px, "+mainTop+'%'+", 0px)", "position":"relative", "transition":"all 1000ms ease 0s"})
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

























































































































$(function() {
  
  var $width = $(document).width();
  if($width >=769){
  	$('.price-range:eq(0)').remove();
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


$('.button-share img[src="/img/item-card/share.png"]').on('mouseover', function(){
	$(this).css("display","none");
	$('.button-share img[src="/img/item-card/share_red.png"]').css("display", "block");
});
$('.button-share img[src="/img/item-card/share_red.png"]').on('mouseout', function(){
	$(this).css("display","none");
	$('.button-share img[src="/img/item-card/share.png"]').css("display", "block");
});

var k = 1;

$('.button-share').on('click', function(){
	k++;
	if(k%2===0){
		$('.share a').each(function(index){
			if($('.share').siblings('.descript')) index = index;
			if($('.share').siblings('.description_table')) index = index-5;
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
		})
	}

	if(k%2!==0){
		$('.share a').each(function(index){
		$(this).delay(100*index).animate({"left":"88px","bottom":"13px", "opacity":"0"}, 100, "linear");	
		})
	}

});


$('#catalog #choose_colors>div').on('mouseover', function(){
	$(this).css("border","1px solid rgba(255,255,255, 1)");
});

$('#catalog #choose_colors>div').on('mouseout', function(){
	$(this).css("border","1px solid rgba(255,255,255, .2)");
});

$('#catalog #choose_colors>div').on('click', function(){
	$('#catalog #choose_colors>div').css("border","1px solid rgba(255,255,255, .2)");
	$(this).toggleClass('active');
	if($(this).hasClass('active')){
		$(this).off('mouseout');
		$(this).off('mouseover');
	}
	else{
		$(this).on('mouseout');
		$(this).on('mouseover');
	}
});

$('.colors>div').on('mouseover', function(){
	$(this).css("border","1px solid #3B4150");
});

$('.colors>div').on('mouseout', function(){ 
	$(this).css("border","1px solid rgba(59, 65, 80, .1)");
});

$('.colors>div').on('click', function(){
	if($(this).css("border","1px solid #3B4150")){
		$(this).css("border","1px solid rgba(59, 65, 80, .1)");
		$(this).on('mouseout');
		$(this).on('mouseover');
	}
	if($(this).css("border","1px solid rgba(59, 65, 80, .1)")){
		$('.colors>div').css("border","1px solid rgba(59, 65, 80, .1)");
		$(this).css("border","1px solid #3B4150");
		$(this).off('mouseout');
		$(this).off('mouseover');
	}
});

$('#first_constructor .colors>div').on('mouseover', function(){
	$(this).css("border","1px solid rgba(255, 255, 255, 1)");
});

$('#first_constructor .colors>div').on('mouseout', function(){ 
	$(this).css("border","1px solid rgba(255, 255, 255, .2)");
});

$('#first_constructor .colors>div').on('click', function(){
	if($(this).css("border","1px solid rgba(255, 255, 255, 1)")){
		$(this).css("border","1px solid rgba(255, 255, 255, .2)");
		$(this).on('mouseout');
		$(this).on('mouseover');
	}
	if($(this).css("border","1px solid rgba(255, 255, 255, .2)")){
		$('#first_constructor .colors>div').css("border","1px solid rgba(255, 255, 255, .2)");
		$(this).css("border","1px solid rgba(255, 255, 255, 1)");
		$(this).off('mouseout');
		$(this).off('mouseover');
	}
});

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


$('.add-to-basket').on('click', function(){
	$(this).children('p').css({"background-color":"#278F25;","box-shadow":"0px 22px 32px rgba(39, 143, 37, 0.2), 0px 10px 16px rgba(39, 143, 37, 0.1)", "padding":"19px 70px"});
	$(this).css("box-shadow","none");
	$(this).children('p').text('добавлено');
	$('.nmb_user_basket').children("a:eq(1)").css('background','radial-gradient(circle closest-side at 11px 9px, red 100%, rgba(255,255,255,0)) 100%');
});

$('.nmb_user_basket a:eq(4)').on('click', function(e){
	e.preventDefault();
	$(".basket").css('display', 'block');
});

$('.nmb_user_basket_white a:eq(4)').on('click', function(e){
	e.preventDefault();
	$(".basket").css('display', 'block');
});

$('.minus').on('click', function(){
	if($(this).siblings(".value").text() == 0) return;
	var r = $(this).siblings(".value").text();
	$(this).siblings(".value").text(r-1);
});

$('.plus').on('click', function(){
	var r = $(this).siblings(".value").text();
	$(this).siblings(".value").text(1+(+r));
});

$('.close-button').on('click', function(){
	$(this).parents('.basket-item').remove();
	if(!($('.basket').children('.basket-item').length != 0)) $('.basket').css("display","none");
});

$(document).mouseup(function (e) {
    var container = $(".basket");
    if (container.has(e.target).length === 0){
        container.css('display', 'none');
    }
});

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

$('.left-arrow-item-card').on('click', function(){
	var c = $('.central-item>img').attr('src');
	var l = $('.left-picture img').attr('src');
	var r = $('.right-picture img').attr('src');

	$('.central-item>img').attr('src', r);	
	$('.left-picture img').attr('src', c);
	$('.right-picture img').attr('src', l);
});

$('.right-arrow-item-card').on('click', function(){
	var c = $('.central-item>img').attr('src');
	var l = $('.left-picture img').attr('src');
	var r = $('.right-picture img').attr('src');

	$('.central-item>img').attr('src', l);	
	$('.left-picture img').attr('src', r);
	$('.right-picture img').attr('src', c);
});

$('.little-left-arrow').on('click', function(){
	var c = $('.central-item>img').attr('src');
	var l = $('.left-picture img').attr('src');
	var r = $('.right-picture img').attr('src');

	$('.central-item>img').attr('src', r);	
	$('.left-picture img').attr('src', c);
	$('.right-picture img').attr('src', l);
});

$('.little-right-arrow').on('click', function(){
	var c = $('.central-item>img').attr('src');
	var l = $('.left-picture img').attr('src');
	var r = $('.right-picture img').attr('src');

	$('.central-item>img').attr('src', l);	
	$('.left-picture img').attr('src', r);
	$('.right-picture img').attr('src', c);
});

$('.filter').on('click', function(){
	$('.hide-filter').toggleClass('show-filter');
});


$(function(){
$('.fotorama').on('fotorama:show', function (e, fotorama) {
 	$('.fotorama__stage__shaft').css({'transition':'.1s cubic-bezier(.98,.05,.16,.96)'});
 }).fotorama();
});





$('#item-card .add-to-basket').on('click',function(){
	var r = $('.central-item>img').attr('src');
	$('.image-to-basket img').attr('src',r);
	$('.image-to-basket').css('display','block');
	$('.image-to-basket').animate({top:'-171px',left: '988px'},500,'linear');
	$('.image-to-basket img').animate({position: 'absolute', top:'0px',right: '0', width:'0'},500,'linear');
	$('.go-to-basket').before('<div class="basket-item"><div class="basket-item-header"><div><img src="' + r + '"></div><p class="helvetica14NoUpCaseBlackNorm">Кухонная мойка ' + wash_name + '</p><div class="close-button"><img src="/img/item-card/close.png" alt="close"></div></div><div class="cost-number-total"><div class="cost-basket"><p class="helvetica8UpCaseBlackOpacity03">цена</p><p class="helvetica14NoUpCaseBlack">18 999 руб.</p></div><div class="number-basket"><p class="helvetica8UpCaseBlackOpacity03">количество</p><div><div class="minus"><img src="/img/item-card/minus.png" alt="minus"></div><p class="helvetica14NoUpCaseBlack value">1</p><div class="plus"><img src="/img/item-card/plus.png" alt="plus"></div></div></div><div class="total"><p class="helvetica8UpCaseBlackOpacity03">всего</p><p class="helvetica14NoUpCaseBlack">37 998 руб.</p></div></div></div>');

})











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
		items: 1,
		margin: 250,
		autoWidth: true,
		center: true,
		loop: true,
		nav:true,
		smartSpeed:1000,
		navText: ["<img src='/img/constructor/right_arrow.png'>","<img src='/img/constructor/left_arrow.png'>"],
		dots: false 
	});

	$('.owl_constructor_2').owlCarousel({
		items: 1,
		margin: 50,
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



$('.owl_constructor_1').on('translated.owl.carousel', function(){
	var s1 = $('.owl-item.active.center img').attr('src');
	var s2 = s1.split('/');
	var s3 = s2[s2.length-2];
	var s4 = s3.split('_');
	var search_name = s4[0];
	$('#first_constructor .name_name').text(search_name);
});

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
			$('.go-to-basket').before('<div class="basket-item"><div class="basket-item-header"><div><img src="' + save_wash + '"></div><p class="helvetica14NoUpCaseBlackNorm">Кухонная мойка ' + wash_name + '</p><div class="close-button"><img src="/img/item-card/close.png" alt="close"></div></div><div class="cost-number-total"><div class="cost-basket"><p class="helvetica8UpCaseBlackOpacity03">цена</p><p class="helvetica14NoUpCaseBlack">18 999 руб.</p></div><div class="number-basket"><p class="helvetica8UpCaseBlackOpacity03">количество</p><div><div class="minus"><img src="/img/item-card/minus.png" alt="minus"></div><p class="helvetica14NoUpCaseBlack value">1</p><div class="plus"><img src="/img/item-card/plus.png" alt="plus"></div></div></div><div class="total"><p class="helvetica8UpCaseBlackOpacity03">всего</p><p class="helvetica14NoUpCaseBlack">37 998 руб.</p></div></div></div>');
		}
		if(i==1){
			$('.go-to-basket').before('<div class="basket-item"><div class="basket-item-header"><div><img src="' + save_desk + '"></div><p class="helvetica14NoUpCaseBlackNorm">Разделочная доска ' + desk_name + '</p><div class="close-button"><img src="/img/item-card/close.png" alt="close"></div></div><div class="cost-number-total"><div class="cost-basket"><p class="helvetica8UpCaseBlackOpacity03">цена</p><p class="helvetica14NoUpCaseBlack">18 999 руб.</p></div><div class="number-basket"><p class="helvetica8UpCaseBlackOpacity03">количество</p><div><div class="minus"><img src="/img/item-card/minus.png" alt="minus"></div><p class="helvetica14NoUpCaseBlack value">1</p><div class="plus"><img src="/img/item-card/plus.png" alt="plus"></div></div></div><div class="total"><p class="helvetica8UpCaseBlackOpacity03">всего</p><p class="helvetica14NoUpCaseBlack">37 998 руб.</p></div></div></div>');
		}
		if(i==2){
			$('.go-to-basket').before('<div class="basket-item"><div class="basket-item-header"><div><img src="' + save_stand + '"></div><p class="helvetica14NoUpCaseBlackNorm">Подставка ' + stand_name + '</p><div class="close-button"><img src="/img/item-card/close.png" alt="close"></div></div><div class="cost-number-total"><div class="cost-basket"><p class="helvetica8UpCaseBlackOpacity03">цена</p><p class="helvetica14NoUpCaseBlack">18 999 руб.</p></div><div class="number-basket"><p class="helvetica8UpCaseBlackOpacity03">количество</p><div><div class="minus"><img src="/img/item-card/minus.png" alt="minus"></div><p class="helvetica14NoUpCaseBlack value">1</p><div class="plus"><img src="/img/item-card/plus.png" alt="plus"></div></div></div><div class="total"><p class="helvetica8UpCaseBlackOpacity03">всего</p><p class="helvetica14NoUpCaseBlack">37 998 руб.</p></div></div></div>');
		}
		if(i==3){
			$('.go-to-basket').before('<div class="basket-item"><div class="basket-item-header"><div><img src="' + save_countertop + '"></div><p class="helvetica14NoUpCaseBlackNorm">Столешница ' + countertop_name + '</p><div class="close-button"><img src="/img/item-card/close.png" alt="close"></div></div><div class="cost-number-total"><div class="cost-basket"><p class="helvetica8UpCaseBlackOpacity03">цена</p><p class="helvetica14NoUpCaseBlack">18 999 руб.</p></div><div class="number-basket"><p class="helvetica8UpCaseBlackOpacity03">количество</p><div><div class="minus"><img src="/img/item-card/minus.png" alt="minus"></div><p class="helvetica14NoUpCaseBlack value">1</p><div class="plus"><img src="/img/item-card/plus.png" alt="plus"></div></div></div><div class="total"><p class="helvetica8UpCaseBlackOpacity03">всего</p><p class="helvetica14NoUpCaseBlack">37 998 руб.</p></div></div></div>');
		}
		if(i==4){
			$('.go-to-basket').before('<div class="basket-item"><div class="basket-item-header"><div><img src="' + save_apron + '"></div><p class="helvetica14NoUpCaseBlackNorm">Кухонный фартук ' + apron_name + '</p><div class="close-button"><img src="/img/item-card/close.png" alt="close"></div></div><div class="cost-number-total"><div class="cost-basket"><p class="helvetica8UpCaseBlackOpacity03">цена</p><p class="helvetica14NoUpCaseBlack">18 999 руб.</p></div><div class="number-basket"><p class="helvetica8UpCaseBlackOpacity03">количество</p><div><div class="minus"><img src="/img/item-card/minus.png" alt="minus"></div><p class="helvetica14NoUpCaseBlack value">1</p><div class="plus"><img src="/img/item-card/plus.png" alt="plus"></div></div></div><div class="total"><p class="helvetica8UpCaseBlackOpacity03">всего</p><p class="helvetica14NoUpCaseBlack">37 998 руб.</p></div></div></div>');
		}
	}

});
/*КОНЕЦ СОБЫТИЙ КНОПКИ И ПЕРЕХОДОВ НА ШЕСТОМ ЭКРАНЕ*/