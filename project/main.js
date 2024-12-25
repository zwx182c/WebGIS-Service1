import './style.css';
import { initMap } from './map/mapInit.js';
import { setupLayerControls } from './controls/layerControls.js';
import { setupMapControls } from './controls/mapControls.js';
import { setupClickHandler } from './handlers/clickHandler.js';
import { setupMinimapControl } from './controls/minimapControl.js';

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Initialize the map
  const map = initMap();

  // Setup controls and handlers
  const layers = setupLayerControls(map);
  setupMapControls(map);
  setupClickHandler(map);
  setupMinimapControl(map, layers.osm);
});