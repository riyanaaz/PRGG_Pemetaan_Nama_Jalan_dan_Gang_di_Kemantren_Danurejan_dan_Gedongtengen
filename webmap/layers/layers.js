var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_JaringanJalan_2 = new ol.format.GeoJSON();
var features_JaringanJalan_2 = format_JaringanJalan_2.readFeatures(json_JaringanJalan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JaringanJalan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JaringanJalan_2.addFeatures(features_JaringanJalan_2);
var lyr_JaringanJalan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JaringanJalan_2, 
                style: style_JaringanJalan_2,
                popuplayertitle: 'Jaringan Jalan',
                interactive: true,
    title: 'Jaringan Jalan<br />\
    <img src="styles/legend/JaringanJalan_2_0.png" /> Jalan Kolektor<br />\
    <img src="styles/legend/JaringanJalan_2_1.png" /> Jalan Lokal<br />\
    <img src="styles/legend/JaringanJalan_2_2.png" /> Jalan Lainnya<br />\
    <img src="styles/legend/JaringanJalan_2_3.png" /> Jalan Setapak<br />' });
var format_BatasKecamatan_3 = new ol.format.GeoJSON();
var features_BatasKecamatan_3 = format_BatasKecamatan_3.readFeatures(json_BatasKecamatan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasKecamatan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasKecamatan_3.addFeatures(features_BatasKecamatan_3);
var lyr_BatasKecamatan_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasKecamatan_3, 
                style: style_BatasKecamatan_3,
                popuplayertitle: 'Batas Kecamatan',
                interactive: false,
                title: '<img src="styles/legend/BatasKecamatan_3.png" /> Batas Kecamatan'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_JaringanJalan_2.setVisible(true);lyr_BatasKecamatan_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_OSMStandard_1,lyr_JaringanJalan_2,lyr_BatasKecamatan_3];
lyr_JaringanJalan_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'FCODE': 'FCODE', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'MATRJL': 'MATRJL', 'KONRJL': 'KONRJL', 'FGSRJL': 'FGSRJL', 'LBRBHJ': 'LBRBHJ', 'SHP_Length': 'SHP_Length', 'Kode_Jalan': 'Kode_Jalan', 'RW': 'RW', 'Kampung': 'Kampung', 'Kelurahan': 'Kelurahan', 'WADMKC': 'WADMKC', });
lyr_BatasKecamatan_3.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'objectid_1': 'objectid_1', 'objectid': 'objectid', 'fcode': 'fcode', 'remark': 'remark', 'metadata': 'metadata', 'srs_id': 'srs_id', 'kdbbps': 'kdbbps', 'kdcbps': 'kdcbps', 'kdcpum': 'kdcpum', 'kdpbps': 'kdpbps', 'kdpkab': 'kdpkab', 'kdppum': 'kdppum', 'luaswh': 'luaswh', 'tipadm': 'tipadm', 'wadmkc': 'wadmkc', 'wadmkk': 'wadmkk', 'wadmpr': 'wadmpr', 'wiadkd': 'wiadkd', 'shape_leng': 'shape_leng', 'shape_le_1': 'shape_le_1', 'shape_area': 'shape_area', 'namobj': 'namobj', });
lyr_JaringanJalan_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'FCODE': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'MATRJL': 'TextEdit', 'KONRJL': 'TextEdit', 'FGSRJL': 'TextEdit', 'LBRBHJ': 'TextEdit', 'SHP_Length': 'TextEdit', 'Kode_Jalan': 'TextEdit', 'RW': 'TextEdit', 'Kampung': 'TextEdit', 'Kelurahan': 'TextEdit', 'WADMKC': 'TextEdit', });
lyr_BatasKecamatan_3.set('fieldImages', {'ogc_fid': 'Range', 'objectid_1': 'TextEdit', 'objectid': 'TextEdit', 'fcode': 'TextEdit', 'remark': 'TextEdit', 'metadata': 'TextEdit', 'srs_id': 'TextEdit', 'kdbbps': 'TextEdit', 'kdcbps': 'TextEdit', 'kdcpum': 'TextEdit', 'kdpbps': 'TextEdit', 'kdpkab': 'TextEdit', 'kdppum': 'TextEdit', 'luaswh': 'TextEdit', 'tipadm': 'TextEdit', 'wadmkc': 'TextEdit', 'wadmkk': 'TextEdit', 'wadmpr': 'TextEdit', 'wiadkd': 'Range', 'shape_leng': 'TextEdit', 'shape_le_1': 'TextEdit', 'shape_area': 'TextEdit', 'namobj': 'TextEdit', });
lyr_JaringanJalan_2.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'FCODE': 'inline label - always visible', 'NAMOBJ': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'MATRJL': 'inline label - always visible', 'KONRJL': 'inline label - always visible', 'FGSRJL': 'inline label - always visible', 'LBRBHJ': 'inline label - always visible', 'SHP_Length': 'inline label - always visible', 'Kode_Jalan': 'inline label - always visible', 'RW': 'inline label - always visible', 'Kampung': 'inline label - always visible', 'Kelurahan': 'inline label - always visible', 'WADMKC': 'inline label - always visible', });
lyr_BatasKecamatan_3.set('fieldLabels', {'ogc_fid': 'no label', 'objectid_1': 'no label', 'objectid': 'no label', 'fcode': 'no label', 'remark': 'no label', 'metadata': 'no label', 'srs_id': 'no label', 'kdbbps': 'no label', 'kdcbps': 'no label', 'kdcpum': 'no label', 'kdpbps': 'no label', 'kdpkab': 'no label', 'kdppum': 'no label', 'luaswh': 'no label', 'tipadm': 'no label', 'wadmkc': 'no label', 'wadmkk': 'no label', 'wadmpr': 'no label', 'wiadkd': 'no label', 'shape_leng': 'no label', 'shape_le_1': 'no label', 'shape_area': 'no label', 'namobj': 'no label', });
lyr_BatasKecamatan_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});

var layerSwitcher = new ol.control.LayerSwitcher({
    tipLabel: 'Legenda',
    collapsed: false,          // ⬅ selalu terbuka
    groupSelectStyle: 'children'
});

map.addControl(layerSwitcher);
