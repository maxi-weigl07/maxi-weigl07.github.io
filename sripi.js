document.addEventListener('DOMContentLoaded', function() {
    const tilesContainer = document.querySelector('.tiles-container');
    const totalTiles = 20; // Gesamtzahl der Kacheln (fest im HTML definiert)
    let currentPage = 0;
    let tilesPerPage = 10;  // Standardwerte für Kacheln pro Seite
  
    // Funktion zur Berechnung von tilesPerPage basierend auf der Fensterhöhe und -breite
    function calculateTilesPerPage() {
      const windowHeight = window.innerHeight;
      const windowWidth = window.innerWidth;
  
      // Beispiel-Logik, die tilesPerPage basierend auf der Höhe und Breite anpasst
      if (windowHeight < 520) {
        tilesPerPage = 5;  // Weniger Kacheln bei kleiner Fensterhöhe (z.B. Smartphones im Portraitmodus)
      } else if (windowWidth >= 1024) {
        tilesPerPage = 9;  // Weniger Kacheln bei schmaleren Fenstern (z.B. Tablets)
      } else if (windowWidth <= 800) {
        tilesPerPage = 6;  // Etwas mehr Kacheln für mittlere Bildschirme
      } else if (windowHeight <= 730) {
        tilesPerPage = 8;  // Etwas mehr Kacheln für mittlere Bildschirme
      } else {
        tilesPerPage = 10;  // Standardanzahl auf größeren Bildschirmen
      }
  
      updateTiles();  // Kacheln basierend auf der neuen tilesPerPage-Zahl anzeigen
    }
  
    // Kacheln für die aktuelle Seite anzeigen
    function updateTiles() {
      const start = currentPage * tilesPerPage;
      const end = start + tilesPerPage;
  
      const tiles = Array.from(tilesContainer.children);
      tiles.forEach((tile, index) => {
        if (index >= start && index < end) {
          tile.style.display = 'block';  // Zeige die Kacheln an
        } else {
          tile.style.display = 'none';  // Verstecke die Kacheln
        }
      });
  
      // Buttons für die Seitensteuerung
      document.getElementById('prev').disabled = currentPage === 0;
      document.getElementById('next').disabled = (currentPage + 1) * tilesPerPage >= totalTiles;
    }
  
    // Navigations-Buttons
    document.getElementById('prev').addEventListener('click', () => {
      if (currentPage > 0) {
        currentPage--;
        updateTiles();
      }
    });
  
    document.getElementById('next').addEventListener('click', () => {
      if ((currentPage + 1) * tilesPerPage < totalTiles) {
        currentPage++;
        updateTiles();
      }
    });
  
    // Berechnung der Kachelanzahl basierend auf der Fenstergröße beim Laden der Seite
    calculateTilesPerPage();
  
    // Event Listener für Fenstergrößenänderung
    window.addEventListener('resize', calculateTilesPerPage);  // Kachelanzahl dynamisch anpassen bei Änderung der Fenstergröße
  
  });
  