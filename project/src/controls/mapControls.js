import L from 'leaflet';

export function setupMapControls(map) {
  // Add scale control
  L.control.scale({
    imperial: false,
    metric: true
  }).addTo(map);

  // Add zoom control
  L.control.zoom({
    position: 'bottomright'
  }).addTo(map);

  // Add north arrow
  const northArrow = L.control({position: "topright"});
  northArrow.onAdd = function() {
    const div = L.DomUtil.create("div", "north-arrow");
    div.innerHTML = '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAQnSURBVGiB7ZlNiBxFFMd/1T0zO7tf2SRrNn4kiGIEFQ9BBUHEQ8SLiIgYRBAP8SJ4ELwIXgQPHjwIXjwYUAQPQQ8ieBBBPAiKGBGNUdSsZneT3SS7O7vZ3fns7p6ul0N3T1V1V/f0zC6ZhPjgoaa66tX/X69eveo3AyNlhGEzHXDdqQn03jc0YXJ2cmjC5OxkMGhj/SYgIqgqJR0n0kE6/QZQVQSIWwqqEe3/OwGNfrqhHxIRqKqICJoQICKdjshQXEhVSSQS+L6PquJ5XvRORFBVXNdFRPB9H8dxcF0Xx3GwLAvP8xARbNvGsqyOGOiKQBAEmKaJZVmYponv+4gIhmFgGAaO4+B5HoZhYFkWSilM08Q0TWzbxrZtDMPA931UlSAIsCwLEYkI9kygE1ERcc/zCIIA27aJx+M4joNhGBiGQRAEBEGAUgrTNDEMA9/3sW0bpRSe5+H7PqZpopTC8zxEBNM0+yMgIriuSxAEWJaFbdsopQiCAKUUrusSBAGe5+G6LrZtY9s2QRBgWRae5+H7PkopXNfFMAx838e27egKxGIxPM/rjwsppcJwGV5i13XDMNkRAoZhEAQBQRBgWVbkKmEgCIIgCp9KKZRSkSv1RUBVicViWJYVxe7wEsdisWguKKVwXTcKo0qp6N2mI6CqxGIxTNOM5kHYhzHfMAx838dxnGjehCQ2FYHwKoQ3Pxz4cE6ICL7vR/E/DMG2bUcD3xcBEcF13WgAwykexvvw5juOg+/7KKWiAQ9TZhhF+hZGwxwnjOuu60bRRkSiVBk+h2Nw0wSUUgRBgOd5UY4Pk0+YTjcaDKXUpiMQpsPwfZgOwyy02SQGRCRKj2HqVEqtIbFRF1oXgTDPK6UwDCMiEA7ARoOw0TG4LgKhz4cEwnA5IgAgEfnNdKF1EQhT44jACL0QGBEYETCWv/7+xWELbQl6MeAHAVprVhZXWFlaYfnuMvOz8yxcX2Dh2gK3rt1i4cYCK0sr+L6P1hqlFOKIYBhGNFm7JbAuF9p77hFe3H6cO7/f4eL5i1w5f4UbV25w89ebLC0usbqyius4BGJw+PRhnnvvOZ597Vn2PbqPR/Y/wq59u0jEE7RaLZqNJo1Gg3qtTq1ao1qtUq1UqdVq1Kt16vU6zUaTZrNJvV7n8/c+Z+byDM8fPcpTLz/FgScPsG3XNuLJOMlUkkQy0f0cEBFiiRiJZIJUJkUylSSZTpJMJ0mlU6QyKTLZDNlclmwuSzaXJZPNkMlmSGfTpDNp0tk0qUyKZDpJIpkgnoyTSCaIJ+LEYjEcx6HVbNFutmm32jRbTRr1BtVKlVqlRrVapVKuUClXKJfKlEtlSqUS5VKZcrlMtVJl9sosFy9dZO/BvTx+6HH2H9rPrn27yG/Nk8vnSGfTJFNJYvEYlmVFEzq8dV2F0b8vXhsRGGYCfwHCn6Ya9oFAiAAAAABJRU5ErkJggg==" style="width: 30px; height: 30px;">';
    return div;
  };
  northArrow.addTo(map);
}