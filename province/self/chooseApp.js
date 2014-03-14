/**
 * @fileOverview 地区省，市，区三级联动
 * @author xhong
 */
(function(){
	var pro = lib.$("province");
	var cit = lib.$("cities");
	var cou = lib.$("counties");

	var chooseApp = {
		init: function(){
			this.selectValue();
            this.bindEvent();
		},
		bindEvent:function(){
            this.selectOnChangge();
		},
		/*改变事件*/
		selectOnChangge:function(){
			var me = this;
			lib.event.addEventListener(pro,"change",function(){
                me.changeProvince();
			});
			lib.event.addEventListener(cit,"change",function(){
               me.changeCities();
			});
		},
		/*初始化*/
		initProCitCou:function(elem){
			var content = '<option value="choose" selected>--请选择--</option>';
			elem.innerHTML = content;
			/*var option = new Option('--请选择--', choose);   // 第 二 种方法
               elem.innerHTML = content;
            }*/
            /*
              elem.length= 1;   //初始化为一个选项     
            */

		},
	    /*加载省份*/
		selectValue:function(){
			this.initProCitCou(cit);
			this.initProCitCou(cou);
			this.createPro();
		},
		/*创建省value*/
		createPro:function(){
			this.initProCitCou(pro);
			var content="";
			for(var i =0; i<address.length; i++) {
				content ='<option value="'+address[i].province+'">'+address[i].province+'</option>';
				pro.innerHTML +=content;
				/*var content = new Option(address[i].province, address[i].province);
                pro.add(content);*/
			};
		},
		/*创建市value*/
		createCit:function(index){
			this.initProCitCou(cit);
			var content = "";
			for (var i =0; i<address[index].city.length; i++) {
				content ='<option value="'+address[index].city[i].cityName+'">'+address[index].city[i].cityName+'</option>';
				cit.innerHTML +=content;
				/*var content = new Option(address[index].city[i].cityName,address[index].city[i].cityName);
                cit.add(content);*/
			};
		},
		/*创建县value*/
		createCou:function(pindex,cindex){
			this.initProCitCou(cou);
			var content = "";
			for (var i=0; i<address[pindex].city[cindex].countyName.length; i++) {
				content ='<option value="'+address[pindex].city[cindex].countyName[i]+'">'+address[pindex].city[cindex].countyName[i]+'</option>';
				cou.innerHTML +=content;
				/*var content = new Option(address[pindex].city[cindex].countyName[i],address[pindex].city[cindex].countyName[i]);
                cit.add(content);*/
			};
		},
		/*省份改变*/
		changeProvince:function(){
			var index = pro.selectedIndex;
			if (index==0){
			    this.initProCitCou(cit);
			    this.initProCitCou(cou);
			}else{
			    this.createCit(index-1);
			    this.initProCitCou(cou);
	    	}
	    	/*if (index==0){
			     cit.length= cou.length=1;
			     return; 
			}
			this.createCit(index-1);
			cou.length=1;*/
		},
		/*城市改变*/
		changeCities:function(){
			var pindex = pro.selectedIndex;
			var cindex = cit.selectedIndex;
			if(cindex==0){
			    this.initProCitCou(cou);
			}else{
			   this.createCou(pindex-1,cindex-1);
			}
			/*if(cindex==0){
			    cou.length=1;
			}
			this.createCou(pindex-1,cindex-1);*/
		}
	}
	chooseApp.init();
})();
