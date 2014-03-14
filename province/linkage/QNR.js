if(typeof window.QNR === 'undefined'){
    window.QNR = {};
}

QNR.$ = function(id){
    return document.getElementById(id);
}

QNR.event = {
    addEventListener: function(ele, type, fun){
        if(window.addEventListener){
            ele.addEventListener(type, fun, false);
        }else{
            ele.attachEvent('on' + type, fun);
        }
    }
};