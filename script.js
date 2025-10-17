// script.js

// Page Navigation & Fade-in
function showPage(pageId){
  const pages = document.querySelectorAll('.page');
  pages.forEach(p => p.classList.remove('active'));
  const activePage = document.getElementById(pageId);
  activePage.classList.add('active');
  window.scrollTo({top:0, behavior:'smooth'});
  
  if(pageId === 'home'){ animateGallery(); }
}

// Gallery scroll animation
function animateGallery() {
  const items = document.querySelectorAll('.gallery-item');
  items.forEach(item => {
    const rect = item.getBoundingClientRect();
    if(rect.top < window.innerHeight - 100){ 
      item.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', animateGallery);
window.addEventListener('load', animateGallery);