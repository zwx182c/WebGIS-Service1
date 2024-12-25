import axios from 'axios';

export async function reverseGeocode(lat, lng) {
  try {
    const response = await axios.get(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=18&addressdetails=1`);
    return response.data.display_name;
  } catch (error) {
    console.error('Geocoding error:', error);
    return '无法获取地址信息';
  }
}