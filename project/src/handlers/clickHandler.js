import L from 'leaflet';
import { reverseGeocode } from '../services/geocoding.js';

export function setupClickHandler(map) {
  map.on('click', async function(e) {
    const { lat, lng } = e.latlng;
    
    try {
      const address = await reverseGeocode(lat, lng);
      
      const popupContent = `
        <div class="popup-content">
          <h3>位置详情</h3>
          <p><strong>纬度：</strong> ${lat.toFixed(6)}°N</p>
          <p><strong>经度：</strong> ${lng.toFixed(6)}°E</p>
          <p><strong>地址：</strong> ${address}</p>
        </div>
      `;

      L.popup()
        .setLatLng(e.latlng)
        .setContent(popupContent)
        .openOn(map);
        
    } catch (error) {
      console.error('Error getting location info:', error);
    }
  });
}