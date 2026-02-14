// Basic interactivity: mobile nav toggle and accessibility enhancements
document.addEventListener('DOMContentLoaded', function(){
  const navToggle = document.getElementById('navToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  if(navToggle && mobileMenu){
    navToggle.addEventListener('click', function(){
      const expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', String(!expanded));
      mobileMenu.classList.toggle('hidden');
    });
  }

  // Smoothly focus first element of mobile menu when opened
  if(navToggle && mobileMenu){
    navToggle.addEventListener('click', () => {
      const firstLink = mobileMenu.querySelector('a');
      if(firstLink && !mobileMenu.classList.contains('hidden')){
        firstLink.focus();
      }
    });
  }

  // Add keyboard support for escape to close lightbox if present
  document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape'){
      const lightbox = document.getElementById('lightbox');
      if(lightbox && !lightbox.classList.contains('hidden')){
        lightbox.classList.add('hidden');
        lightbox.setAttribute('aria-hidden', 'true');
      }
    }
  });

});