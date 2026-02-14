// Simple lightbox implementation used by gallery.html
document.addEventListener('DOMContentLoaded', function(){
  const items = document.querySelectorAll('.gallery-item');
  const lightbox = document.getElementById('lightbox');
  const lbImage = document.getElementById('lbImage');
  const lbClose = document.getElementById('lbClose');

  if(!items || !lightbox) return;

  items.forEach(btn => {
    btn.addEventListener('click', function(){
      const src = this.getAttribute('data-src');
      lbImage.src = src;
      lbImage.alt = this.querySelector('img')?.alt || 'Gallery image';
      lightbox.classList.remove('hidden');
      lightbox.setAttribute('aria-hidden','false');
      // trap focus on close button
      lbClose.focus();
    });
  });

  lbClose.addEventListener('click', function(){
    lightbox.classList.add('hidden');
    lightbox.setAttribute('aria-hidden','true');
  });

  // click outside the image to close
  lightbox.addEventListener('click', function(e){
    if(e.target === lightbox || e.target.classList.contains('modal-backdrop')){
      lightbox.classList.add('hidden');
      lightbox.setAttribute('aria-hidden','true');
    }
  });
});