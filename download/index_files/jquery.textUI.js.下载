/**
@author 张锡波
@description 单个文本框提示插件
@date 2012-12-23
@textUI 1.0.0
*/

(function(){
$.fn.textUI = function (options){
	var defaults = {
			color:'gray', 				//初始化文章颜色 
			colorDis:'#000', 			//填写后文字颜色 
		    text:'请输入关键字'			//初始化文字内容
	}
	
	var options = $.extend(defaults, options);
	var thisText = $(this);
	
	thisText.attr('style','color:'+options.color);

	if ( thisText.val() == ''){
		thisText.val(options.text);
	}
	
	thisText.blur(function(){
		thisText.attr('style','color:'+options.color);
		if(thisText.val()  == ''){
			thisText.val(options.text);
		}
	});
	
	thisText.focus(function(){
		if(thisText.val() == options.text){
			thisText.val('');
		}
	});
	
	thisText.keyup(function(){
		thisText.attr('style','color:'+options.colorDis);
	});
	
	//已写死。只对会员网站有效
	$('form:first').submit(function(){
		if($('input:eq(0)',this).val() == options.text){
			thisText.val('');
//			alert('dfsdf');
			return;
		}
	});
	return;	
}
})(jQuery)