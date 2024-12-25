import L from 'leaflet';
import 'leaflet-minimap'; // Import the MiniMap plugin

export function setupMinimapControl(map, baseLayer) {
  // Create a new map instance for the minimap
  const osmLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  });

  const miniMap = new L.Control.MiniMap(osmLayer, {
    toggleDisplay: true,
    minimized: false,
    position: 'bottomright',
    width: 150,
    height: 150,
    collapsedWidth: 25,
    collapsedHeight: 25,
    zoomLevelOffset: -5,
    zoomAnimation: true,
    aimingRectOptions: {
      color: '#1a73e8',
      weight: 1,
      fillColor: '#1a73e8',
      fillOpacity: 0.2,
    },
    shadowRectOptions: {
      color: '#1a73e8',
      weight: 1,
      fillColor: '#1a73e8',
      fillOpacity: 0.1,
      opacity: 0.25,
    }
  });

  miniMap.addTo(map);
  return miniMap;
}