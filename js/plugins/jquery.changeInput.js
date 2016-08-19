/**
 * jQuery.changeInput
 * jQuery input值改变时触发 提供跨浏览器兼容
 * @author jin.wang
 *
 */
(function($){
	var regex=/^INPUT|TEXTAREA$/;
	var isInput=function(elem){
		return regex.test(elem.nodeName);
	}
	$.event.special.changeInput={
		setup:function(){
			var self = $(this);
			if(!isInput(self[0]))return false;
			$.data(self[0],"oldValue",self.val());
			$.event.add(self[0],"onpropertychange" in document ? "input onpropertychange":"input oninput",function(){
				if($.data(this,'oldValue')!=$(this).val()){
					$.event.trigger("changeInput",null,this);
				}
				$.data(this,"oldValue",self.val());
			})
		},
		teardown:function(){
			var self = $(this);
			if(!isInput(self[0]))return false;
			$.event.remove(self[0],eventType);
			$.removeData(self[0],"oldValue");
		}
	}
	$.fn.changeInput=function(callback){
		return this.bind("changeInput",callback);
	}
})(jQuery)

