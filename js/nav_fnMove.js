var oUd_l=document.getElementById('ud_l');
var oNav=document.getElementById('nav');
var aLi=oNav.getElementsByTagName('li');
for(i=0;i<aLi.length;i++)   //阻塞函数bug
{
	(function (i){
			aLi[i].onclick=function () {
				if(i==0){
					oUd_l.style.width='50px';
					oUd_l.style.left='28px';
				}
				else if(i==1){
					oUd_l.style.width='80px';
					oUd_l.style.left='135px';
				}
				else if(i==2){
					oUd_l.style.width='80px';
					oUd_l.style.left='244px';
				}
				else if(i==3){
					oUd_l.style.width='80px';
					oUd_l.style.left='351px';
				}
				else if(i==4){
					oUd_l.style.width='80px';
					oUd_l.style.left='463px';
				}
				console.log(oUd_l.style.left);
				console.log(oUd_l.style.width);
			}
	})(i);
}




// hover onmouserover
// offsetLeft
// oUd_l 


        //  CSS3   transtion  实现缓入缓出
/*
function fnMove (obj,iTarget)
				{
					clearInterval(obj.timer);//关闭相应定时器
					obj.timer=setInterval(function () {
						var speed=(iTarget-oUd_l.offsetLeft)/3;
						speed=speed>0?Math.ceil(speed):Math.floor(speed);//向上向下取整
						if(oUd_l.offsetLeft==iTarget)//判断是否到位
						{
							clearInterval(obj.timer);
						}
						else
						{
							oUd_l.style.left=oUd_l.offsetLeft+speed+'px';
						}
						console.log(oUd_l.offsetLeft);
//						document.title=oBl.offsetLeft+','+speed;
						//这两个DOM和alert一样可以用来检查
					},30);
					
				};
				
*/