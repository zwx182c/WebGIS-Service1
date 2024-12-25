import L from 'leaflet';

export function initMap() {
  // Initialize the map centered on China
  const map = L.map('map', {
    center: [35.86166, 104.195397],
    zoom: 5
  });

  // Add default OpenStreetMap layer
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(map);

  return map;
}