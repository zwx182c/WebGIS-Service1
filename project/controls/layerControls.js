import L from 'leaflet';

const layers = {
  osm: L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }),
  satellite: L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles © Esri'
  }),
  terrain: L.tileLayer('https://tiles.stadiamaps.com/tiles/stamen_terrain/{z}/{x}/{y}.jpg', {
    attribution: '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://www.stamen.com/" target="_blank">Stamen Design</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }),
  streets: L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
  })
};

export function setupLayerControls(map) {
  // Set initial layer
  layers.osm.addTo(map);

  // Setup collapsible control
  const controlToggle = document.getElementById('control-toggle');
  const controlContent = document.querySelector('.control-content');

  controlToggle.addEventListener('click', () => {
    controlToggle.classList.toggle('collapsed');
    controlContent.classList.toggle('expanded');
  });

  // Add event listeners for layer switching
  document.querySelectorAll('input[name="baseLayer"]').forEach(input => {
    input.addEventListener('change', (e) => {
      // Remove all layers
      Object.values(layers).forEach(layer => map.removeLayer(layer));
      
      // Add selected layer
      layers[e.target.id].addTo(map);
    });
  });

  return layers;
}