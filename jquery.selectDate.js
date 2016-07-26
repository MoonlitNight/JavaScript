/**
 * jQuery.selectDate
 * jQuery 下拉列表选择日期插件
 * @author jin.wang
 *
 */
(function($){
	"use strict";
	 var defaultOptions = {
			 begin: 1960,
			 end: new Date().getFullYear()
	        };
	 var selectDate = function(self, option){
	        var $self  = this;
	        $self.opt = $.extend({}, defaultOptions, option);
	        $self.elem = self;
	        $self.init();
	    };
	 selectDate.prototype = {
			 init: function(){
				 var $self = this
	                , opt = $self.opt
	                , elem = $self.elem;
				var year=$(elem[0]),month=$(elem[1]),day=$(elem[2]);
				for(var i=opt.end;i>=opt.begin;i--){
					$self.addChildren(year,i);
				}
				for(var i=1;i<=12;i++){
					$self.addChildren(month,i<10?"0"+i:i);
				}
				$(".overview.date:lt(2)").on("click",function(){
					var year=parseInt($(".overview.date").eq(0).find("li.selected a").text());
					var month=parseInt($(".overview.date").eq(1).find("li.selected a").text());
					$(".overview.date").eq(2).empty();
					if(year&&month){
						for(var i=1;i<=new Date(year,month,0).getDate();i++){
							var children=$("<li><a>"+(i<10?"0"+i:i)+"</a></li>")
							$(".overview.date").eq(2).append(children);
						}
					}
				})
			 },addChildren:function(parent,text){
				 var children=$("<li><a>"+text+"</a></li>");
				 return parent.append(children);
			 }
		        
	 }

	 function plugin(option) {
	        new selectDate(this,option);
	        return this;
	    }

	  $.fn.selectDate= plugin;
	  $.fn.selectDate.Constructor = selectDate;
})(jQuery)

