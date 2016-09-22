var aLabel_shadow=document.getElementsByClassName('label_exhibition_tab');

for(j=0;j<label_shadow.length;j++)   //阻塞函数bug
{
	console.log(j);
	(function (j){
			aLi[j].onmouseover=function () {
				label_shadow[i].style.box-shadow= '10px 10px 5px #888888';
			}
	})(j);
}