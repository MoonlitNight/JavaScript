/**
 * author:jin.wang
 * 格式化货币脚本
 * locale:语言国家
 * fraction:保留小数位
 * example： 
 *	var currency = new Currency("zh_CN",0);
 *	var result = currency.format("1234567453.68"); // result=￥1,234,567,454;
 * 
 */
function Currency(locale,fraction){
	this.fraction = !isNaN(fraction = Math.abs(fraction))?fraction:2;
	this.locale = this.locales[locale];
	if(this.locale==undefined)
		throw "locale is not exist";
}
Currency.prototype={
	format:function(value){
		var locale=this.locale,symbol=locale.symbol,thousand=locale.thousand,decimal=locale.decimal,fraction = this.fraction,number = Number(value),negative = number < 0 ? "-" : "",
		fraction = !isNaN(fraction = Math.abs(fraction)) ? fraction : 2;
        var i = String(parseInt(number = Math.abs(number || 0).toFixed(fraction))),
            j = (j = i.length) > 3 ? j % 3 : 0;
        return symbol + negative + (j ? i.substr(0, j) + thousand : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousand) + (fraction ? decimal + Math.abs(number - i).toFixed(fraction).slice(2) : "");
	},
	locales:{
		"zh_CN":{
			//货币符号
			symbol:"￥",
			//千位分隔符
			thousand:",",
			//小数分隔符
			decimal:".",
		},
		"in_ID":{
			symbol:"Rp. ",
			thousand:".",
			decimal:",",
		}
	}
}