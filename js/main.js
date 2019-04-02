
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
  $amount                          // Устанавливаем начальные значения для amount
    .val($range.slider('values', 0)    // Нижняя граница, потом знак ₽
    + ' - ' + $range.slider('values', 1)  ); // Верхняя граница, потом знак ₽

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