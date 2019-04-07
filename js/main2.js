$(function() {
  
  
  var $range = $('#price-range');  
  $('#price-range').slider({       
    range: true,                  
    min: 0,                      
    max: 20000,                     
    values: [2000, 15458],            
    slide: function(event, ui) { 
    	if(ui.handleIndex == 0){
    		$('.ui-slider-handle.ui-corner-all.ui-state-default:eq(0)').text('');
     		$('.ui-slider-handle.ui-corner-all.ui-state-default:eq(0)').append('<p>' + ui.values[ui.handleIndex] + '</p>');
     		$('.ui-slider-handle.ui-corner-all.ui-state-default:eq(0)').children('p').addClass('helvetica14NoUpCaseWhite');
     	}
     	if(ui.handleIndex == 1){
    		$('.ui-slider-handle.ui-corner-all.ui-state-default:eq(1)').text('');
     		$('.ui-slider-handle.ui-corner-all.ui-state-default:eq(1)').append('<p>' + ui.values[ui.handleIndex] + '</p>');
     		$('.ui-slider-handle.ui-corner-all.ui-state-default:eq(1)').children('p').addClass('helvetica14NoUpCaseWhite');
     	}
    }
  });
  $('.ui-slider-handle.ui-corner-all.ui-state-default:eq(0)').append('<p>' + $('#price-range').slider('values',0) + '</p>');
  $('.ui-slider-handle.ui-corner-all.ui-state-default:eq(1)').append('<p>' + $('#price-range').slider('values',1) + '</p>');
  $('.ui-slider-handle.ui-corner-all.ui-state-default').children('p').addClass('helvetica14NoUpCaseWhite');
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
		$('.share a').each(function(){
		$('.share a:eq(0)').delay(100*0).animate({"left":"17px","bottom":"46px", "opacity":"1"}, 100, "linear");	
		$('.share a:eq(1)').delay(100*1).animate({"left":"57px","bottom":"79px", "opacity":"1"}, 100, "linear");
		$('.share a:eq(2)').delay(100*2).animate({"left":"109px","bottom":"81px", "opacity":"1"}, 100, "linear");
		$('.share a:eq(3)').delay(100*3).animate({"left":"152px","bottom":"53px", "opacity":"1"}, 100, "linear");
		$('.share a:eq(4)').delay(100*4).animate({"left":"170px","bottom":"5px", "opacity":"1"}, 100, "linear");
		})
	}
	if(k%2!==0){
		$('.share a').each(function(){
		$('.share a:eq(0)').delay(100*0).animate({"left":"88px","bottom":"0px", "opacity":"0"}, 100, "linear");	
		$('.share a:eq(1)').delay(100*1).animate({"left":"88px","bottom":"0px", "opacity":"0"}, 100, "linear");
		$('.share a:eq(2)').delay(100*2).animate({"left":"88px","bottom":"0px", "opacity":"0"}, 100, "linear");
		$('.share a:eq(3)').delay(100*3).animate({"left":"88px","bottom":"0px", "opacity":"0"}, 100, "linear");
		$('.share a:eq(4)').delay(100*4).animate({"left":"88px","bottom":"0px", "opacity":"0"}, 100, "linear");
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

$('.colors-item-card>div').on('mouseover', function(){
	$(this).css("border","1px solid #3B4150");
});

$('.colors-item-card>div').on('mouseout', function(){ 
	$(this).css("border","1px solid rgba(59, 65, 80, .1)");
});

$('.colors-item-card>div').on('click', function(){
	if($(this).css("border","1px solid #3B4150")){
		$(this).css("border","1px solid rgba(59, 65, 80, .1)");
		$(this).on('mouseout');
		$(this).on('mouseover');
	}
	if($(this).css("border","1px solid rgba(59, 65, 80, .1)")){
		$('.colors-item-card>div').css("border","1px solid rgba(59, 65, 80, .1)");
		$(this).css("border","1px solid #3B4150");
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
});

$(document).mouseup(function (e) {
    var container = $(".basket");
    if (container.has(e.target).length === 0){
        container.css('display', 'none');
    }
});
