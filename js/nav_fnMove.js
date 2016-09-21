var oUd_l=document.getElementById('ud_l');
var oNav=document.getElementById('nav');
var aLi=oNav.getElementsByTagName('li');
alert(oNav);

for(i=0;i<aLi.length;i++)
{
	aLi[i].onclick=function fnMove(aLi[i], oUd_l, i*50+'px');
}

function fnMove (oEvent,obj,iTarget)
				{
					clearInterval(oEvent.timer);//关闭相应定时器
					oEvent.timer=setInterval(function () {
						var speed=(iTarget-obj.offsetLeft)/3;
						speed=speed>0?Math.ceil(speed):Math.floor(speed);//向上向下取整
						if(obj.offsetLeft==iTarget)//判断是否到位
						{
							clearInterval(oEvent.timer);
						}
						if(speed==0)
						{
								clearInterval(oEvent.timer);
						}
						else
						{
							obj.style.left=oBl.offsetLeft+speed+'px';
						}
						console.log(obj.offsetLeft);
//						document.title=oBl.offsetLeft+','+speed;
						//这两个DOM和alert一样可以用来检查
					},30);
					
				};