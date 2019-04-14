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

$('#info_symbol').on('click', function(e){
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






/*!!!!Конструктор!!!!*/

var foldersWashes = ["Creek-У-900M", "Gulf-K-850.2B", "Lake-О-510", "Ocean-К-600", "Pond-K-850M", "River-K-775", "Sea-K-850", "Spring-C510", "Stream-С-510М"];
var foldersDesks = ["K-600", "K-775", "K-850.2B", "K-850M", "O-510", "Y-900M"];
var foldersStands = ["Y-900M", "K-850.2B", "О-510", "K-850", "C-510"];
var leftIncrementfoldersWashes = 4;	
var leftIncrementfoldersDesks = 4;
var leftIncrementfoldersStands = 4;
$('.left_arrow').on('click', function(){
	if($('.tab_constructor:eq(0)').css('display') != "none"){
		leftIncrementfoldersWashes++;
		if(leftIncrementfoldersWashes == 8) leftIncrementfoldersWashes = 0;
		$('.central-constructor-item').animate({left:'-490px'}, 1000, "linear");	
		$('.left-constructor-item').animate({left:"-890px"}, 1000, "linear");;
		$('.right-constructor-item').animate({left:'300px'}, 1000, "linear");
	 	$('.pre-right-constructor-item').animate({left:'1065px'}, 1000, "linear");
	 	$('.pre-left-constructor-item').remove();
	 	$('.left-constructor-item').addClass('pre-left-constructor-item').removeClass('left-constructor-item');
		$('.central-constructor-item').addClass('left-constructor-item').removeClass('central-constructor-item');
		$('.right-constructor-item').addClass('central-constructor-item').removeClass('right-constructor-item');
		$('.pre-right-constructor-item').addClass('right-constructor-item').removeClass('pre-right-constructor-item');
		$('.washes').append('<div class="pre-right-constructor-item"><img src="/img/constructor/washes/' + foldersWashes[leftIncrementfoldersWashes] + '/black.png"></div>');
		$('.desks').append('<div class="pre-right-constructor-item"><img src="/img/constructor/washes/' + foldersWashes[leftIncrementfoldersWashes] + '/black.png"></div>');
		var now = $('.central-constructor-item img').attr('src').split('/');
		now2 = now[now.length-2];
		now3 = now2.split('-');
		$('.name_name').text(now3[0]); /*Здесь мы получаем Имя элемента находящегося в центре путем разделения его пути на составляющие и вычленении из нужной составляющей имени итема*/
		if(now3[0] == "Gulf"){ /*Сравниваем*/
			$('.constructor-cost').text('6 200 рублей');
			$('.material p:eq(1)').text('Керамика');
			$('.width p:eq(1)').text('188 см');
			$('.height p:eq(1)').text('153 см');
			$('.bowl-depth p:eq(1)').text('30 см');
		};
		if(now3[0] == "Spring"){
			$('.constructor-cost').text('11 200 рублей');
			$('.material p:eq(1)').text('Керамика');
			$('.width p:eq(1)').text('150 см');
			$('.height p:eq(1)').text('155 см');
			$('.bowl-depth p:eq(1)').text('78 см');
		}
		if(now3[0] == "Ocean") {
			$('.constructor-cost').text('7 356 рублей');
			$('.material p:eq(1)').text('Керамика');
			$('.width p:eq(1)').text('333 см');
			$('.height p:eq(1)').text('456 см');
			$('.bowl-depth p:eq(1)').text('11 см');
		};
	}
	if($('.tab_constructor:eq(1)').css('display') != "none"){
		/*leftIncrementfoldersDesks++;
		if(leftIncrementfoldersWashes == 8) leftIncrementfoldersWashes = 0;*/
		$('.central-constructor-item').animate({left:'-345px'}, 1000, "linear");	
		$('.left-constructor-item').animate({left:"-845px"}, 1000, "linear");;
		$('.right-constructor-item').animate({left:'409px'}, 1000, "linear");
	 	$('.pre-right-constructor-item').animate({left:'1090px'}, 1000, "linear");
	 	$('.pre-left-constructor-item').remove();
	 	$('.left-constructor-item').addClass('pre-left-constructor-item').removeClass('left-constructor-item');
		$('.central-constructor-item').addClass('left-constructor-item').removeClass('central-constructor-item');
		$('.right-constructor-item').addClass('central-constructor-item').removeClass('right-constructor-item');
		$('.pre-right-constructor-item').addClass('right-constructor-item').removeClass('pre-right-constructor-item');
		$('.washes').append('<div class="pre-right-constructor-item"><img src="' + suitable_desk + '"></div>');
		$('.desks').append('<div class="pre-right-constructor-item"><img src="' + suitable_desk + '"></div>');
		/*var now = $('.central-constructor-item img').attr('src').split('/');
		now2 = now[now.length-2];
		now3 = now2.split('-');
		$('.name_name').text(now3[0]); Здесь мы получаем Имя элемента находящегося в центре путем разделения его пути на составляющие и вычленении из нужной составляющей имени итема
		if(now3[0] == "Gulf"){ Сравниваем
			$('.constructor-cost').text('6 200 рублей');
			$('.material p:eq(1)').text('Керамика');
			$('.width p:eq(1)').text('188 см');
			$('.height p:eq(1)').text('153 см');
			$('.bowl-depth p:eq(1)').text('30 см');
		};
		if(now3[0] == "Spring"){
			$('.constructor-cost').text('11 200 рублей');
			$('.material p:eq(1)').text('Керамика');
			$('.width p:eq(1)').text('150 см');
			$('.height p:eq(1)').text('155 см');
			$('.bowl-depth p:eq(1)').text('78 см');
		}
		if(now3[0] == "Ocean") {
			$('.constructor-cost').text('7 356 рублей');
			$('.material p:eq(1)').text('Керамика');
			$('.width p:eq(1)').text('333 см');
			$('.height p:eq(1)').text('456 см');
			$('.bowl-depth p:eq(1)').text('11 см');
		}*/
	}
});
var rightIncrementfoldersWashes = 9;
$('.right_arrow').on('click', function(){
	if($('.tab_constructor:eq(0)').css('display') != "none"){
		rightIncrementfoldersWashes--;
		if(rightIncrementfoldersWashes == -1) rightIncrementfoldersWashes = 8;
		$('.right-constructor-item').animate({left:'1800px'}, 1000, "linear");
		$('.central-constructor-item').animate({left:'1065px'}, 1000, "linear");	
		$('.left-constructor-item').animate({left:"300px"}, 1000, "linear");
	 	$('.pre-left-constructor-item').animate({left:'-490px'}, 1000, "linear");
	 	$('.pre-right-constructor-item').remove();
	 	$('.right-constructor-item').addClass('pre-right-constructor-item').removeClass('right-constructor-item');
		$('.central-constructor-item').addClass('right-constructor-item').removeClass('central-constructor-item');
		$('.left-constructor-item').addClass('central-constructor-item').removeClass('left-constructor-item');
		$('.pre-left-constructor-item').addClass('left-constructor-item').removeClass('pre-left-constructor-item');
		$('.washes').prepend('<div class="pre-left-constructor-item"><img src="/img/constructor/washes/' + foldersWashes[rightIncrementfoldersWashes] + '/black.png"></div>');
		$('.desks').prepend('<div class="pre-left-constructor-item"><img src="/img/constructor/washes/' + foldersWashes[rightIncrementfoldersWashes] + '/black.png"></div>');
		var now = $('.central-constructor-item img').attr('src').split('/');
		now2 = now[now.length-2];
		now3 = now2.split('-');
		$('.name_name').text(now3[0]);
		if(now3[0] == "Gulf"){
			$('.constructor-cost').text('6 200 рублей');
			$('.material p:eq(1)').text('Ceramica1');
			$('.width p:eq(1)').text('188 см');
			$('.height p:eq(1)').text('153 см');
			$('.bowl-depth p:eq(1)').text('30 см');
		};
		if(now3[0] == "Spring"){
			$('.constructor-cost').text('11 200 рублей');
			$('.material p:eq(1)').text('Ceramica2');
			$('.width p:eq(1)').text('18 см');
			$('.height p:eq(1)').text('155 см');
			$('.bowl-depth p:eq(1)').text('78 см');
		}
		if(now3[0] == "Ocean") {
			$('.constructor-cost').text('7 356 рублей');
			$('.material p:eq(1)').text('Ceramica3');
			$('.width p:eq(1)').text('333 см');
			$('.height p:eq(1)').text('456 см');
			$('.bowl-depth p:eq(1)').text('11 см');
		}
	}
	if($('.tab_constructor:eq(1)').css('display') != "none"){
		/*leftIncrementfoldersDesks++;
		if(leftIncrementfoldersWashes == 8) leftIncrementfoldersWashes = 0;*/
		$('.right-constructor-item').animate({left:'1600px'}, 1000, "linear");
		$('.central-constructor-item').animate({left:'1090px'}, 1000, "linear");	
		$('.left-constructor-item').animate({left:"409px"}, 1000, "linear");
	 	$('.pre-left-constructor-item').animate({left:'-345px'}, 1000, "linear");
	 	$('.pre-right-constructor-item').remove();
	 	$('.right-constructor-item').addClass('pre-right-constructor-item').removeClass('right-constructor-item');
		$('.central-constructor-item').addClass('right-constructor-item').removeClass('central-constructor-item');
		$('.left-constructor-item').addClass('central-constructor-item').removeClass('left-constructor-item');
		$('.pre-left-constructor-item').addClass('left-constructor-item').removeClass('pre-left-constructor-item');
		$('.washes').prepend('<div class="pre-left-constructor-item"><img src="' + suitable_desk + '"></div>');
		$('.desks').prepend('<div class="pre-left-constructor-item"><img src="' + suitable_desk + '"></div>');
		var foo = $('.final-wash');
		foo.detach();
		foo.prependTo('.desks');
		/*var now = $('.central-constructor-item img').attr('src').split('/');
		now2 = now[now.length-2];
		now3 = now2.split('-');
		$('.name_name').text(now3[0]); Здесь мы получаем Имя элемента находящегося в центре путем разделения его пути на составляющие и вычленении из нужной составляющей имени итема
		if(now3[0] == "Gulf"){ Сравниваем
			$('.constructor-cost').text('6 200 рублей');
			$('.material p:eq(1)').text('Керамика');
			$('.width p:eq(1)').text('188 см');
			$('.height p:eq(1)').text('153 см');
			$('.bowl-depth p:eq(1)').text('30 см');
		};
		if(now3[0] == "Spring"){
			$('.constructor-cost').text('11 200 рублей');
			$('.material p:eq(1)').text('Керамика');
			$('.width p:eq(1)').text('150 см');
			$('.height p:eq(1)').text('155 см');
			$('.bowl-depth p:eq(1)').text('78 см');
		}
		if(now3[0] == "Ocean") {
			$('.constructor-cost').text('7 356 рублей');
			$('.material p:eq(1)').text('Керамика');
			$('.width p:eq(1)').text('333 см');
			$('.height p:eq(1)').text('456 см');
			$('.bowl-depth p:eq(1)').text('11 см');
		}*/
	}
});

$('.colors>div').on('click', function(){
	var src = $('.central-constructor-item img').attr('src'); /*получаем путь центрального итема*/
	r = src.split('/'); /*делим путь на подстроки. подстрока кончается символом "/"   */
	if($(this).index() == 0) substr = "dark-grey";
	if($(this).index() == 1) substr = "grey";
	if($(this).index() == 2) substr = "white";
	if($(this).index() == 3) substr = "brown";
	if($(this).index() == 4) substr = "black";
	$('.central-constructor-item img').fadeOut(300);
	for (let i=0; i<r.length; i++){ /*идем по массиву подстрок и ищем в нем сопадения по пути(один точно совпадет) */
		if(r[i] == "Creek-У-900M") {$('.central-constructor-item img').attr('src', '/img/constructor/washes/Creek-У-900M/' + substr + '.png'); break;}  
		if(r[i] == "Lake-О-510") {$('.central-constructor-item img').attr('src', '/img/constructor/washes/Lake-О-510/' + substr + '.png'); break;}
		if(r[i] == "Gulf-K-850.2B") {$('.central-constructor-item img').attr('src', '/img/constructor/washes/Gulf-K-850.2B/' + substr + '.png'); break;}
		if(r[i] == "Ocean-К-600") {$('.central-constructor-item img').attr('src', '/img/constructor/washes/Ocean-К-600/' + substr + '.png'); break;}
		if(r[i] == "Pond-K-850M") {$('.central-constructor-item img').attr('src', '/img/constructor/washes/Pond-K-850M/' + substr + '.png'); break;}
		if(r[i] == "River-K-775") {$('.central-constructor-item img').attr('src', '/img/constructor/washes/River-K-775/' + substr + '.png'); break;}
		if(r[i] == "Sea-K-850") {$('.central-constructor-item img').attr('src', '/img/constructor/washes/Sea-K-850/' + substr + '.png'); break;}
		if(r[i] == "Spring-C510") {$('.central-constructor-item img').attr('src', '/img/constructor/washes/Spring-C510/' + substr + '.png'); break;}
		if(r[i] == "Stream-С-510М") {$('.central-constructor-item img').attr('src', '/img/constructor/washes/Stream-С-510М/' + substr + '.png'); break;}
	}
	$('.central-constructor-item img').fadeIn(300);
});

var save_wash;
$('.button_add').on('click', function(){
	save_wash = $('.central-constructor-item img').attr('src');
	$(this).children('p').css('background','rgb(39, 143, 37)');
	$(this).children('p').text('Добавлено');
	$(this).css('box-shadow','rgba(39, 143, 37, 0.2) 0px 22px 32px, rgba(39, 143, 37, 0.1) 0px 10px 16px');
	$('.desks').prepend('<div class="final-wash"></div>');
	$('.final-wash').append('<img src="' + save_wash +'">');
});

var suitable_desk;

$('#tab_desk_1 a').on('click', function(e){
	e.preventDefault();
	var trans_link = $(this).attr('href');
	$('.tab_constructor').not(trans_link).css('display','none');
	$(trans_link).fadeIn(400);
	var r1 = save_wash.split('/');
	var r2 = r1[r1.length-2].split('-');
	var search_desk = r2[0];
	if(search_desk == "Ocean"){
		$('.pre-left-constructor-item img').attr('src','/img/constructor/desks/K-600/DR-K-600.png');
		$('.left-constructor-item img').attr('src','/img/constructor/desks/K-600/DR-K-600.png');
		$('.central-constructor-item img').attr('src','/img/constructor/desks/K-600/DR-K-600.png');
		$('.right-constructor-item img').attr('src','/img/constructor/desks/K-600/DR-K-600.png');
		$('.pre-right-constructor-item img').attr('src','/img/constructor/desks/K-600/DR-K-600.png');
	}
	if(search_desk == "River"){
		$('.pre-left-constructor-item img').attr('src','/img/constructor/desks/K-775/DR-K-775.png');
		$('.left-constructor-item img').attr('src','/img/constructor/desks/K-775/DR-K-775.png');
		$('.central-constructor-item img').attr('src','/img/constructor/desks/K-775/DR-K-775.png');
		$('.right-constructor-item img').attr('src','/img/constructor/desks/K-775/DR-K-775.png');
		$('.pre-right-constructor-item img').attr('src','/img/constructor/desks/K-775/DR-K-775.png');
	}
	if(search_desk == "Gulf"){
		$('.pre-left-constructor-item img').attr('src','/img/constructor/desks/K-850.2B/DR-K-850.2B.png');
		$('.left-constructor-item img').attr('src','/img/constructor/desks/K-850.2B/DR-K-850.2B.png');
		$('.central-constructor-item img').attr('src','/img/constructor/desks/K-850.2B/DR-K-850.2B.png');
		$('.right-constructor-item img').attr('src','/img/constructor/desks/K-850.2B/DR-K-850.2B.png');
		$('.pre-right-constructor-item img').attr('src','/img/constructor/desks/K-850.2B/DR-K-850.2B.png');
	}
	if(search_desk == "Pond"){
		$('.pre-left-constructor-item img').attr('src','/img/constructor/desks/K-850M/DR-K-850M.png');
		$('.left-constructor-item img').attr('src','/img/constructor/desks/K-850M/DR-K-850M.png');
		$('.central-constructor-item img').attr('src','/img/constructor/desks/K-850M/DR-K-850M.png');
		$('.right-constructor-item img').attr('src','/img/constructor/desks/K-850M/DR-K-850M.png');
		$('.pre-right-constructor-item img').attr('src','/img/constructor/desks/K-850M/DR-K-850M.png');
	}
	if(search_desk == "Lake"){
		$('.pre-left-constructor-item img').attr('src','/img/constructor/desks/O-510/DR-O-510.png');
		$('.left-constructor-item img').attr('src','/img/constructor/desks/O-510/DR-O-510.png');
		$('.central-constructor-item img').attr('src','/img/constructor/desks/O-510/DR-O-510.png');
		$('.right-constructor-item img').attr('src','/img/constructor/desks/O-510/DR-O-510.png');
		$('.pre-right-constructor-item img').attr('src','/img/constructor/desks/O-510/DR-O-510.png');
	}
	if(search_desk == "Creek"){
		$('.pre-left-constructor-item img').attr('src','/img/constructor/desks/Y-900M/DR1-Y-900M.png');
		$('.left-constructor-item img').attr('src','/img/constructor/desks/Y-900M/DR1-Y-900M.png');
		$('.central-constructor-item img').attr('src','/img/constructor/desks/Y-900M/DR1-Y-900M.png');
		$('.right-constructor-item img').attr('src','/img/constructor/desks/Y-900M/DR1-Y-900M.png');
		$('.pre-right-constructor-item img').attr('src','/img/constructor/desks/Y-900M/DR1-Y-900M.png');
	}
	if(search_desk == "Stream"){
		$('.pre-left-constructor-item img').attr('src','/img/constructor/desks/K-850M/DR-K-850M.png');
		$('.left-constructor-item img').attr('src','/img/constructor/desks/K-850M/DR-K-850M.png');
		$('.central-constructor-item img').attr('src','/img/constructor/desks/K-850M/DR-K-850M.png');
		$('.right-constructor-item img').attr('src','/img/constructor/desks/K-850M/DR-K-850M.png');
		$('.pre-right-constructor-item img').attr('src','/img/constructor/desks/K-850M/DR-K-850M.png');
	}
	if(search_desk == "Spring"){
		$('.pre-left-constructor-item img').attr('src','/img/constructor/desks/O-510/DR-O-510.png');
		$('.left-constructor-item img').attr('src','/img/constructor/desks/O-510/DR-O-510.png');
		$('.central-constructor-item img').attr('src','/img/constructor/desks/O-510/DR-O-510.png');
		$('.right-constructor-item img').attr('src','/img/constructor/desks/O-510/DR-O-510.png');
		$('.pre-right-constructor-item img').attr('src','/img/constructor/desks/O-510/DR-O-510.png');
	}
	if(search_desk == "Sea"){
		$('.pre-left-constructor-item img').attr('src','/img/constructor/desks/Y-900M/DR1-Y-900M.png');
		$('.left-constructor-item img').attr('src','/img/constructor/desks/Y-900M/DR1-Y-900M.png');
		$('.central-constructor-item img').attr('src','/img/constructor/desks/Y-900M/DR1-Y-900M.png');
		$('.right-constructor-item img').attr('src','/img/constructor/desks/Y-900M/DR1-Y-900M.png');
		$('.pre-right-constructor-item img').attr('src','/img/constructor/desks/Y-900M/DR1-Y-900M.png');
	}
	$(".button_add").children('p').css('background','#D91F43');
	$(".button_add").children('p').text('Добавить в кит');
	$(".button_add").css('box-shadow','0px 10px 40px rgba(217, 31, 67, 0.5)');

	$('#button_red_arrow_1').css('display', 'none');
	$('#button_red_arrow_2').css('display','block');
	suitable_desk = $('.central-constructor-item img').attr('src'); /*Нужна для подгрузки только тех досок, которые нужно выводить для данной мойки. Уйдет когда появятся разные материалы досок*/
});	

$('#tab_desk_1_back a').on('click', function(e){
	e.preventDefault();
	var trans_link = $(this).attr('href');
	$('.tab_constructor').not(trans_link).css('display','none');
	$('.tab_constructor').has(trans_link).css('display','block');
	$(trans_link).fadeIn(400);

	$('.pre-left-constructor-item img').attr('src', "/img/constructor/washes/Creek-У-900M/black.png");
	$('.left-constructor-item img').attr('src', "/img/constructor/washes/Gulf-K-850.2B/black.png");
	$('.central-constructor-item img').attr('src', "/img/constructor/washes/Lake-О-510/black.png");
	$('.right-constructor-item img').attr('src', "/img/constructor/washes/Ocean-К-600/black.png");
	$('.pre-right-constructor-item img').attr('src', "/img/constructor/washes/Pond-K-850M/black.png");


	$(".button_add").children('p').css('background','#D91F43');
	$(".button_add").children('p').text('Добавить в кит');
	$(".button_add").css('box-shadow','0px 10px 40px rgba(217, 31, 67, 0.5)');

	$('#button_red_arrow_2').css('display', 'none');
	$('#button_red_arrow_1').css('display','block');
	$('.final-wash').remove();
});	

$('#tab_desk_2 a').on('click', function(e){
	e.preventDefault();
	var trans_link = $(this).attr('href');
	$('.tab_constructor').not(trans_link).css('display','none');
	$('.tab_constructor').has(trans_link).css('display','block');
	$(trans_link).fadeIn(400);
	var r1 = save_wash.split('/');
	var r2 = r1[r1.length-2].split('-');
	var search_desk = r2[0];
	if(search_desk == "Ocean"){
		$('.pre-left-constructor-item img').attr('src','/img/constructor/stands/K-850.2B/grey.png');
		$('.left-constructor-item img').attr('src','/img/constructor/stands/K-850.2B/pink.png');
		$('.central-constructor-item img').attr('src','/img/constructor/stands/K-850.2B/red.png');
		$('.right-constructor-item img').attr('src','/img/constructor/stands/K-850.2B/turquoise.png');
		$('.pre-right-constructor-item img').attr('src','/img/constructor/stands/K-850.2B/yellow.png');
	}
	if(search_desk == "Spring"){
		$('.pre-left-constructor-item img').attr('src','/img/constructor/stands/C-510/grey.png');
		$('.left-constructor-item img').attr('src','/img/constructor/stands/C-510/pink.png');
		$('.central-constructor-item img').attr('src','/img/constructor/stands/C-510/red.png');
		$('.right-constructor-item img').attr('src','/img/constructor/stands/C-510/turquoise.png');
		$('.pre-right-constructor-item img').attr('src','/img/constructor/stands/C-510/yellow.png');
	}
	if(search_desk == "Gulf"){
		$('.pre-left-constructor-item img').attr('src','/img/constructor/stands/K-850.2B/grey.png');
		$('.left-constructor-item img').attr('src','/img/constructor/stands/K-850.2B/pink.png');
		$('.central-constructor-item img').attr('src','/img/constructor/stands/K-850.2B/red.png');
		$('.right-constructor-item img').attr('src','/img/constructor/stands/K-850.2B/turquoise.png');
		$('.pre-right-constructor-item img').attr('src','/img/constructor/stands/K-850.2B/yellow.png');
	}
	if(search_desk == "Sea"){
		$('.pre-left-constructor-item img').attr('src','/img/constructor/stands/K-850/grey.png');
		$('.left-constructor-item img').attr('src','/img/constructor/stands/K-850/pink.png');
		$('.central-constructor-item img').attr('src','/img/constructor/stands/K-850/red.png');
		$('.right-constructor-item img').attr('src','/img/constructor/stands/K-850/turquoise.png');
		$('.pre-right-constructor-item img').attr('src','/img/constructor/stands/K-850/yellow.png');
	}
	if(search_desk == "Lake"){
		$('.pre-left-constructor-item img').attr('src','/img/constructor/stands/O-510/grey.png');
		$('.left-constructor-item img').attr('src','/img/constructor/stands/O-510/pink.png');
		$('.central-constructor-item img').attr('src','/img/constructor/stands/O-510/red.png');
		$('.right-constructor-item img').attr('src','/img/constructor/stands/O-510/turquoise.png');
		$('.pre-right-constructor-item img').attr('src','/img/constructor/stands/O-510/yellow.png');
	}
	if(search_desk == "Creek"){
		$('.pre-left-constructor-item img').attr('src','/img/constructor/stands/Y-900M/grey.png');
		$('.left-constructor-item img').attr('src','/img/constructor/stands/Y-900M/pink.png');
		$('.central-constructor-item img').attr('src','/img/constructor/stands/Y-900M/red.png');
		$('.right-constructor-item img').attr('src','/img/constructor/stands/Y-900M/turquoise.png');
		$('.pre-right-constructor-item img').attr('src','/img/constructor/stands/Y-900M/yellow.png');
	}
	if(search_desk == "Pond"){
		$('.pre-left-constructor-item img').attr('src','/img/constructor/stands/K-850/grey.png');
		$('.left-constructor-item img').attr('src','/img/constructor/stands/K-850/pink.png');
		$('.central-constructor-item img').attr('src','/img/constructor/stands/K-850/red.png');
		$('.right-constructor-item img').attr('src','/img/constructor/stands/K-850/turquoise.png');
		$('.pre-right-constructor-item img').attr('src','/img/constructor/stands/K-850/yellow.png');
	}
	if(search_desk == "Stream"){
		$('.pre-left-constructor-item img').attr('src','/img/constructor/stands/O-510/grey.png');
		$('.left-constructor-item img').attr('src','/img/constructor/stands/O-510/pink.png');
		$('.central-constructor-item img').attr('src','/img/constructor/stands/O-510/red.png');
		$('.right-constructor-item img').attr('src','/img/constructor/stands/O-510/turquoise.png');
		$('.pre-right-constructor-item img').attr('src','/img/constructor/stands/O-510/yellow.png');
	}
	if(search_desk == "River"){
		$('.pre-left-constructor-item img').attr('src','/img/constructor/stands/Y-900M/grey.png');
		$('.left-constructor-item img').attr('src','/img/constructor/stands/Y-900M/pink.png');
		$('.central-constructor-item img').attr('src','/img/constructor/stands/Y-900M/red.png');
		$('.right-constructor-item img').attr('src','/img/constructor/stands/Y-900M/turquoise.png');
		$('.pre-right-constructor-item img').attr('src','/img/constructor/stands/Y-900M/yellow.png');
	}

	$(".button_add").children('p').css('background','#D91F43');
	$(".button_add").children('p').text('Добавить в кит');
	$(".button_add").css('box-shadow','0px 10px 40px rgba(217, 31, 67, 0.5)');

	$('#button_red_arrow_2').css('display', 'none');
	$('#button_red_arrow_3').css('display','block');
});	

$('#tab_desk_2_back a').on('click', function(e){
	e.preventDefault();
	var trans_link = $(this).attr('href');
	$('.tab_constructor').not(trans_link).css('display','none');
	$('.tab_constructor').has(trans_link).css('display','block');
	$(trans_link).fadeIn(400);

	$('.pre-left-constructor-item img').attr('src', "/img/constructor/washes/Creek-У-900M/black.png");
	$('.left-constructor-item img').attr('src', "/img/constructor/washes/Gulf-K-850.2B/black.png");
	$('.central-constructor-item img').attr('src', "/img/constructor/washes/Lake-О-510/black.png");
	$('.right-constructor-item img').attr('src', "/img/constructor/washes/Ocean-К-600/black.png");
	$('.pre-right-constructor-item img').attr('src', "/img/constructor/washes/Pond-K-850M/black.png");


	$(".button_add").children('p').css('background','#D91F43');
	$(".button_add").children('p').text('Добавить в кит');
	$(".button_add").css('box-shadow','0px 10px 40px rgba(217, 31, 67, 0.5)');

	$('#button_red_arrow_2').css('display', 'block');
	$('#button_red_arrow_3').css('display','none');
});	