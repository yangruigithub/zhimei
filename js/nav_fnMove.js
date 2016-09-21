var oUd_l=document.getElementById('ud_l');
var oNav=document.getElementById('nav');
var aLi=oNav.getElementsByTagName('li');

for(i=0;i<aLi.length;i++)
{
	aLi[i].onclick=function fnMove(oUd_l, aLi[i], {left:50px}, fnEnd);
}
