

//   CSS样式写行内，能直接做出该效果




//var oLabel_exhibition_wrapper=document.getElementById('label_exhibition_wrapper');


/*
var aRules=document.StyleSheets[0];
var rules=aRules?aRules.rules:aRules.cssRules;  //Mozilla*Safari用cssRules   IE用rules
alert(rules);
*/

/*
alert(document.styleSheets)[0];
var ocssRules=document.styleSheets[0].cssRules || document.styleSheets[0].rules;
alert(ocssRules[0].style);

for(j=0;j<ocssRules.length;j++)
{
		if(ocssRules[j].selectorText=="label_exhibition_wrapper")  //判断样式的定义名称
		{
			oLEW_X=ocssRules[j].style.width;
			alert(oLEW_X);
		}
	
}

for(i=0;i<rules.length;i++)
{

	if(rules[i].selectorText=="label_exhibition_tab")  //判断样式的定义名称
	{
		rules[i].style.width=Math.parseInt(OEW_X)/3 + 'px';
	}
}
*/












/*
      //获取样式表中所有class选择器都获得  
  var ocssRules = document.styleSheets[0].rules;  
  //从ocssRules中取出你希望的class  

*/

/* 获取样式
alert(GetCurrentStyle(oLabel_exhibition_wrapper,"color"));

element.currentStyle["name"]
   function GetCurrentStyle (obj, prop)
   {
      if (obj.currentStyle) //IE
      {
          return obj.currentStyle[prop];
      }
      else if (window.getComputedStyle) //非IE
      {
          propprop = prop.replace (/([A-Z])/g, "-$1");
          propprop = prop.toLowerCase ();
          return document.defaultView.getComputedStyle(obj,null)[propprop];
      }
     return null;
   }

*/
//JS函数
//view sourceprint?
//var getCss = function(o,key){
//  return o.currentStyle ? o.currentStyle[key] : document.defaultView.getComputedStyle(o,false)[key];
//};