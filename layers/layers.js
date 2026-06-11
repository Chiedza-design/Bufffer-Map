var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_CHEGUTUROADKMLCHEGUTU_ROAD_SHAPEFILE_2 = new ol.format.GeoJSON();
var features_CHEGUTUROADKMLCHEGUTU_ROAD_SHAPEFILE_2 = format_CHEGUTUROADKMLCHEGUTU_ROAD_SHAPEFILE_2.readFeatures(json_CHEGUTUROADKMLCHEGUTU_ROAD_SHAPEFILE_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CHEGUTUROADKMLCHEGUTU_ROAD_SHAPEFILE_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CHEGUTUROADKMLCHEGUTU_ROAD_SHAPEFILE_2.addFeatures(features_CHEGUTUROADKMLCHEGUTU_ROAD_SHAPEFILE_2);
var lyr_CHEGUTUROADKMLCHEGUTU_ROAD_SHAPEFILE_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CHEGUTUROADKMLCHEGUTU_ROAD_SHAPEFILE_2, 
                style: style_CHEGUTUROADKMLCHEGUTU_ROAD_SHAPEFILE_2,
                popuplayertitle: 'CHEGUTU ROAD KML - CHEGUTU_ROAD_SHAPEFILE',
                interactive: true,
                title: '<img src="styles/legend/CHEGUTUROADKMLCHEGUTU_ROAD_SHAPEFILE_2.png" /> CHEGUTU ROAD KML - CHEGUTU_ROAD_SHAPEFILE'
            });
var format_CHINHOYIBOUNDARY_3 = new ol.format.GeoJSON();
var features_CHINHOYIBOUNDARY_3 = format_CHINHOYIBOUNDARY_3.readFeatures(json_CHINHOYIBOUNDARY_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CHINHOYIBOUNDARY_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CHINHOYIBOUNDARY_3.addFeatures(features_CHINHOYIBOUNDARY_3);
var lyr_CHINHOYIBOUNDARY_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CHINHOYIBOUNDARY_3, 
                style: style_CHINHOYIBOUNDARY_3,
                popuplayertitle: 'CHINHOYI BOUNDARY',
                interactive: true,
                title: '<img src="styles/legend/CHINHOYIBOUNDARY_3.png" /> CHINHOYI BOUNDARY'
            });
var format_SETTLEMENTS_4 = new ol.format.GeoJSON();
var features_SETTLEMENTS_4 = format_SETTLEMENTS_4.readFeatures(json_SETTLEMENTS_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SETTLEMENTS_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SETTLEMENTS_4.addFeatures(features_SETTLEMENTS_4);
var lyr_SETTLEMENTS_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SETTLEMENTS_4, 
                style: style_SETTLEMENTS_4,
                popuplayertitle: 'SETTLEMENTS',
                interactive: true,
                title: '<img src="styles/legend/SETTLEMENTS_4.png" /> SETTLEMENTS'
            });
var format_WATERWAYS_5 = new ol.format.GeoJSON();
var features_WATERWAYS_5 = format_WATERWAYS_5.readFeatures(json_WATERWAYS_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WATERWAYS_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WATERWAYS_5.addFeatures(features_WATERWAYS_5);
var lyr_WATERWAYS_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WATERWAYS_5, 
                style: style_WATERWAYS_5,
                popuplayertitle: 'WATERWAYS',
                interactive: true,
                title: '<img src="styles/legend/WATERWAYS_5.png" /> WATERWAYS'
            });
var format_WATER_6 = new ol.format.GeoJSON();
var features_WATER_6 = format_WATER_6.readFeatures(json_WATER_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WATER_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WATER_6.addFeatures(features_WATER_6);
var lyr_WATER_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WATER_6, 
                style: style_WATER_6,
                popuplayertitle: 'WATER',
                interactive: true,
                title: '<img src="styles/legend/WATER_6.png" /> WATER'
            });
var format_BUFFER_AREA_7 = new ol.format.GeoJSON();
var features_BUFFER_AREA_7 = format_BUFFER_AREA_7.readFeatures(json_BUFFER_AREA_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BUFFER_AREA_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BUFFER_AREA_7.addFeatures(features_BUFFER_AREA_7);
var lyr_BUFFER_AREA_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BUFFER_AREA_7, 
                style: style_BUFFER_AREA_7,
                popuplayertitle: 'BUFFER_AREA',
                interactive: true,
                title: '<img src="styles/legend/BUFFER_AREA_7.png" /> BUFFER_AREA'
            });
