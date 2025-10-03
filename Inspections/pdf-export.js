// Génère le PDF à partir des données du formulaire
// Nécessite jsPDF et optionally html2canvas pour les images
// Inclure ce script dans index.html

// Charger jsPDF dynamiquement si besoin
(function loadJsPDF() {
  if (!window.jspdf) {
    var script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js';
    script.onload = function() {
      window.jsPDF = window.jspdf.jsPDF;
    };
    document.head.appendChild(script);
  } else {
    window.jsPDF = window.jspdf.jsPDF;
  }
})();
