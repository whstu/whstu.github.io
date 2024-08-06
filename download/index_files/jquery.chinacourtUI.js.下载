/*! jQuery UI - v1.0.0 - 2013-05-02
*
* comment plugs
1、navigatonDisplay 2、marqueeSwitchUI 3、jclock 4、divUI
2013-05-15 扩展时间插件
qq: 147104452
author ： 张锡波
 */

/*
	public variable
*/

;(function(){
 $.ccUi = {
 	version: '1.0.0'
 }
})(jQuery)

//plugs

/**
 dropdown menu of navigation
 @demon : http://jhsfy.chinacourt.org
 @date:2013-04-14
 format :
<li class="head_nav"><a href="#">法院概况
<ul>
<li><a href="#">测试一</a></li>
<li><a href="#">投诉建议信箱</a></li>
</ul>
</li>
*/
;(function($,undefined){

	$.fn.navigatonDisplay =  function(options){
	var options =  $.extend({
				action:'mouseover'
//				speed: 'slow'
			},options);

			this.each(function(){
				$(this).find('ul').hide();
			});

			$(this).bind(options.action,function(){
				$(this).find('ul').show();
			}).mouseout(function(){
				$(this).find('ul').hide();
			});
		}
})(jQuery)


/* @marquee plugs
 * @date 2013-04-25
 * @description 文字横向显示
   @demon : hszy.chinacourt.org
 * format: <div><ul><li></li></ul><div>
 */

;(function($,undefined){

	$.fn.marqueeSwitchUI = function(options){
		var options = $.extend({
			swithTime:10, //切换时间
			delayTime:2,  //延迟时间
			marginDirect: '800px',
			animateTime:10, //动画时间
			showMethod: 'slideDown', //['show','slideDown','fadeIn'] 显示效果
			showSpeed: 'slow'
		},options);

		options.swithTime *=1000;
		options.delayTime *=1000;
		options.animateTime *= 1000;

		var _li = $(this);
		var _liLen = _li.length;

		if (_liLen<2) {
			return false;
		}

		$.fn.showMethod(0, options, _li);
		setTimeout(function(){
			_li.eq(0).animate({"margin-left":options.marginDirect},options.animateTime);
			},options.delayTime);

		var i = 0;
		var _timeID = setInterval(function(){
			i = (i > _liLen-2)? 0:++i;
			var j=i-1;
			_li.eq(--j).removeAttr("style");
			$.fn.showMethod(i, options, _li);

			setTimeout(function(){
			_li.eq(i).animate({"margin-left":options.marginDirect},options.animateTime);
			},options.delayTime);
		},options.swithTime);
	}

	/*
		显示方式
	*/
	$.fn.showMethod = function(i,options, _li){
		switch(options.showMethod){
			case 'show': _li.hide().eq(i).show(options.showSpeed);
			break;
			case 'slideDown': _li.hide().eq(i).slideDown(options.showSpeed);
			break;
			default: _li.hide().eq(i).fadeIn(options.showSpeed);
			break;
		}
	}

})(jQuery)

/**
	时间封装
	demon: http://lshlfy.chinacourt.org/index.shtml
	已扩展农历
	@version 1.0.5
	@date 2013-05-15
	@data 2013-12-26 增加仅显示年月日功能
*/


