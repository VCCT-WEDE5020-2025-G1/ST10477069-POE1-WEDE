// ==========================================
// INTERACTIVE MAP (Leaflet)
// ==========================================
class InteractiveMap {
  constructor(containerId, lat, lng, zoom = 13) {
    this.containerId = containerId;
    this.lat = lat;
    this.lng = lng;
    this.zoom = zoom;
    this.init();
  }

  init() {
    // Load Leaflet CSS and JS if not already loaded
    if (!document.querySelector('link[href*="leaflet"]')) {
      const leafletCSS = document.createElement('link');
      leafletCSS.rel = 'stylesheet';
      leafletCSS.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
      document.head.appendChild(leafletCSS);
    }

    // Load Leaflet JS
    if (typeof L === 'undefined') {
      const leafletJS = document.createElement('script');
      leafletJS.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
      leafletJS.onload = () => this.createMap();
      document.head.appendChild(leafletJS);
    } else {
      this.createMap();
    }
  }

  createMap() {
    // Wait for container to exist
    const container = document.getElementById(this.containerId);
    if (!container) {
      setTimeout(() => this.createMap(), 100);
      return;
    }

    // Initialize map
    this.map = L.map(this.containerId).setView([this.lat, this.lng], this.zoom);

    // Add tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);

    // Add marker
    const marker = L.marker([this.lat, this.lng]).addTo(this.map);
    
    // Add popup
    marker.bindPopup(`
      <b>Spices Mecca</b><br>
      Cape Town, South Africa<br>
      📞 +27 649201185<br>
      📧 spicesmecca@sm.com
    `).openPopup();

    // Add custom icon (optional)
    const customIcon = L.icon({
      iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34]
    });
    
    marker.setIcon(customIcon);
  }

  updateMarker(lat, lng, popupText) {
    if (this.map) {
      this.map.setView([lat, lng], this.zoom);
      if (this.marker) {
        this.marker.setLatLng([lat, lng]);
        this.marker.setPopupContent(popupText);
      }
    }
  }
}

// Initialize map when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  // Cape Town coordinates
  if (document.getElementById('map-container')) {
    window.spicesMap = new InteractiveMap('map-container', -33.9249, 18.4241, 13);
  }
});

