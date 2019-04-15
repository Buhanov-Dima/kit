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
		/*$('.share a:eq(6)').delay(100*1).animate({"left":"88px","bottom":"0px", "opacity":"0"}, 100, "linear");
		$('.share a:eq(7)').delay(100*2).animate({"left":"88px","bottom":"0px", "opacity":"0"}, 100, "linear");
		$('.share a:eq(8)').delay(100*3).animate({"left":"88px","bottom":"0px", "opacity":"0"}, 100, "linear");
		$('.share a:eq(9)').delay(100*4).animate({"left":"88px","bottom":"0px", "opacity":"0"}, 100, "linear");*/
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

$('.nmb_user_basket a:eq(1)').on('click', function(e){
	e.preventDefault();
	$(".basket").css('display', 'block');
});

$('.nmb_user_basket_white a:eq(1)').on('click', function(e){
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
	$(this).parents	('.basket-item').remove();
	if(!($('basket').is('.basket-item'))) $('.basket').css("display","none");
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
});


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
		var r = 0;
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
})



$('.owl_constructor_1').on('translated.owl.carousel', function(){
	var s1 = $('.owl-item.active.center img').attr('src');
	var s2 = s1.split('/');
	var s3 = s2[s2.length-2];
	var s4 = s3.split('_');
	var search_name = s4[0];
	$('#first_constructor .name_name').text(search_name);
});


var save_wash;
var save_desk;

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