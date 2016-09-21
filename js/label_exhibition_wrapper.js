var oLabel_exhibition_wrapper=document.getElementById('label_exhibition_wrapper');















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