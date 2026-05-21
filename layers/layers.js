var wms_layers = [];


        var lyr_Positron_0 = new ol.layer.Tile({
            'title': 'Positron',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_AreaTerjangkauGenteng_1 = new ol.format.GeoJSON();
var features_AreaTerjangkauGenteng_1 = format_AreaTerjangkauGenteng_1.readFeatures(json_AreaTerjangkauGenteng_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AreaTerjangkauGenteng_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AreaTerjangkauGenteng_1.addFeatures(features_AreaTerjangkauGenteng_1);
var lyr_AreaTerjangkauGenteng_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AreaTerjangkauGenteng_1, 
                style: style_AreaTerjangkauGenteng_1,
                popuplayertitle: 'Area Terjangkau Genteng         ',
                interactive: true,
                title: '<img src="styles/legend/AreaTerjangkauGenteng_1.png" /> Area Terjangkau Genteng         '
            });
var format_AreaTerjangkauKetabang_2 = new ol.format.GeoJSON();
var features_AreaTerjangkauKetabang_2 = format_AreaTerjangkauKetabang_2.readFeatures(json_AreaTerjangkauKetabang_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AreaTerjangkauKetabang_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AreaTerjangkauKetabang_2.addFeatures(features_AreaTerjangkauKetabang_2);
var lyr_AreaTerjangkauKetabang_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AreaTerjangkauKetabang_2, 
                style: style_AreaTerjangkauKetabang_2,
                popuplayertitle: 'Area Terjangkau Ketabang',
                interactive: true,
                title: '<img src="styles/legend/AreaTerjangkauKetabang_2.png" /> Area Terjangkau Ketabang'
            });
var format_AreaTerjangkauKaliasin_3 = new ol.format.GeoJSON();
var features_AreaTerjangkauKaliasin_3 = format_AreaTerjangkauKaliasin_3.readFeatures(json_AreaTerjangkauKaliasin_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AreaTerjangkauKaliasin_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AreaTerjangkauKaliasin_3.addFeatures(features_AreaTerjangkauKaliasin_3);
var lyr_AreaTerjangkauKaliasin_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AreaTerjangkauKaliasin_3, 
                style: style_AreaTerjangkauKaliasin_3,
                popuplayertitle: 'Area Terjangkau Kaliasin',
                interactive: true,
                title: '<img src="styles/legend/AreaTerjangkauKaliasin_3.png" /> Area Terjangkau Kaliasin'
            });
var format_AreaTerjangkauPeneleh_4 = new ol.format.GeoJSON();
var features_AreaTerjangkauPeneleh_4 = format_AreaTerjangkauPeneleh_4.readFeatures(json_AreaTerjangkauPeneleh_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AreaTerjangkauPeneleh_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AreaTerjangkauPeneleh_4.addFeatures(features_AreaTerjangkauPeneleh_4);
var lyr_AreaTerjangkauPeneleh_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AreaTerjangkauPeneleh_4, 
                style: style_AreaTerjangkauPeneleh_4,
                popuplayertitle: 'Area Terjangkau Peneleh',
                interactive: true,
                title: '<img src="styles/legend/AreaTerjangkauPeneleh_4.png" /> Area Terjangkau Peneleh'
            });
var format_JalanYangBerjarak400mdariHalte_5 = new ol.format.GeoJSON();
var features_JalanYangBerjarak400mdariHalte_5 = format_JalanYangBerjarak400mdariHalte_5.readFeatures(json_JalanYangBerjarak400mdariHalte_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanYangBerjarak400mdariHalte_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanYangBerjarak400mdariHalte_5.addFeatures(features_JalanYangBerjarak400mdariHalte_5);
var lyr_JalanYangBerjarak400mdariHalte_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanYangBerjarak400mdariHalte_5, 
                style: style_JalanYangBerjarak400mdariHalte_5,
                popuplayertitle: 'Jalan Yang Berjarak 400m dari Halte',
                interactive: true,
                title: '<img src="styles/legend/JalanYangBerjarak400mdariHalte_5.png" /> Jalan Yang Berjarak 400m dari Halte'
            });
var format_HalteBus_6 = new ol.format.GeoJSON();
var features_HalteBus_6 = format_HalteBus_6.readFeatures(json_HalteBus_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HalteBus_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HalteBus_6.addFeatures(features_HalteBus_6);
var lyr_HalteBus_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HalteBus_6, 
                style: style_HalteBus_6,
                popuplayertitle: 'Halte Bus',
                interactive: true,
                title: '<img src="styles/legend/HalteBus_6.png" /> Halte Bus'
            });

