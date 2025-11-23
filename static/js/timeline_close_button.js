// --- Timeline Close Button Logic ---
document.addEventListener('DOMContentLoaded', () => {
  const closeButtons = document.querySelectorAll('.js-close-timeline-element');
  
  closeButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      // Prevent the click from bubbling up to the main accordion toggle
      event.stopPropagation();
      
      // Find the parent accordion element
      const accordionItem = button.closest('.hs-accordion');
      if (accordionItem && accordionItem.classList.contains('active')) {
        // Programmatically click the main toggle button to safely close the accordion
        // using Preline's own logic.
        const toggle = accordionItem.querySelector('.hs-accordion-toggle');
        if (toggle) {
          toggle.click();
        }
      }
    });
  });
});