

/*     在nav_fnMove中使用简易移动框架完成       */


/*
function getStyle(obj, name)
{
    if(obj.currentStyle)
    {
        return obj.currentStyle[name];
    }
    else
    {
        return getComputedStyle(obj, false)[name];
    }
}


//startMove(oDiv, {width: 400, height: 400})


function fnMove(obj, tar, json, fnEnd)
{
    clearInterval(tar.timer);
    tar.timer=setInterval(function (){
        var bStop=true;        //假设：所有值都已经到了
        
        for(var attr in json)
        {
            var cur=0;
            
            if(attr=='opacity')
            {
                cur=Math.round(parseFloat(getStyle(obj, attr))*100);
            }
            else
            {
                cur=parseInt(getStyle(obj, attr));
            }
            
            var speed=(json[attr]-cur)/6;
            speed=speed>0?Math.ceil(speed):Math.floor(speed);
            
            if(cur!=json[attr])   //实际某项值未到时继续函数
                bStop=false;
            
            if(attr=='opacity')
            {
                obj.style.filter='alpha(opacity:'+(cur+speed)+')';
                obj.style.opacity=(cur+speed)/100;
            }
            else
            {
                obj.style[attr]=cur+speed+'px';
            }
        }
        
        if(bStop)
        {
            clearInterval(tar.timer);
                        
            if(fnEnd)fnEnd();     //链式运动
        }
    }, 30);
}
*/