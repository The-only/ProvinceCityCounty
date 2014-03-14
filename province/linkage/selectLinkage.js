/**
 * @fileOverview 地区省，市，区三级联动
 * @author mik.zhang
 */
;
(function(){

    var provinceSelect = QNR.$('province');
    var citySelect = QNR.$('city');
    var regionSelect = QNR.$('region');

    var linkage = {
        init: function(){

            this.addProvinceOption();

            this.initEvent();
        },
        initEvent: function(){

            var self = this;
            QNR.event.addEventListener(provinceSelect, 'change', function(){
                self.provinceChangeHandler();
            });

            QNR.event.addEventListener(citySelect, 'change', function(){
                self.cityChangeHandler();
            });
        },
        addProvinceOption: function(){

            for(var province in ROOT_DATA){
                var option = new Option(ROOT_DATA[province].txt, province);
                provinceSelect.add(option);
            }
        },
        provinceChangeHandler: function(){

            citySelect.length = regionSelect.length = 1;
			citySelect.selectedIndex = regionSelect.selectedIndex = 0;

            if(provinceSelect.value === ''){
                return;
            }

            var cities = ROOT_DATA[provinceSelect.value].children;

            for(var city in cities){
                var option = new Option(cities[city].txt, city);
                citySelect.add(option);
            }

        },
        cityChangeHandler: function(){

            regionSelect.length = 1;
			regionSelect.selectedIndex = 0;

            if(citySelect.value === ''){
                return;
            }

            var regions = ROOT_DATA[provinceSelect.value].
                children[citySelect.value].children;

            for(var region in regions){
                var option = new Option(regions[region].txt, region);
                regionSelect.add(option);
            }
        }
    };

    linkage.init();
})();