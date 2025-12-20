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
var format_JalanSetapak_2 = new ol.format.GeoJSON();
var features_JalanSetapak_2 = format_JalanSetapak_2.readFeatures(json_JalanSetapak_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanSetapak_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanSetapak_2.addFeatures(features_JalanSetapak_2);
var lyr_JalanSetapak_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanSetapak_2, 
                style: style_JalanSetapak_2,
                popuplayertitle: 'Jalan Setapak',
                interactive: true,
                title: '<img src="styles/legend/JalanSetapak_2.png" /> Jalan Setapak'
            });
var format_JalanLain_3 = new ol.format.GeoJSON();
var features_JalanLain_3 = format_JalanLain_3.readFeatures(json_JalanLain_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanLain_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanLain_3.addFeatures(features_JalanLain_3);
var lyr_JalanLain_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanLain_3, 
                style: style_JalanLain_3,
                popuplayertitle: 'Jalan Lain',
                interactive: true,
                title: '<img src="styles/legend/JalanLain_3.png" /> Jalan Lain'
            });
var format_JalanLokal_4 = new ol.format.GeoJSON();
var features_JalanLokal_4 = format_JalanLokal_4.readFeatures(json_JalanLokal_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanLokal_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanLokal_4.addFeatures(features_JalanLokal_4);
var lyr_JalanLokal_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanLokal_4, 
                style: style_JalanLokal_4,
                popuplayertitle: 'Jalan Lokal',
                interactive: true,
                title: '<img src="styles/legend/JalanLokal_4.png" /> Jalan Lokal'
            });
var format_JalanKolektor_5 = new ol.format.GeoJSON();
var features_JalanKolektor_5 = format_JalanKolektor_5.readFeatures(json_JalanKolektor_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanKolektor_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanKolektor_5.addFeatures(features_JalanKolektor_5);
var lyr_JalanKolektor_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanKolektor_5, 
                style: style_JalanKolektor_5,
                popuplayertitle: 'Jalan Kolektor',
                interactive: true,
                title: '<img src="styles/legend/JalanKolektor_5.png" /> Jalan Kolektor'
            });
var format_BatasKecamatan_6 = new ol.format.GeoJSON();
var features_BatasKecamatan_6 = format_BatasKecamatan_6.readFeatures(json_BatasKecamatan_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasKecamatan_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasKecamatan_6.addFeatures(features_BatasKecamatan_6);
var lyr_BatasKecamatan_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasKecamatan_6, 
                style: style_BatasKecamatan_6,
                popuplayertitle: 'Batas Kecamatan',
                interactive: false,
                title: '<img src="styles/legend/BatasKecamatan_6.png" /> Batas Kecamatan'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_JalanSetapak_2.setVisible(true);lyr_JalanLain_3.setVisible(true);lyr_JalanLokal_4.setVisible(true);lyr_JalanKolektor_5.setVisible(true);lyr_BatasKecamatan_6.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_OSMStandard_1,lyr_JalanSetapak_2,lyr_JalanLain_3,lyr_JalanLokal_4,lyr_JalanKolektor_5,lyr_BatasKecamatan_6];