var format_RAILWAYLINE_8 = new ol.format.GeoJSON();
var features_RAILWAYLINE_8 = format_RAILWAYLINE_8.readFeatures(json_RAILWAYLINE_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RAILWAYLINE_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RAILWAYLINE_8.addFeatures(features_RAILWAYLINE_8);
var lyr_RAILWAYLINE_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RAILWAYLINE_8, 
                style: style_RAILWAYLINE_8,
                popuplayertitle: 'RAILWAY LINE',
                interactive: true,
                title: '<img src="styles/legend/RAILWAYLINE_8.png" /> RAILWAY LINE'
            });
var format_SMALL_ROADS_9 = new ol.format.GeoJSON();
var features_SMALL_ROADS_9 = format_SMALL_ROADS_9.readFeatures(json_SMALL_ROADS_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SMALL_ROADS_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SMALL_ROADS_9.addFeatures(features_SMALL_ROADS_9);
var lyr_SMALL_ROADS_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SMALL_ROADS_9, 
                style: style_SMALL_ROADS_9,
                popuplayertitle: 'SMALL_ROADS',
                interactive: true,
                title: '<img src="styles/legend/SMALL_ROADS_9.png" /> SMALL_ROADS'
            });
var format_ROADS_10 = new ol.format.GeoJSON();
var features_ROADS_10 = format_ROADS_10.readFeatures(json_ROADS_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ROADS_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ROADS_10.addFeatures(features_ROADS_10);
var lyr_ROADS_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ROADS_10, 
                style: style_ROADS_10,
                popuplayertitle: 'ROADS',
                interactive: true,
    title: 'ROADS<br />\
    <img src="styles/legend/ROADS_10_0.png" /> construction<br />\
    <img src="styles/legend/ROADS_10_1.png" /> footway<br />\
    <img src="styles/legend/ROADS_10_2.png" /> path<br />\
    <img src="styles/legend/ROADS_10_3.png" /> pedestrian<br />\
    <img src="styles/legend/ROADS_10_4.png" /> primary<br />\
    <img src="styles/legend/ROADS_10_5.png" /> residential<br />\
    <img src="styles/legend/ROADS_10_6.png" /> service<br />\
    <img src="styles/legend/ROADS_10_7.png" /> steps<br />\
    <img src="styles/legend/ROADS_10_8.png" /> tertiary<br />\
    <img src="styles/legend/ROADS_10_9.png" /> track<br />\
    <img src="styles/legend/ROADS_10_10.png" /> trunk<br />\
    <img src="styles/legend/ROADS_10_11.png" /> trunk_link<br />\
    <img src="styles/legend/ROADS_10_12.png" /> unclassified<br />\
    <img src="styles/legend/ROADS_10_13.png" /> <br />' });
var format_POWERLINES_11 = new ol.format.GeoJSON();
var features_POWERLINES_11 = format_POWERLINES_11.readFeatures(json_POWERLINES_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POWERLINES_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POWERLINES_11.addFeatures(features_POWERLINES_11);
var lyr_POWERLINES_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_POWERLINES_11, 
                style: style_POWERLINES_11,
                popuplayertitle: 'POWER LINES ',
                interactive: true,
                title: '<img src="styles/legend/POWERLINES_11.png" /> POWER LINES '
            });
var format_OPENSPACE_12 = new ol.format.GeoJSON();
var features_OPENSPACE_12 = format_OPENSPACE_12.readFeatures(json_OPENSPACE_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OPENSPACE_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OPENSPACE_12.addFeatures(features_OPENSPACE_12);
cluster_OPENSPACE_12 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_OPENSPACE_12
});
var lyr_OPENSPACE_12 = new ol.layer.Vector({
                declutter: false,
                source:cluster_OPENSPACE_12, 
                style: style_OPENSPACE_12,
                popuplayertitle: 'OPEN SPACE',
                interactive: true,
                title: '<img src="styles/legend/OPENSPACE_12.png" /> OPEN SPACE'
            });
var format_TUCKSHOP_13 = new ol.format.GeoJSON();
var features_TUCKSHOP_13 = format_TUCKSHOP_13.readFeatures(json_TUCKSHOP_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TUCKSHOP_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TUCKSHOP_13.addFeatures(features_TUCKSHOP_13);
cluster_TUCKSHOP_13 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_TUCKSHOP_13
});
var lyr_TUCKSHOP_13 = new ol.layer.Vector({
                declutter: false,
                source:cluster_TUCKSHOP_13, 
                style: style_TUCKSHOP_13,
                popuplayertitle: 'TUCKSHOP',
                interactive: true,
                title: '<img src="styles/legend/TUCKSHOP_13.png" /> TUCKSHOP'
            });
