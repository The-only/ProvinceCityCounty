if(typeof window.lib === 'undefined'){
	window.lib = {};
}

lib.$=function(id){
		return document.getElementById(id);
}

lib.event = {
	addEventListener:function(ele, type, fun){
		if(window.addEventListener){
			ele.addEventListener(type,fun,false);
		}else{
			ele.attachEvent('on'+type,fun);
		}
	}
};