lyr_JalanSetapak_2.set('fieldAliases', {'ID': 'ID', 'Kode': 'Kode', 'Nama': 'Nama', 'Catatan': 'Catatan', 'Tipe Bahan': 'Tipe Bahan', 'Kondisi': 'Kondisi', 'Fungsi': 'Fungsi', 'Lebar': 'Lebar', 'Panjang': 'Panjang', 'Pangkal X': 'Pangkal X', 'Pangkal Y': 'Pangkal Y', 'Ujung X': 'Ujung X', 'Ujung Y': 'Ujung Y', 'RW': 'RW', 'Kampung': 'Kampung', 'Kelurahan': 'Kelurahan', 'Kecamatan': 'Kecamatan', });
lyr_JalanLain_3.set('fieldAliases', {'ID': 'ID', 'Kode': 'Kode', 'Nama': 'Nama', 'Catatan': 'Catatan', 'Tipe Bahan': 'Tipe Bahan', 'Kondisi': 'Kondisi', 'Fungsi': 'Fungsi', 'Lebar': 'Lebar', 'Panjang': 'Panjang', 'Pangkal X': 'Pangkal X', 'Pangkal Y': 'Pangkal Y', 'Ujung X': 'Ujung X', 'Ujung Y': 'Ujung Y', 'RW': 'RW', 'Kampung': 'Kampung', 'Kelurahan': 'Kelurahan', 'Kecamatan': 'Kecamatan', });
lyr_JalanLokal_4.set('fieldAliases', {'ID': 'ID', 'Kode': 'Kode', 'Nama': 'Nama', 'Catatan': 'Catatan', 'Tipe Bahan': 'Tipe Bahan', 'Kondisi': 'Kondisi', 'Fungsi': 'Fungsi', 'Lebar': 'Lebar', 'Panjang': 'Panjang', 'Pangkal X': 'Pangkal X', 'Pangkal Y': 'Pangkal Y', 'Ujung X': 'Ujung X', 'Ujung Y': 'Ujung Y', 'RW': 'RW', 'Kampung': 'Kampung', 'Kelurahan': 'Kelurahan', 'Kecamatan': 'Kecamatan', });
lyr_JalanKolektor_5.set('fieldAliases', {'ID': 'ID', 'Kode': 'Kode', 'Nama': 'Nama', 'Catatan': 'Catatan', 'Tipe Bahan': 'Tipe Bahan', 'Kondisi': 'Kondisi', 'Fungsi': 'Fungsi', 'Lebar': 'Lebar', 'Panjang': 'Panjang', 'Pangkal X': 'Pangkal X', 'Pangkal Y': 'Pangkal Y', 'Ujung X': 'Ujung X', 'Ujung Y': 'Ujung Y', 'RW': 'RW', 'Kampung': 'Kampung', 'Kelurahan': 'Kelurahan', 'Kecamatan': 'Kecamatan', });
lyr_BatasKecamatan_6.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'objectid_1': 'objectid_1', 'objectid': 'objectid', 'fcode': 'fcode', 'remark': 'remark', 'metadata': 'metadata', 'srs_id': 'srs_id', 'kdbbps': 'kdbbps', 'kdcbps': 'kdcbps', 'kdcpum': 'kdcpum', 'kdpbps': 'kdpbps', 'kdpkab': 'kdpkab', 'kdppum': 'kdppum', 'luaswh': 'luaswh', 'tipadm': 'tipadm', 'wadmkc': 'wadmkc', 'wadmkk': 'wadmkk', 'wadmpr': 'wadmpr', 'wiadkd': 'wiadkd', 'shape_leng': 'shape_leng', 'shape_le_1': 'shape_le_1', 'shape_area': 'shape_area', 'namobj': 'namobj', });
lyr_JalanSetapak_2.set('fieldImages', {'ID': 'TextEdit', 'Kode': 'TextEdit', 'Nama': 'TextEdit', 'Catatan': 'TextEdit', 'Tipe Bahan': 'TextEdit', 'Kondisi': 'TextEdit', 'Fungsi': 'TextEdit', 'Lebar': 'TextEdit', 'Panjang': 'TextEdit', 'Pangkal X': 'TextEdit', 'Pangkal Y': 'TextEdit', 'Ujung X': 'TextEdit', 'Ujung Y': 'TextEdit', 'RW': 'TextEdit', 'Kampung': 'TextEdit', 'Kelurahan': 'TextEdit', 'Kecamatan': 'TextEdit', });
lyr_JalanLain_3.set('fieldImages', {'ID': 'TextEdit', 'Kode': 'TextEdit', 'Nama': 'TextEdit', 'Catatan': 'TextEdit', 'Tipe Bahan': 'TextEdit', 'Kondisi': 'TextEdit', 'Fungsi': 'TextEdit', 'Lebar': 'TextEdit', 'Panjang': 'TextEdit', 'Pangkal X': 'TextEdit', 'Pangkal Y': 'TextEdit', 'Ujung X': 'TextEdit', 'Ujung Y': 'TextEdit', 'RW': 'TextEdit', 'Kampung': 'TextEdit', 'Kelurahan': 'TextEdit', 'Kecamatan': 'TextEdit', });
lyr_JalanLokal_4.set('fieldImages', {'ID': 'TextEdit', 'Kode': 'TextEdit', 'Nama': 'TextEdit', 'Catatan': 'TextEdit', 'Tipe Bahan': 'TextEdit', 'Kondisi': 'TextEdit', 'Fungsi': 'TextEdit', 'Lebar': 'TextEdit', 'Panjang': 'TextEdit', 'Pangkal X': 'TextEdit', 'Pangkal Y': 'TextEdit', 'Ujung X': 'TextEdit', 'Ujung Y': 'TextEdit', 'RW': 'TextEdit', 'Kampung': 'TextEdit', 'Kelurahan': 'TextEdit', 'Kecamatan': 'TextEdit', });
lyr_JalanKolektor_5.set('fieldImages', {'ID': 'TextEdit', 'Kode': 'TextEdit', 'Nama': 'TextEdit', 'Catatan': 'TextEdit', 'Tipe Bahan': 'TextEdit', 'Kondisi': 'TextEdit', 'Fungsi': 'TextEdit', 'Lebar': 'TextEdit', 'Panjang': 'TextEdit', 'Pangkal X': 'TextEdit', 'Pangkal Y': 'TextEdit', 'Ujung X': 'TextEdit', 'Ujung Y': 'TextEdit', 'RW': 'TextEdit', 'Kampung': 'TextEdit', 'Kelurahan': 'TextEdit', 'Kecamatan': 'TextEdit', });
lyr_BatasKecamatan_6.set('fieldImages', {'ogc_fid': 'Range', 'objectid_1': 'TextEdit', 'objectid': 'TextEdit', 'fcode': 'TextEdit', 'remark': 'TextEdit', 'metadata': 'TextEdit', 'srs_id': 'TextEdit', 'kdbbps': 'TextEdit', 'kdcbps': 'TextEdit', 'kdcpum': 'TextEdit', 'kdpbps': 'TextEdit', 'kdpkab': 'TextEdit', 'kdppum': 'TextEdit', 'luaswh': 'TextEdit', 'tipadm': 'TextEdit', 'wadmkc': 'TextEdit', 'wadmkk': 'TextEdit', 'wadmpr': 'TextEdit', 'wiadkd': 'Range', 'shape_leng': 'TextEdit', 'shape_le_1': 'TextEdit', 'shape_area': 'TextEdit', 'namobj': 'TextEdit', });
lyr_JalanSetapak_2.set('fieldLabels', {'ID': 'inline label - always visible', 'Kode': 'inline label - always visible', 'Nama': 'inline label - always visible', 'Catatan': 'inline label - always visible', 'Tipe Bahan': 'inline label - always visible', 'Kondisi': 'inline label - always visible', 'Fungsi': 'inline label - always visible', 'Lebar': 'inline label - always visible', 'Panjang': 'inline label - always visible', 'Pangkal X': 'inline label - always visible', 'Pangkal Y': 'inline label - always visible', 'Ujung X': 'inline label - always visible', 'Ujung Y': 'inline label - always visible', 'RW': 'inline label - always visible', 'Kampung': 'inline label - always visible', 'Kelurahan': 'inline label - always visible', 'Kecamatan': 'inline label - always visible', });
lyr_JalanLain_3.set('fieldLabels', {'ID': 'inline label - always visible', 'Kode': 'inline label - always visible', 'Nama': 'inline label - always visible', 'Catatan': 'inline label - always visible', 'Tipe Bahan': 'inline label - always visible', 'Kondisi': 'inline label - always visible', 'Fungsi': 'inline label - always visible', 'Lebar': 'inline label - always visible', 'Panjang': 'inline label - always visible', 'Pangkal X': 'inline label - always visible', 'Pangkal Y': 'inline label - always visible', 'Ujung X': 'inline label - always visible', 'Ujung Y': 'inline label - always visible', 'RW': 'inline label - always visible', 'Kampung': 'inline label - always visible', 'Kelurahan': 'inline label - always visible', 'Kecamatan': 'inline label - always visible', });
lyr_JalanLokal_4.set('fieldLabels', {'ID': 'inline label - always visible', 'Kode': 'inline label - always visible', 'Nama': 'inline label - always visible', 'Catatan': 'inline label - always visible', 'Tipe Bahan': 'inline label - always visible', 'Kondisi': 'inline label - always visible', 'Fungsi': 'inline label - always visible', 'Lebar': 'inline label - always visible', 'Panjang': 'inline label - always visible', 'Pangkal X': 'inline label - always visible', 'Pangkal Y': 'inline label - always visible', 'Ujung X': 'inline label - always visible', 'Ujung Y': 'inline label - always visible', 'RW': 'inline label - always visible', 'Kampung': 'inline label - always visible', 'Kelurahan': 'inline label - always visible', 'Kecamatan': 'inline label - always visible', });
lyr_JalanKolektor_5.set('fieldLabels', {'ID': 'inline label - always visible', 'Kode': 'inline label - always visible', 'Nama': 'inline label - always visible', 'Catatan': 'inline label - always visible', 'Tipe Bahan': 'inline label - always visible', 'Kondisi': 'inline label - always visible', 'Fungsi': 'inline label - always visible', 'Lebar': 'inline label - always visible', 'Panjang': 'inline label - always visible', 'Pangkal X': 'inline label - always visible', 'Pangkal Y': 'inline label - always visible', 'Ujung X': 'inline label - always visible', 'Ujung Y': 'inline label - always visible', 'RW': 'inline label - always visible', 'Kampung': 'inline label - always visible', 'Kelurahan': 'inline label - always visible', 'Kecamatan': 'inline label - always visible', });
lyr_BatasKecamatan_6.set('fieldLabels', {'ogc_fid': 'no label', 'objectid_1': 'no label', 'objectid': 'no label', 'fcode': 'no label', 'remark': 'no label', 'metadata': 'no label', 'srs_id': 'no label', 'kdbbps': 'no label', 'kdcbps': 'no label', 'kdcpum': 'no label', 'kdpbps': 'no label', 'kdpkab': 'no label', 'kdppum': 'no label', 'luaswh': 'no label', 'tipadm': 'no label', 'wadmkc': 'no label', 'wadmkk': 'no label', 'wadmpr': 'no label', 'wiadkd': 'no label', 'shape_leng': 'no label', 'shape_le_1': 'no label', 'shape_area': 'no label', 'namobj': 'no label', });
lyr_BatasKecamatan_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});