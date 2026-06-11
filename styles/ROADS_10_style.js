var size = 0;
var placement = 'point';
function categories_ROADS_10(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'construction':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(232,40,74,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'footway':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(119,233,176,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'path':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(177,200,93,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'pedestrian':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(222,91,100,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'primary':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,14,0,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 3.268}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'residential':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(193,125,230,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'service':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(144,239,93,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'steps':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(15,143,212,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'tertiary':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(134,134,134,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'track':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(235,110,38,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'trunk':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(237,117,175,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'trunk_link':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(224,69,211,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'unclassified':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(124,99,207,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
default:
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(52,84,211,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_ROADS_10 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("highway");
    var labelFont = "13.0px \'Open Sans\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'line';
    if (feature.get("name") !== null) {
        labelText = String(feature.get("name"));
    }
    
    var style = categories_ROADS_10(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
