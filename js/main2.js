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

$('.button-share').on('click', function(){//ЭТО ПИЗДЕЦ - ЗАВТРА
	
	$('.share a').removeClass('hide');
	$('.share a:eq(0)').css({"margin-left":"-111px","margin-top":"-92px" });
	$('.share a:eq(1)').css({"margin-left":"1px", "margin-top":"-158px"});
	$('.share a:eq(2)').css({"margin-left":"10px", "margin-top":"-162px"});
	$('.share a:eq(3)').css({"margin-left":"4px", "margin-top":"-106px"});
	$('.share a:eq(4)').css({"margin-left":"-22px", "margin-top":"-9px"});
})











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
