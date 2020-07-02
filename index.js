import 'ol/ol.css';
import {Map, View} from 'ol';
import OSM from 'ol/source/OSM';
import * as olProj from 'ol/proj';
import Feature from 'ol/Feature';
import Overlay from 'ol/Overlay';
import Point from 'ol/geom/Point';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer';
import TileJSON from 'ol/source/TileJSON';
import VectorSource from 'ol/source/Vector';
import {Icon, Style} from 'ol/style';



// importing "exports" from modules see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import




// const map = new Map({
//   target: 'map',
//   layers: [
//     new TileLayer({
//       source: new OSM()
//     }),
//   ],
//   view: new View({
//     center: olProj.fromLonLat([-1.4701, 53.3811]),
//     zoom: 1
//   })
// });


var iconFeature = new Feature({
  geometry: new Point(olProj.fromLonLat([-1.4701, 53.3811])),
});

// var iconStyle = new Style({
//   image: new Icon({
//     color: '#ffcd46',
//     crossOrigin: 'anonymous',
//     src: 'dot.png'
//   })
// });

var iconStyle = new Style({
  image: new Icon( /** @type {olx.style.IconOptions} */ ({
    anchor: [0.5, 46],
    anchorXUnits: 'fraction',
    anchorYUnits: 'pixels',
    src: 'https://openlayers.org/en/v4.6.5/examples/data/icon.png'
    
  }))
});



// making your own marker https://gis.stackexchange.com/questions/245821/designing-my-own-icon-for-use-in-openlayers-implementation

iconFeature.setStyle(iconStyle);

var vectorSource = new VectorSource({
  features: [iconFeature]
});

var markerVectorLayer = new VectorLayer({
  source: vectorSource
});

var rasterLayer = new TileLayer({
  source: new OSM()
  
});


// Adding a custom map
// var rasterLayer = new TileLayer({
//   source: new TileJSON({
//     url: 'https://a.tiles.mapbox.com/v3/aj.1x1-degrees.json',
//     crossOrigin: ''
//   })
// });

var map = new Map({
  layers: [rasterLayer, markerVectorLayer],
  target: 'map',

  view: new View({
    center: olProj.fromLonLat([-1.4701, 53.3811]),
    // center: [0,0],
    zoom: 7
  })
});



