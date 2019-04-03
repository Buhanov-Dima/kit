$( document ).ready(function() {

	var activeted = false;
	$(".m2_info").click(function () {
    	$(this).toggleClass("active");
   	});

   	$(".menu").click(function () {
    	$(".menu_hide").addClass("active");

		   	var elements = [];

		    elements[0] = $("#l_1");
		    elements[1] = $("#l_2");
		    elements[2] = $("#l_3");
		    elements[3] = $("#l_4");
		    elements[4] = $("#l_5");

		    for (var i = 0; i < elements.length; i++) {
		        elements[i].delay(100 * i).transition({x: 0, y: 0, opacity: 1}, 500);  
		    }
   	});

   	$(".close_menu").click(function () {
    	$(".menu_hide").removeClass("active");
   	});
});
/*
$(function() {

	var $left = $('#left_polzun');
	var $right = $('#right_polzun');
	
  var $range = $('#price-range');  // Кэшируем элемент div для диапазона цен
  $('#price-range').slider({       // Превращаем этот элемент в ползунковый регулятор
    range: true,                   // Если это диапазон, он имеет два ползунка
    min: 0,                        // Минимальное значение
    max: 20000,                      // Максимальное значение
    values: [2000, 15458],            // Начальные значение
    slide: function(event, ui) {   // При использовании ползунка обновляем amount
      $left.val(ui.values[0]);
      $right.val(ui.values[1]);
    }
  });
  /*$amount                          // Устанавливаем начальные значения для amount
    .val($range.slider('values', 0)    // Нижняя граница, потом знак ₽
    + ' - ' + $range.slider('values', 1)  ); // Верхняя граница, потом знак ₽*/
/*
});
$('.button-share img[src="/img/item-card/share.png"]').on('mouseover', function(){
	$(this).css("display","none");
	$('.button-share img[src="/img/item-card/share_red.png"]').css("display", "block");
});
$('.button-share img[src="/img/item-card/share_red.png"]').on('mouseout', function(){
	$(this).css("display","none");
	$('.button-share img[src="/img/item-card/share.png"]').css("display", "block");
});

$('#item-card .colors div').on('mouseover', function(){
	$(this).css("border","1px solid #3B4150");
});

$('#item-card .colors div').on('mouseout', function(){
	$(this).css("border","1px solid rgba(59, 65, 80, .1)");
});

$('#item-card .colors div').on('click', function(){
	if($(this).css("border","1px solid #3B4150")){
		$(this).css("border","1px solid rgba(59, 65, 80, .1)");
		$(this).on('mouseout');
		$(this).on('mouseover');
	}
	if($(this).css("border","1px solid rgba(59, 65, 80, .1)")){
	$(this).css("border","1px solid #3B4150");
	$(this).off('mouseout');
	$(this).off('mouseover');
	}
});
//скрываем блок скролле, открываем нужный
/*
	var i = 0;
	window.onwheel = function() {
		i += 1;
  	console.log(i);
*/

/*

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


*/