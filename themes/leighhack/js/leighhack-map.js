
// Initialize and add the map
function initMap() {
	
	// The location of leighhack
	var leighhack = {lat: 53.493037, lng:-2.493562};
	
	// The map, centered at leighhack
  var map = new google.maps.Map(
			document.getElementById('map'), {
				zoom: 17, 
				disableDefaultUI: true,
				center: leighhack,
				styles:
				[{
					featureType: "poi.business",
					elementType: "labels",
					stylers:
					[{
						visibility: "off"
					}]
				}]
			}
			);		
	
	// The marker, positioned at leighhack
	var hackmarker = {
		url: "/map-icon.svg",
		anchor: new google.maps.Point(25,50),
		scaledSize: new google.maps.Size(32,32)
	}
	
	var marker = new google.maps.Marker({
		position: leighhack, 
		map: map,
		icon: hackmarker
	});

// 	var styles = {
// 		default: null,
// 		hidden: [
// 			{
// 				featureType: 'poi.business',
// 				stylers: [{visibility: 'off'}]
// 			},
// 			{
// 				featureType: 'transit',
// 				elementType: 'labels.icon',
// 				stylers: [{visibility: 'off'}]
// 			}
// 		]
// 	};

// map.setOptions({ styles: ['hidden'] });

}
