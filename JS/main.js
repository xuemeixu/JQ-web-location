$(document).ready(function(){
	$(window).scroll(function(){
	var top=$(document).scrollTop();
   /* console.log(top);*/
   var menu=$("#menu");
   var items=$("#content").find(".Item");

   var currentId="";//当前所在的楼层的ID
   items.each(function(){
   	var m=$(this);
   	var itemTop=m.offset().top;
   /*	console.log(itemTop);*/
   	if(top>(itemTop-200)){
   		currentId="#"+m.attr("id");//获取焦点
   		
   		
   	}else{
   		return false;
   	}
   });
   //给相应的楼层设置currrent,同时取消其他楼层的current
   var currentList=menu.find(".current");
  
   if(currentId&&currentList.attr("href")!=currentId){

   	 currentList.removeClass("current");

   	 menu.find("[href='"+currentId+"']").addClass("current");

   }
   
	});
  
 
});