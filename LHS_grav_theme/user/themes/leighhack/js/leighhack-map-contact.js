var layers = [new ol.layer.Tile({ source: new ol.source.OSM() })];
var layer = layers[0];
var dragPan = new ol.interaction.DragPan();
// function createStyle(src, img) {
// 	return new Style({
// 		image: new Icon({
// 			anchor: [-2.49259, 53.4929387],
// 			crossOrigin: 'anonymous',
// 			src: src,
// 			img: img,
// 			imgSize: img ? [img.width, img.height] : undefined,
// 		}),
// 	});
// }

// const iconFeature = new Feature(new Point([0, 0]));
// iconFeature.set('style', createStyle('data/icon.png', undefined));

var map = new ol.Map({
	interactions:[
	],
	controls: [
	],
	layers: layers,
	target: 'map',
	view: new ol.View({
		center: ol.proj.fromLonLat([-2.493739, 53.493150]),
		// center: [-2.49258, 53.4929384],
		zoom: 17
	}),
});

// Create markers
var markers = new ol.layer.Vector({
	source: new ol.source.Vector(),
	style: new ol.style.Style({
		image: new ol.style.Icon({
			anchor: [0.5, 1],
			scale: 0.5,
			src: '/user/themes/leighhack/images/leighhackspace-map-marker.png'
		})
	})
});
map.addLayer(markers);

// Display Hackspace
var hackspace = new ol.Feature(new ol.geom.Point(ol.proj.fromLonLat([-2.49370, 53.4931])));
markers.getSource().addFeature(hackspace);

// Greyscale the map
// var enhance = new ol.filter.Colorize({ operation: 'grayscale', value: 1 });
// layer.addFilter(enhance);

