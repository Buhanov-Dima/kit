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

$(function() {
  // Owl Carousel
  var owl = $(".owl-carousel");
  owl.owlCarousel({
    items: 9,
    margin: 10,
    loop: true,
    nav: true
  });
});