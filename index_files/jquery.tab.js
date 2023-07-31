/**
 * tab切换
 * @version [1.0] 基于jquery
 * @author [wuhaoran]
 * @time [2017/03/22]
 */
$(document).ready(function() {
	/**
	 * tabClass tab切换 规则固定
	 * 基于jquery
	 */
	tab = {};
	tab.tabClass = function (id){
		var id = "#"+id;
		if($(id).length<=0){ return false };
		$(id).find(".tab_tit ul li").hover(function(){
			$(this).addClass("active").siblings().removeClass("active").parents(id).find(".tab_ct").eq($(this).index()).show().siblings(".tab_ct").hide();
		});
	}

	/**
	 * tabClass tab切换 带参数
	 * 基于jquery
	 * @param {string} [el] tab切换效果的外侧元素名 id或者class 在obj type属性设置 默认为id
	 * @param {json} [obj] tab切换效果所需的所有
	 */
	tab.tabClassArgument = function (el, obj){
		if(!el){console.error("tabClassArgument缺少属性el"); return;}
		var defaultObj = {
			el: el,
			hoverlist:　".tab_tit ul li", // tab切换的触发元素列表
			childlist: ".tab_ct", // tab切换的内容元素列表
			type: "id", // 只有type为class时，才会当做class处理
			changeclass: "active" // 发生变化的class名称
		};
		obj = obj ? $.extend( defaultObj, obj ) : defaultObj;

		var EleName = (obj.type == "class") ? "."+obj.el : "#"+obj.el;
		if($(EleName).length<=0){ console.error("tabClassArgument找不到元素"+EleName+""); return; };

		$(EleName).find(obj.hoverlist).hover(function(){
			var parentDom = $(this).parents(EleName),
				_index = $(this).index();
			$(this).addClass(obj.changeclass).siblings().removeClass(obj.changeclass);
			parentDom.find(obj.childlist).eq(_index).show().siblings(obj.childlist).hide();
		});
	}
});