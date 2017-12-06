/**
 * 多语言数据读取工具
 * @author jin.wang
 */
function I18nUtil(locale){
	if(locale==undefined || this.isEmpty(locale))
		throw "locale is not exist";
	this.locale = locale;
}
I18nUtil.prototype={
	locale:undefined,
	parseMessage:function(jsonStr,locale){
		var obj = undefined,result=undefined;
		if(!this.isJson(jsonStr))
			return jsonStr;
		obj = JSON.parse(jsonStr);
		result = this.isEmpty(locale)?obj[this.locale]:obj[locale];
		return result==undefined?'':result;
	},
	isJson:function(str){
		var obj = undefined;
		if(this.isEmpty(str))
			return false;
		try{
			obj = JSON.parse(str);
		}catch(e){
			return false;
		}
		return obj instanceof Object;
	},
	isEmpty:function(str){
		return str==undefined||str=="undefined"||typeof str!='string'||str.trim().length==0;
	}
};