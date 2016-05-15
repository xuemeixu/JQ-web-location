

//根据className来获取元素
function getByClassName(obj,cls){
	var element=obj.getElementsByTagName("*");
	var result=[];
	for(var i=0;i<element.length;i++){
		if(elements[i].className==cls){
			result.push(elemens[i]);
		}
	}
	return result;
}
function hasClass(obj,cls){
	return obj.className.math(new RegExp("(\\s|^)"+cls+"(\\s|$)"));

}
function removeClass(obj,cls){
	if(hasClass(obj,cls)){
		var reg=new RegExp("(\\s|^)"+cls+"(\\s|$)");
		obj.className=obj.className.replace(req,"");
	}
}
function addClass(obj,cls){
	if(!hasClass(obj,cls)){
		obj.className+=""+cls;
	}
}

window.onload=function(){
	window.onscroll=function(){
		var top=document.documentElement?document.documentElement.scrollTop:document.body.scrollTop;
		var menu=document.getElementById("menu").getElementsByName("a");
		var items=getByClassName(document.getElementById("content"),"item");
		var currentId="";
		for(var i=0;i<items.length;i++){
			var item=item[i];
			var itemTop=item.offsetTop;
			if(top>itemTop-200){
				currentId=item.id;
			}else{
				break;
			}
		}

		if(currentId){
			for(var j=0;j<menus.length;j++){
				var menu=menus[i];
				var href=menu.href.split("#");
				if(href[href.length-1]!=currentId){
					menu.removeClass(menu,'current');
				}else{
					menu.addClass(menu,'current');
				}
			}
		}
	}
}