var format_SNOOKER_14 = new ol.format.GeoJSON();
var features_SNOOKER_14 = format_SNOOKER_14.readFeatures(json_SNOOKER_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SNOOKER_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SNOOKER_14.addFeatures(features_SNOOKER_14);
cluster_SNOOKER_14 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_SNOOKER_14
});
var lyr_SNOOKER_14 = new ol.layer.Vector({
                declutter: false,
                source:cluster_SNOOKER_14, 
                style: style_SNOOKER_14,
                popuplayertitle: 'SNOOKER',
                interactive: true,
                title: '<img src="styles/legend/SNOOKER_14.png" /> SNOOKER'
            });
var format_TYRES_15 = new ol.format.GeoJSON();
var features_TYRES_15 = format_TYRES_15.readFeatures(json_TYRES_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TYRES_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TYRES_15.addFeatures(features_TYRES_15);
cluster_TYRES_15 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_TYRES_15
});
var lyr_TYRES_15 = new ol.layer.Vector({
                declutter: false,
                source:cluster_TYRES_15, 
                style: style_TYRES_15,
                popuplayertitle: 'TYRES',
                interactive: true,
                title: '<img src="styles/legend/TYRES_15.png" /> TYRES'
            });
var format_WELDING_16 = new ol.format.GeoJSON();
var features_WELDING_16 = format_WELDING_16.readFeatures(json_WELDING_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WELDING_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WELDING_16.addFeatures(features_WELDING_16);
var lyr_WELDING_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WELDING_16, 
                style: style_WELDING_16,
                popuplayertitle: 'WELDING',
                interactive: true,
                title: '<img src="styles/legend/WELDING_16.png" /> WELDING'
            });
var format_CABIN_17 = new ol.format.GeoJSON();
var features_CABIN_17 = format_CABIN_17.readFeatures(json_CABIN_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CABIN_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CABIN_17.addFeatures(features_CABIN_17);
cluster_CABIN_17 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_CABIN_17
});
var lyr_CABIN_17 = new ol.layer.Vector({
                declutter: false,
                source:cluster_CABIN_17, 
                style: style_CABIN_17,
                popuplayertitle: 'CABIN',
                interactive: true,
                title: '<img src="styles/legend/CABIN_17.png" /> CABIN'
            });
var format_CARWASH_18 = new ol.format.GeoJSON();
var features_CARWASH_18 = format_CARWASH_18.readFeatures(json_CARWASH_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CARWASH_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CARWASH_18.addFeatures(features_CARWASH_18);
cluster_CARWASH_18 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_CARWASH_18
});
var lyr_CARWASH_18 = new ol.layer.Vector({
                declutter: false,
                source:cluster_CARWASH_18, 
                style: style_CARWASH_18,
                popuplayertitle: 'CAR WASH',
                interactive: true,
                title: '<img src="styles/legend/CARWASH_18.png" /> CAR WASH'
            });
var format_COOKING_19 = new ol.format.GeoJSON();
var features_COOKING_19 = format_COOKING_19.readFeatures(json_COOKING_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_COOKING_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COOKING_19.addFeatures(features_COOKING_19);
cluster_COOKING_19 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_COOKING_19
});
var lyr_COOKING_19 = new ol.layer.Vector({
                declutter: false,
                source:cluster_COOKING_19, 
                style: style_COOKING_19,
                popuplayertitle: 'COOKING',
                interactive: true,
                title: '<img src="styles/legend/COOKING_19.png" /> COOKING'
            });
var format_MARKET_20 = new ol.format.GeoJSON();
var features_MARKET_20 = format_MARKET_20.readFeatures(json_MARKET_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MARKET_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MARKET_20.addFeatures(features_MARKET_20);
cluster_MARKET_20 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_MARKET_20
});
var lyr_MARKET_20 = new ol.layer.Vector({
                declutter: false,
                source:cluster_MARKET_20, 
                style: style_MARKET_20,
                popuplayertitle: 'MARKET',
                interactive: true,
                title: '<img src="styles/legend/MARKET_20.png" /> MARKET'
            });
var format_GAS_21 = new ol.format.GeoJSON();
var features_GAS_21 = format_GAS_21.readFeatures(json_GAS_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GAS_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GAS_21.addFeatures(features_GAS_21);
var lyr_GAS_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GAS_21, 
                style: style_GAS_21,
                popuplayertitle: 'GAS',
                interactive: true,
                title: '<img src="styles/legend/GAS_21.png" /> GAS'
            });
