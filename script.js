// Import Bootstrap JS (CSS is imported in style.scss to ensure proper override order)
import * as bootstrap from 'bootstrap';

// Import Font Awesome
import '@fortawesome/fontawesome-free/css/all.min.css';

// Import Chartist
import * as Chartist from 'chartist';
import 'chartist/dist/index.css';

// Modern vanilla JavaScript - no jQuery required!

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function () {
    // Initialize Bootstrap 5 tooltips
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

    // Initialize Bootstrap 5 popovers (if any exist)
    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
    const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl, {
        trigger: 'hover'
    }));

    // Personalization feature: Read base64-encoded name from URL hash
    // Usage: index.html#Sm9obg== will display "DEAR JOHN:" instead of "DEAR FRIEND:"
    const b64 = window.location.hash.substring(1);


    try {
        const name = b64.length > 0 ? atob(b64) : 'friend';
        const nameElements = document.querySelectorAll('.fill-name');
        nameElements.forEach(el => {
            el.textContent = name;
        });
    } catch (e) {
        console.error('Invalid base64 string in URL hash');
    }


    // Create statistics pie chart with Chartist
    // CUSTOMIZE: Update these percentages for your mission field
    const christianPercent = 5.8;
    const nonChristianPercent = 100 - christianPercent;

    // Check if statistics chart element exists
    const chartElement = document.querySelector('#statistics-chart');
    if (chartElement) {
        new Chartist.PieChart('#statistics-chart', {
            series: [christianPercent, nonChristianPercent]
        }, {
            donut: true,
            donutWidth: 60,
            donutSolid: true,
            startAngle: 0,
            showLabel: false
        });
    }

    // Optional: Load configuration from config.json and populate template
    // Uncomment this section if you want to use config.json for dynamic content
    /*
    fetch('./config.json')
      .then(response => response.json())
      .then(config => {
        // Apply configuration to page
        applyConfig(config);
      })
      .catch(error => {
        console.log('No config.json found - using static content');
      });
    */
});

/**
 * Apply configuration from config.json to the page
 * @param {Object} config - Configuration object
 */
function applyConfig(config) {
    // Apply theme colors if specified
    if (config.theme) {
        const root = document.documentElement;
        if (config.theme.primaryColor) {
            root.style.setProperty('--primary-color', config.theme.primaryColor);
        }
        if (config.theme.secondaryColor) {
            root.style.setProperty('--secondary-color', config.theme.secondaryColor);
        }
    }

    // You can add more dynamic content population here
    // For example:
    // - Update missionary name
    // - Update mission destination
    // - Update dates
    // - Toggle optional sections
}