;(function($,undefined){
	$.fn.extend({
//		设置
		_set:{
			dayName : ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'],
			CalendarData : new Array(20),
			madd :new Array(12),
			tgString:'甲乙丙丁戊己庚辛壬癸',
			dzString:'子丑寅卯辰巳午未申酉戌亥',
			numString:'一二三四五六七八九十',
			monString:'正二三四五六七八九十冬腊',
			sx:'鼠牛虎兔龙蛇马羊猴鸡狗猪',
			cDate:{cYear:null , cMonth:null, cDay:null, cYearString:'', cDateString:'', cHourString:''}
		},

		TheDate: new Date(),

		_getWeek:function(i){
			return this._set.dayName[i];
		},
//		时钟
		jclock:function (options) {
			options = $.extend({
				dateLebal:['-', '-',''], //日期分隔符
				timeLebal:':', //时间分隔符
				format: 'date', //显示模式
				hello: true,  //是否显示问候语
				lunarStyle: ['',''],  //农历显示格式
				lunarSet:[false,false,false] //农历显示方式
			},options);
//			 this.lunarInit();
			var myTime = this._getMyTime();
    		var week = this._getWeek(myTime.myWeek);
    		var hello = options.hello?this.getHello():'';

    		if (options.format == 'date'){
    			if(options.lunarSet[0] === true || options.lunarSet[1] === true || options.lunarSet[2] === true){
    				this.lunarInit();
	    			this._e2c();
    			}

    			options.lunarSet[0] === true? this.getcYearString():'';

    			options.lunarSet[1] === true? this.getcDateString(options.lunarStyle):'';
    			options.lunarSet[2] === true? this.getcHourString():'';

//				alert(this._set.cDate.cHourString);
    			$(this).html(myTime.myYear + options.dateLebal[0] + myTime.myMonth + options.dateLebal[1] + myTime.myDate + options.dateLebal[2] +'&nbsp;' + week + '&nbsp;' + this._set.cDate.cYearString
    			+ '&nbsp;' + this._set.cDate.cDateString + '&nbsp;' + this._set.cDate.cHourString + '&nbsp;'+hello);
    		}else if(options.format == 'time'){
	    		$(this).html(myTime.myYear + options.dateLebal[0] + myTime.myMonth + options.dateLebal[1] + myTime.myDate +options.dateLebal[2] +'&nbsp;' + myTime.myHour + options.timeLebal + myTime.myMinute + options.timeLebal + myTime.mySecond + '&nbsp;' + week +  hello);
	    		var clock = $(this);
	    		setTimeout(function () {clock.jclock(options);}, 1000);
    		}else if (options.format == 'simple'){
    			$(this).html(myTime.myYear + options.dateLebal[0] + myTime.myMonth + options.dateLebal[1] + myTime.myDate +options.dateLebal[2]+'&nbsp;'+hello)
    		}
    	},

//    	获得时间设置
    	_getMyTime:function(){
    		var myTime = {};
    		var now = new Date();
    		var year = now.getFullYear();
    		var month = now.getMonth() + 1;
    		var date = now.getDate();
    		var hour = now.getHours();
    		var minute = now.getMinutes();
    		var second = now.getSeconds();
    		var week = now.getDay();

    		myTime.myWeek = week;
    		myTime.myYear =  year < 1900? year + 1900:year;
    		myTime.myMonth = month < 10 ? '0' + month: month;
    		myTime.myDate = date < 10? '0' + date: date;
    		myTime.myHour = hour < 10? '0' + hour: hour;
    		myTime.myMinute = minute < 10? '0' + minute: minute;
    		myTime.mySecond = second < 10? '0' + second: second;

    		return myTime;
    	},
//    	获得问候
    	getHello: function(){
			var d = new Date();
			var hour = d.getHours();
			if (hour>=0 && hour<6) return '夜深了，请注意休息！';
			if (hour>=6 && hour<11) return '上午好！';
			if (hour>=11 && hour<13) return '中午好！';
			if (hour>=13 && hour<18) return '下午好！';
			if (hour>=18 && hour<=23) return '晚上好！';
    	},
//    	农历日历初始化
    	lunarInit:function(){
    	  this._set.CalendarData[0]=0x41A95;
          this._set.CalendarData[1]=0xD4A;
	      this._set.CalendarData[2]=0xDA5;
	      this._set.CalendarData[3]=0x20B55;
	      this._set.CalendarData[4]=0x56A;
	      this._set.CalendarData[5]=0x7155B;
	      this._set.CalendarData[6]=0x25D;
	      this._set.CalendarData[7]=0x92D;
	      this._set.CalendarData[8]=0x5192B;
	      this._set.CalendarData[9]=0xA95;
	      this._set.CalendarData[10]=0xB4A;
	      this._set.CalendarData[11]=0x416AA;
	      this._set.CalendarData[12]=0xAD5;
	      this._set.CalendarData[13]=0x90AB5;
	      this._set.CalendarData[14]=0x4BA;
	      this._set.CalendarData[15]=0xA5B;
	      this._set.CalendarData[16]=0x60A57;
	      this._set.CalendarData[17]=0x52B;
	      this._set.CalendarData[18]=0xA93;
	      this._set.CalendarData[19]=0x40E95;
	      this._set.madd[0]=0;
	      this._set.madd[1]=31;
	      this._set.madd[2]=59;
	      this._set.madd[3]=90;
	      this._set.madd[4]=120;
	      this._set.madd[5]=151;
	      this._set.madd[6]=181;
	      this._set.madd[7]=212;
	      this._set.madd[8]=243;
	      this._set.madd[9]=273;
	      this._set.madd[10]=304;
	      this._set.madd[11]=334;
    	},
//
    	_getBit:function(m,n){
    		return   (m>>n)&1;
    	},

//    	转换农历日期
    	_e2c:function(){
    	 /* var   total,m,n,k;
	      var   isEnd=false;
	      var   tmp=this.TheDate.getYear();
	      if   (tmp<1900)     tmp+=1900;
	      total=(tmp-2001)*365
	          +Math.floor((tmp-2001)/4)
	          +this._set.madd[this.TheDate.getMonth()]
	          +this.TheDate.getDate()
	          -23;
	      if   (this.TheDate.getYear()%4==0&&this.TheDate.getMonth()>1)
	          total++;
	      for(m=0;;m++)
	      {
	          k=(this._set.CalendarData[m]<0xfff)?11:12;
	          for(n=k;n>=0;n--)
	          {
	              if(total<=29+this._getBit(this._set.CalendarData[m],n))
	              {
	                  isEnd=true;
	                  break;
	              }
	              total=total-29-this._getBit(this._set.CalendarData[m],n);
	          }
	          if(isEnd)break;
	      }
	      this._set.cDate.cYear=2001   +   m;
	      this._set.cDate.cMonth=k-n+1;
	      this._set.cDate.cDay=total;
	      if(k==12)
	      {
	          if(cMonth==Math.floor(this._set.CalendarData[m]/0x10000)+1)
	              this._set.cDate.cMonth=1-this._set.cDate.cMonth;
	          if(this._set.cDate.cMonth>Math.floor(CalendarData[m]/0x10000)+1)
	              this._set.cDate.cMonth--;
	      }
	      this._set.cDate.cHour=Math.floor((this.TheDate.getHours()+3)/2);
*/
//    	 修改于20140211
    	var     total,m,n,k;
        var     isEnd=false;
        var     tmp=this.TheDate.getYear();
        if     (tmp<1900)       tmp+=1900;
        total=(tmp-2001)*365
            +Math.floor((tmp-2001)/4)
            +this._set.madd[this.TheDate.getMonth()]
            +this.TheDate.getDate()
            -23;
        if     (this.TheDate.getYear()%4==0&&this.TheDate.getMonth()>1)
            total++;
        for(m=0;;m++)
        {
            k=(this._set.CalendarData[m]<0xfff)?11:12;
            for(n=k;n>=0;n--)
            {
                if(total<=29+this._getBit(this._set.CalendarData[m],n))
                {
                    isEnd=true;
                    break;
                }
                total=total-29-this._getBit(this._set.CalendarData[m],n);
            }
            if(isEnd)break;
        }
        cYear=2001     +     m;
        cMonth=k-n+1;
        cDay=total;
        if(k==12)
        {
            if(cMonth==Math.floor(this._set.CalendarData[m]/0x10000)+1)
                cMonth=1-cMonth;
            if(cMonth>Math.floor(this._set.CalendarData[m]/0x10000)+1)
                cMonth--;
        }
        this._set.cHour=Math.floor((this.TheDate.getHours()+3)/2);


    	},
//    	阴历年份
    	getcYearString:function(){
    		var tmp ='';
    		tmp+=this._set.tgString.charAt((this._set.cDate.cYear-4)%10);       //年干
		    tmp+=this._set.dzString.charAt((this._set.cDate.cYear-4)%12);       //年支
		    tmp+="年(";
		    tmp+=this._set.sx.charAt((this._set.cDate.cYear-4)%12);
		    tmp+=")   ";
		    this._set.cDate.cYearString = tmp;
    	},
//    	阴历日期
		getcDateString:function($opt){
			var tmp = '';
			 if(this._set.cDate.cMonth<1)
		      {
		        tmp+="闰";
		          tmp+=this._set.monString.charAt(-this._set.cDate.cMonth-1);
		      }
		      else
		          tmp+=this._set.monString.charAt(this._set.cDate.cMonth-1);
		      tmp+="月";
		      tmp+=(this._set.cDate.cDay<11)?"初":((this._set.cDate.cDay<20)?"十":((this._set.cDate.cDay<30)?"廿":"卅"));
		      if(this._set.cDate.cDay%10!=0||this._set.cDate.cDay==10)
		          tmp+=this._set.numString.charAt((this._set.cDate.cDay-1)%10);
//		      tmp+="(农历)    ";
		      tmp = ($opt[0] || $opt[1]) ? ($opt[0]+tmp +$opt[1]):(tmp+"(农历)    ");
		      this._set.cDate.cDateString = tmp;
		},
//		阴历时辰
    	getcHourString:function(){
    		var tmp = '';
    		if(this._set.cDate.cHour==13)tmp+="夜";
          	tmp+=this._set.dzString.charAt((this._set.cDate.cHour-1)%12);
      		tmp+="时";
      		this._set.cDate.cHourString=tmp;
    	}
	});
})(jQuery)


/*
 JavaScript Document
 	@date 2013-03-13
 	description: 按指定高度显示div里的内容
	divHeight:'50px', 默认div高度
	action:'mouseout', 鼠标动作
	classOne:'main',   初始化样式
	classTwo:'mainChange', 动作完成之后的样式
	divMargin:'30px'       div-margin 像素
	demon: http://cdfy.chinacourt.org/message
*/

;(function(){
	$.fn.jqueryDivUI = function(options){
		var sets = $.extend({divHeight:'50px',
							action:'mouseout',
							classOne:'main',
							classTwo:'mainChange',
							divMargin:'30px'}, options);

		$.each($('div[class='+sets.classOne+']'),function(){
			$(this).css('height',sets.divHeight);
			$(this).bind(sets.action,function(){
//				alert(sets.divMargin);
				$('div[class='+sets.classTwo+']').removeClass(sets.classTwo).addClass(sets.classOne).css('padding',sets.divMargin).css('height',sets.divHeight);
				$(this).addClass(sets.classTwo).removeClass(sets.classOne).css('height',$(this).height()).removeAttr('style').css('padding',sets.divMargin).show("slow");
			});
		});
	}
})(jQuery);