var format_BANNERS_22 = new ol.format.GeoJSON();
var features_BANNERS_22 = format_BANNERS_22.readFeatures(json_BANNERS_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BANNERS_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BANNERS_22.addFeatures(features_BANNERS_22);
cluster_BANNERS_22 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_BANNERS_22
});
var lyr_BANNERS_22 = new ol.layer.Vector({
                declutter: false,
                source:cluster_BANNERS_22, 
                style: style_BANNERS_22,
                popuplayertitle: 'BANNERS',
                interactive: true,
                title: '<img src="styles/legend/BANNERS_22.png" /> BANNERS'
            });
var format_CHINHOYICAVES_23 = new ol.format.GeoJSON();
var features_CHINHOYICAVES_23 = format_CHINHOYICAVES_23.readFeatures(json_CHINHOYICAVES_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CHINHOYICAVES_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CHINHOYICAVES_23.addFeatures(features_CHINHOYICAVES_23);
cluster_CHINHOYICAVES_23 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_CHINHOYICAVES_23
});
var lyr_CHINHOYICAVES_23 = new ol.layer.Vector({
                declutter: false,
                source:cluster_CHINHOYICAVES_23, 
                style: style_CHINHOYICAVES_23,
                popuplayertitle: 'CHINHOYI CAVES',
                interactive: true,
                title: '<img src="styles/legend/CHINHOYICAVES_23.png" /> CHINHOYI CAVES'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_CHEGUTUROADKMLCHEGUTU_ROAD_SHAPEFILE_2.setVisible(true);lyr_CHINHOYIBOUNDARY_3.setVisible(true);lyr_SETTLEMENTS_4.setVisible(true);lyr_WATERWAYS_5.setVisible(true);lyr_WATER_6.setVisible(true);lyr_BUFFER_AREA_7.setVisible(true);lyr_RAILWAYLINE_8.setVisible(true);lyr_SMALL_ROADS_9.setVisible(true);lyr_ROADS_10.setVisible(true);lyr_POWERLINES_11.setVisible(true);lyr_OPENSPACE_12.setVisible(true);lyr_TUCKSHOP_13.setVisible(true);lyr_SNOOKER_14.setVisible(true);lyr_TYRES_15.setVisible(true);lyr_WELDING_16.setVisible(true);lyr_CABIN_17.setVisible(true);lyr_CARWASH_18.setVisible(true);lyr_COOKING_19.setVisible(true);lyr_MARKET_20.setVisible(true);lyr_GAS_21.setVisible(true);lyr_BANNERS_22.setVisible(true);lyr_CHINHOYICAVES_23.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_OSMStandard_1,lyr_CHEGUTUROADKMLCHEGUTU_ROAD_SHAPEFILE_2,lyr_CHINHOYIBOUNDARY_3,lyr_SETTLEMENTS_4,lyr_WATERWAYS_5,lyr_WATER_6,lyr_BUFFER_AREA_7,lyr_RAILWAYLINE_8,lyr_SMALL_ROADS_9,lyr_ROADS_10,lyr_POWERLINES_11,lyr_OPENSPACE_12,lyr_TUCKSHOP_13,lyr_SNOOKER_14,lyr_TYRES_15,lyr_WELDING_16,lyr_CABIN_17,lyr_CARWASH_18,lyr_COOKING_19,lyr_MARKET_20,lyr_GAS_21,lyr_BANNERS_22,lyr_CHINHOYICAVES_23];
lyr_CHEGUTUROADKMLCHEGUTU_ROAD_SHAPEFILE_2.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'stand_no': 'stand_no', });
lyr_CHINHOYIBOUNDARY_3.set('fieldAliases', {'id': 'id', });
lyr_SETTLEMENTS_4.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'type': 'type', });
lyr_WATERWAYS_5.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'width': 'width', 'name': 'name', });
lyr_WATER_6.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', });
lyr_BUFFER_AREA_7.set('fieldAliases', {'id': 'id', 'USE': 'USE', 'NAME': 'NAME', 'ID_1': 'ID_1', 'Chinhoyi_P': 'Chinhoyi_P', 'Chinhoyi_1': 'Chinhoyi_1', 'Chinhoyi_2': 'Chinhoyi_2', 'Chinhoyi_3': 'Chinhoyi_3', 'Chinhoyi_4': 'Chinhoyi_4', 'Chinhoyi_5': 'Chinhoyi_5', 'Chinhoyi_6': 'Chinhoyi_6', 'Chinhoyi_7': 'Chinhoyi_7', 'Chinhoyi_8': 'Chinhoyi_8', 'Chinhoyi_9': 'Chinhoyi_9', 'Chinhoyi10': 'Chinhoyi10', 'Chinhoyi11': 'Chinhoyi11', 'Chinhoyi12': 'Chinhoyi12', 'Chinhoyi13': 'Chinhoyi13', 'Chinhoyi14': 'Chinhoyi14', 'kobo EXCEL': 'kobo EXCEL', 'kobo EXC_1': 'kobo EXC_1', 'kobo EXC_2': 'kobo EXC_2', 'kobo EXC_3': 'kobo EXC_3', 'kobo EXC_4': 'kobo EXC_4', 'kobo EXC_5': 'kobo EXC_5', 'kobo EXC_6': 'kobo EXC_6', 'kobo EXC_7': 'kobo EXC_7', 'kobo EXC_8': 'kobo EXC_8', 'kobo EXC_9': 'kobo EXC_9', 'kobo EXC10': 'kobo EXC10', 'kobo EXC11': 'kobo EXC11', 'kobo EXC12': 'kobo EXC12', 'kobo EXC13': 'kobo EXC13', 'Area_sqm': 'Area_sqm', });
lyr_RAILWAYLINE_8.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', });
lyr_SMALL_ROADS_9.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'smoothness': 'smoothness', 'ford': 'ford', 'tracktype': 'tracktype', 'covered': 'covered', 'constructi': 'constructi', 'layer': 'layer', 'bridge': 'bridge', 'ref': 'ref', 'old_ref': 'old_ref', 'service': 'service', 'maxspeed': 'maxspeed', 'lanes': 'lanes', 'oneway': 'oneway', 'surface': 'surface', 'name': 'name', });
lyr_ROADS_10.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'smoothness': 'smoothness', 'ford': 'ford', 'tracktype': 'tracktype', 'covered': 'covered', 'constructi': 'constructi', 'layer': 'layer', 'bridge': 'bridge', 'ref': 'ref', 'old_ref': 'old_ref', 'service': 'service', 'maxspeed': 'maxspeed', 'lanes': 'lanes', 'oneway': 'oneway', 'surface': 'surface', 'name': 'name', });
lyr_POWERLINES_11.set('fieldAliases', {'id': 'id', 'Type': 'Type', 'name': 'name', 'ID_1': 'ID_1', 'Chinhoyi_P': 'Chinhoyi_P', 'Chinhoyi_1': 'Chinhoyi_1', 'Chinhoyi_2': 'Chinhoyi_2', 'Chinhoyi_3': 'Chinhoyi_3', 'Chinhoyi_4': 'Chinhoyi_4', 'Chinhoyi_5': 'Chinhoyi_5', 'Chinhoyi_6': 'Chinhoyi_6', 'Chinhoyi_7': 'Chinhoyi_7', 'Chinhoyi_8': 'Chinhoyi_8', 'Chinhoyi_9': 'Chinhoyi_9', 'Chinhoyi10': 'Chinhoyi10', 'Chinhoyi11': 'Chinhoyi11', 'Chinhoyi12': 'Chinhoyi12', 'Chinhoyi13': 'Chinhoyi13', 'Chinhoyi14': 'Chinhoyi14', });
lyr_OPENSPACE_12.set('fieldAliases', {'id': 'id', 'ID_1': 'ID_1', });
lyr_TUCKSHOP_13.set('fieldAliases', {'id': 'id', 'ID_1': 'ID_1', });
lyr_SNOOKER_14.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'ID_1': 'ID_1', });
lyr_TYRES_15.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'ID_1': 'ID_1', });
lyr_WELDING_16.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'ID_1': 'ID_1', });
lyr_CABIN_17.set('fieldAliases', {'id': 'id', 'Cabin': 'Cabin', 'ID_1': 'ID_1', });
lyr_CARWASH_18.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'ID_1': 'ID_1', });
lyr_COOKING_19.set('fieldAliases', {'id': 'id', 'Cooking': 'Cooking', 'ID_1': 'ID_1', });
lyr_MARKET_20.set('fieldAliases', {'id': 'id', 'Market': 'Market', 'ID_1': 'ID_1', });
lyr_GAS_21.set('fieldAliases', {'id': 'id', 'ID_1': 'ID_1', });
lyr_BANNERS_22.set('fieldAliases', {'id': 'id', 'ID_1': 'ID_1', });
lyr_CHINHOYICAVES_23.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', });
lyr_CHEGUTUROADKMLCHEGUTU_ROAD_SHAPEFILE_2.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'stand_no': 'TextEdit', });
lyr_CHINHOYIBOUNDARY_3.set('fieldImages', {'id': 'TextEdit', });
lyr_SETTLEMENTS_4.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', });
lyr_WATERWAYS_5.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'width': 'Range', 'name': 'TextEdit', });
lyr_WATER_6.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', });
lyr_BUFFER_AREA_7.set('fieldImages', {'id': 'TextEdit', 'USE': 'TextEdit', 'NAME': 'TextEdit', 'ID_1': 'TextEdit', 'Chinhoyi_P': 'TextEdit', 'Chinhoyi_1': 'TextEdit', 'Chinhoyi_2': 'TextEdit', 'Chinhoyi_3': 'TextEdit', 'Chinhoyi_4': 'TextEdit', 'Chinhoyi_5': 'TextEdit', 'Chinhoyi_6': 'TextEdit', 'Chinhoyi_7': 'TextEdit', 'Chinhoyi_8': 'TextEdit', 'Chinhoyi_9': 'TextEdit', 'Chinhoyi10': 'TextEdit', 'Chinhoyi11': 'TextEdit', 'Chinhoyi12': 'TextEdit', 'Chinhoyi13': 'TextEdit', 'Chinhoyi14': 'TextEdit', 'kobo EXCEL': 'TextEdit', 'kobo EXC_1': 'TextEdit', 'kobo EXC_2': 'TextEdit', 'kobo EXC_3': 'TextEdit', 'kobo EXC_4': 'TextEdit', 'kobo EXC_5': 'TextEdit', 'kobo EXC_6': 'TextEdit', 'kobo EXC_7': 'TextEdit', 'kobo EXC_8': 'TextEdit', 'kobo EXC_9': 'TextEdit', 'kobo EXC10': 'TextEdit', 'kobo EXC11': 'TextEdit', 'kobo EXC12': 'TextEdit', 'kobo EXC13': 'TextEdit', 'Area_sqm': 'TextEdit', });
lyr_RAILWAYLINE_8.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'tunnel': 'TextEdit', });
lyr_SMALL_ROADS_9.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'smoothness': 'TextEdit', 'ford': 'TextEdit', 'tracktype': 'TextEdit', 'covered': 'TextEdit', 'constructi': 'TextEdit', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'ref': 'TextEdit', 'old_ref': 'TextEdit', 'service': 'TextEdit', 'maxspeed': 'TextEdit', 'lanes': 'TextEdit', 'oneway': 'TextEdit', 'surface': 'TextEdit', 'name': 'TextEdit', });
lyr_ROADS_10.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'smoothness': 'TextEdit', 'ford': 'TextEdit', 'tracktype': 'TextEdit', 'covered': 'TextEdit', 'constructi': 'TextEdit', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'ref': 'TextEdit', 'old_ref': 'TextEdit', 'service': 'TextEdit', 'maxspeed': 'TextEdit', 'lanes': 'TextEdit', 'oneway': 'TextEdit', 'surface': 'TextEdit', 'name': 'TextEdit', });
lyr_POWERLINES_11.set('fieldImages', {'id': 'TextEdit', 'Type': 'TextEdit', 'name': 'TextEdit', 'ID_1': 'TextEdit', 'Chinhoyi_P': 'TextEdit', 'Chinhoyi_1': 'TextEdit', 'Chinhoyi_2': 'TextEdit', 'Chinhoyi_3': 'TextEdit', 'Chinhoyi_4': 'TextEdit', 'Chinhoyi_5': 'TextEdit', 'Chinhoyi_6': 'TextEdit', 'Chinhoyi_7': 'CheckBox', 'Chinhoyi_8': 'TextEdit', 'Chinhoyi_9': 'CheckBox', 'Chinhoyi10': 'TextEdit', 'Chinhoyi11': 'TextEdit', 'Chinhoyi12': 'TextEdit', 'Chinhoyi13': 'TextEdit', 'Chinhoyi14': 'TextEdit', });
lyr_OPENSPACE_12.set('fieldImages', {'id': 'TextEdit', 'ID_1': 'TextEdit', });
lyr_TUCKSHOP_13.set('fieldImages', {'id': 'TextEdit', 'ID_1': 'TextEdit', });
lyr_SNOOKER_14.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'ID_1': 'TextEdit', });
lyr_TYRES_15.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'ID_1': 'TextEdit', });
lyr_WELDING_16.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'ID_1': 'TextEdit', });
lyr_CABIN_17.set('fieldImages', {'id': 'TextEdit', 'Cabin': 'TextEdit', 'ID_1': 'TextEdit', });
lyr_CARWASH_18.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'ID_1': 'TextEdit', });
lyr_COOKING_19.set('fieldImages', {'id': 'TextEdit', 'Cooking': 'TextEdit', 'ID_1': 'TextEdit', });
lyr_MARKET_20.set('fieldImages', {'id': 'TextEdit', 'Market': 'TextEdit', 'ID_1': 'TextEdit', });
lyr_GAS_21.set('fieldImages', {'id': 'TextEdit', 'ID_1': 'TextEdit', });
lyr_BANNERS_22.set('fieldImages', {'id': 'TextEdit', 'ID_1': 'TextEdit', });
lyr_CHINHOYICAVES_23.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', });
lyr_CHEGUTUROADKMLCHEGUTU_ROAD_SHAPEFILE_2.set('fieldLabels', {'id': 'inline label - visible with data', 'Name': 'inline label - visible with data', 'descriptio': 'inline label - visible with data', 'timestamp': 'inline label - visible with data', 'begin': 'inline label - visible with data', 'end': 'inline label - visible with data', 'altitudeMo': 'inline label - visible with data', 'tessellate': 'inline label - visible with data', 'extrude': 'inline label - visible with data', 'visibility': 'inline label - visible with data', 'drawOrder': 'inline label - visible with data', 'icon': 'inline label - visible with data', 'stand_no': 'inline label - visible with data', });
lyr_CHINHOYIBOUNDARY_3.set('fieldLabels', {'id': 'inline label - visible with data', });
lyr_SETTLEMENTS_4.set('fieldLabels', {'osm_id': 'inline label - visible with data', 'code': 'inline label - visible with data', 'fclass': 'inline label - visible with data', 'name': 'inline label - visible with data', 'type': 'inline label - visible with data', });
lyr_WATERWAYS_5.set('fieldLabels', {'osm_id': 'inline label - visible with data', 'code': 'inline label - visible with data', 'fclass': 'inline label - visible with data', 'width': 'inline label - visible with data', 'name': 'inline label - visible with data', });
lyr_WATER_6.set('fieldLabels', {'osm_id': 'inline label - visible with data', 'code': 'inline label - visible with data', 'fclass': 'inline label - visible with data', 'name': 'inline label - visible with data', });
lyr_BUFFER_AREA_7.set('fieldLabels', {'id': 'inline label - visible with data', 'USE': 'inline label - visible with data', 'NAME': 'inline label - visible with data', 'ID_1': 'inline label - visible with data', 'Chinhoyi_P': 'inline label - visible with data', 'Chinhoyi_1': 'inline label - visible with data', 'Chinhoyi_2': 'inline label - visible with data', 'Chinhoyi_3': 'inline label - visible with data', 'Chinhoyi_4': 'inline label - visible with data', 'Chinhoyi_5': 'inline label - visible with data', 'Chinhoyi_6': 'inline label - visible with data', 'Chinhoyi_7': 'inline label - visible with data', 'Chinhoyi_8': 'inline label - visible with data', 'Chinhoyi_9': 'inline label - visible with data', 'Chinhoyi10': 'inline label - visible with data', 'Chinhoyi11': 'inline label - visible with data', 'Chinhoyi12': 'inline label - visible with data', 'Chinhoyi13': 'inline label - visible with data', 'Chinhoyi14': 'inline label - visible with data', 'kobo EXCEL': 'inline label - visible with data', 'kobo EXC_1': 'inline label - visible with data', 'kobo EXC_2': 'inline label - visible with data', 'kobo EXC_3': 'inline label - visible with data', 'kobo EXC_4': 'inline label - visible with data', 'kobo EXC_5': 'inline label - visible with data', 'kobo EXC_6': 'inline label - visible with data', 'kobo EXC_7': 'inline label - visible with data', 'kobo EXC_8': 'inline label - visible with data', 'kobo EXC_9': 'inline label - visible with data', 'kobo EXC10': 'inline label - visible with data', 'kobo EXC11': 'inline label - visible with data', 'kobo EXC12': 'inline label - visible with data', 'kobo EXC13': 'inline label - visible with data', 'Area_sqm': 'inline label - visible with data', });
lyr_RAILWAYLINE_8.set('fieldLabels', {'osm_id': 'inline label - visible with data', 'code': 'inline label - visible with data', 'fclass': 'inline label - visible with data', 'name': 'inline label - visible with data', 'layer': 'inline label - visible with data', 'bridge': 'inline label - visible with data', 'tunnel': 'inline label - visible with data', });
lyr_SMALL_ROADS_9.set('fieldLabels', {'full_id': 'inline label - visible with data', 'osm_id': 'inline label - visible with data', 'osm_type': 'inline label - visible with data', 'highway': 'inline label - visible with data', 'smoothness': 'inline label - visible with data', 'ford': 'inline label - visible with data', 'tracktype': 'inline label - visible with data', 'covered': 'inline label - visible with data', 'constructi': 'inline label - visible with data', 'layer': 'inline label - visible with data', 'bridge': 'inline label - visible with data', 'ref': 'inline label - visible with data', 'old_ref': 'inline label - visible with data', 'service': 'inline label - visible with data', 'maxspeed': 'inline label - visible with data', 'lanes': 'inline label - visible with data', 'oneway': 'inline label - visible with data', 'surface': 'inline label - visible with data', 'name': 'inline label - visible with data', });
lyr_ROADS_10.set('fieldLabels', {'full_id': 'inline label - visible with data', 'osm_id': 'inline label - visible with data', 'osm_type': 'inline label - visible with data', 'highway': 'inline label - visible with data', 'smoothness': 'inline label - visible with data', 'ford': 'inline label - visible with data', 'tracktype': 'inline label - visible with data', 'covered': 'inline label - visible with data', 'constructi': 'inline label - visible with data', 'layer': 'inline label - visible with data', 'bridge': 'inline label - visible with data', 'ref': 'inline label - visible with data', 'old_ref': 'inline label - visible with data', 'service': 'inline label - visible with data', 'maxspeed': 'inline label - visible with data', 'lanes': 'inline label - visible with data', 'oneway': 'inline label - visible with data', 'surface': 'inline label - visible with data', 'name': 'inline label - visible with data', });
lyr_POWERLINES_11.set('fieldLabels', {'id': 'inline label - visible with data', 'Type': 'inline label - visible with data', 'name': 'inline label - visible with data', 'ID_1': 'inline label - visible with data', 'Chinhoyi_P': 'inline label - visible with data', 'Chinhoyi_1': 'inline label - visible with data', 'Chinhoyi_2': 'inline label - visible with data', 'Chinhoyi_3': 'inline label - visible with data', 'Chinhoyi_4': 'inline label - visible with data', 'Chinhoyi_5': 'inline label - visible with data', 'Chinhoyi_6': 'inline label - visible with data', 'Chinhoyi_7': 'inline label - visible with data', 'Chinhoyi_8': 'inline label - visible with data', 'Chinhoyi_9': 'inline label - visible with data', 'Chinhoyi10': 'inline label - visible with data', 'Chinhoyi11': 'inline label - visible with data', 'Chinhoyi12': 'inline label - visible with data', 'Chinhoyi13': 'inline label - visible with data', 'Chinhoyi14': 'inline label - visible with data', });
lyr_OPENSPACE_12.set('fieldLabels', {'id': 'inline label - visible with data', 'ID_1': 'inline label - visible with data', });
lyr_TUCKSHOP_13.set('fieldLabels', {'id': 'inline label - visible with data', 'ID_1': 'inline label - visible with data', });
lyr_SNOOKER_14.set('fieldLabels', {'id': 'inline label - visible with data', 'Name': 'inline label - visible with data', 'ID_1': 'inline label - visible with data', });
lyr_TYRES_15.set('fieldLabels', {'id': 'inline label - visible with data', 'Name': 'inline label - visible with data', 'ID_1': 'inline label - visible with data', });
lyr_WELDING_16.set('fieldLabels', {'id': 'inline label - always visible', 'Name': 'inline label - always visible', 'ID_1': 'inline label - always visible', });
lyr_CABIN_17.set('fieldLabels', {'id': 'inline label - visible with data', 'Cabin': 'inline label - visible with data', 'ID_1': 'inline label - visible with data', });
lyr_CARWASH_18.set('fieldLabels', {'id': 'inline label - visible with data', 'Name': 'inline label - visible with data', 'ID_1': 'inline label - visible with data', });
lyr_COOKING_19.set('fieldLabels', {'id': 'inline label - visible with data', 'Cooking': 'inline label - visible with data', 'ID_1': 'inline label - visible with data', });
lyr_MARKET_20.set('fieldLabels', {'id': 'inline label - visible with data', 'Market': 'inline label - visible with data', 'ID_1': 'inline label - visible with data', });
lyr_GAS_21.set('fieldLabels', {'id': 'inline label - visible with data', 'ID_1': 'inline label - visible with data', });
lyr_BANNERS_22.set('fieldLabels', {'id': 'inline label - visible with data', 'ID_1': 'inline label - visible with data', });
lyr_CHINHOYICAVES_23.set('fieldLabels', {'osm_id': 'inline label - visible with data', 'code': 'inline label - always visible', 'fclass': 'inline label - visible with data', });
lyr_CHINHOYICAVES_23.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});