lyr_Positron_0.setVisible(true);lyr_AreaTerjangkauGenteng_1.setVisible(true);lyr_AreaTerjangkauKetabang_2.setVisible(true);lyr_AreaTerjangkauKaliasin_3.setVisible(true);lyr_AreaTerjangkauPeneleh_4.setVisible(true);lyr_JalanYangBerjarak400mdariHalte_5.setVisible(true);lyr_HalteBus_6.setVisible(true);
var layersList = [lyr_Positron_0,lyr_AreaTerjangkauGenteng_1,lyr_AreaTerjangkauKetabang_2,lyr_AreaTerjangkauKaliasin_3,lyr_AreaTerjangkauPeneleh_4,lyr_JalanYangBerjarak400mdariHalte_5,lyr_HalteBus_6];
lyr_AreaTerjangkauGenteng_1.set('fieldAliases', {'fid': 'fid', 'Nama_Halte': 'Nama_Halte', 'Keterangan': 'Keterangan', 'Sumber': 'Sumber', 'type': 'type', 'start': 'start', 'Luas Ha': 'Luas Ha', 'persen': 'persen', });
lyr_AreaTerjangkauKetabang_2.set('fieldAliases', {'fid': 'fid', 'Nama_Halte': 'Nama_Halte', 'Keterangan': 'Keterangan', 'Sumber': 'Sumber', 'type': 'type', 'start': 'start', 'luas ha': 'luas ha', });
lyr_AreaTerjangkauKaliasin_3.set('fieldAliases', {'fid': 'fid', 'Nama_Halte': 'Nama_Halte', 'Keterangan': 'Keterangan', 'Sumber': 'Sumber', 'type': 'type', 'start': 'start', 'luas ha': 'luas ha', });
lyr_AreaTerjangkauPeneleh_4.set('fieldAliases', {'fid': 'fid', 'Nama_Halte': 'Nama_Halte', 'Keterangan': 'Keterangan', 'Sumber': 'Sumber', 'type': 'type', 'start': 'start', 'luas ha': 'luas ha', });
lyr_JalanYangBerjarak400mdariHalte_5.set('fieldAliases', {'fid': 'fid', 'Nama_Halte': 'Nama_Halte', 'Keterangan': 'Keterangan', 'Sumber': 'Sumber', 'type': 'type', 'start': 'start', });
lyr_HalteBus_6.set('fieldAliases', {'Nama_Halte': 'Nama_Halte', 'Keterangan': 'Keterangan', 'Sumber': 'Sumber', });
lyr_AreaTerjangkauGenteng_1.set('fieldImages', {'fid': 'TextEdit', 'Nama_Halte': 'TextEdit', 'Keterangan': 'TextEdit', 'Sumber': 'TextEdit', 'type': 'TextEdit', 'start': 'TextEdit', 'Luas Ha': 'TextEdit', 'persen': 'Range', });
lyr_AreaTerjangkauKetabang_2.set('fieldImages', {'fid': '', 'Nama_Halte': '', 'Keterangan': '', 'Sumber': '', 'type': '', 'start': '', 'luas ha': '', });
lyr_AreaTerjangkauKaliasin_3.set('fieldImages', {'fid': '', 'Nama_Halte': '', 'Keterangan': '', 'Sumber': '', 'type': '', 'start': '', 'luas ha': '', });
lyr_AreaTerjangkauPeneleh_4.set('fieldImages', {'fid': '', 'Nama_Halte': '', 'Keterangan': '', 'Sumber': '', 'type': '', 'start': '', 'luas ha': '', });
lyr_JalanYangBerjarak400mdariHalte_5.set('fieldImages', {'fid': 'TextEdit', 'Nama_Halte': 'TextEdit', 'Keterangan': 'TextEdit', 'Sumber': 'TextEdit', 'type': 'TextEdit', 'start': 'TextEdit', });
lyr_HalteBus_6.set('fieldImages', {'Nama_Halte': '', 'Keterangan': '', 'Sumber': '', });
lyr_AreaTerjangkauGenteng_1.set('fieldLabels', {'fid': 'no label', 'Nama_Halte': 'no label', 'Keterangan': 'no label', 'Sumber': 'no label', 'type': 'no label', 'start': 'no label', 'Luas Ha': 'no label', 'persen': 'no label', });
lyr_AreaTerjangkauKetabang_2.set('fieldLabels', {'fid': 'no label', 'Nama_Halte': 'no label', 'Keterangan': 'no label', 'Sumber': 'no label', 'type': 'no label', 'start': 'no label', 'luas ha': 'no label', });
lyr_AreaTerjangkauKaliasin_3.set('fieldLabels', {'fid': 'no label', 'Nama_Halte': 'no label', 'Keterangan': 'no label', 'Sumber': 'no label', 'type': 'no label', 'start': 'no label', 'luas ha': 'no label', });
lyr_AreaTerjangkauPeneleh_4.set('fieldLabels', {'fid': 'no label', 'Nama_Halte': 'no label', 'Keterangan': 'no label', 'Sumber': 'no label', 'type': 'no label', 'start': 'no label', 'luas ha': 'no label', });
lyr_JalanYangBerjarak400mdariHalte_5.set('fieldLabels', {'fid': 'no label', 'Nama_Halte': 'no label', 'Keterangan': 'no label', 'Sumber': 'no label', 'type': 'no label', 'start': 'no label', });
lyr_HalteBus_6.set('fieldLabels', {'Nama_Halte': 'no label', 'Keterangan': 'no label', 'Sumber': 'no label', });
lyr_HalteBus_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});