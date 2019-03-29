//append new to do item
$('input').keypress(function(e){
	if(e.which == 13){
		$('ul').append("<li><span><i class=\"far fa-trash-alt\"></i></span>"+$(this).val()+"</li>")
		$(this).val("")
	}
})

//remove to do item
/*$('ul').on("click","li>span",function(){
	$(this).closest('li').remove();
})*/
//fade out then remove item
$('ul').on("click","li>span",function(){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
})
/*$('ul').on("mouseenter","li",function(){
	$(this).children('span').css("display","inline-block")	
})
$('ul').on("mouseleave","li",function(){
	$(this).children('span').css("display","none")	
})*/