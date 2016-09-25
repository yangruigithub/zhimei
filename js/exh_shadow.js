var aLabel_shadow=document.getElementsByClassName('label_exhibition_tab');
for(j=0;j<aLabel_shadow.length;j++)   //阻塞函数bug
{
	(function (j){
			aLabel_shadow[j].onclick=function () {
				aLabel_shadow[j].style.boxShadow='3px 3px 5px #888888';			
			}
	})(j);
}