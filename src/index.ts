const card = document.querySelector('.flip-card')!;

document.querySelectorAll('.flip-the-card').forEach( (el) => {
  el.onclick = () => {
    card.classList.toggle('flipped');
  };
});

// swipe 

let startX = 0;
const threshold = 50;
let startTime;


// touch
/*
document.addEventListener('touchstart', (e) => {
  startX = e.changedTouches[0].clientX;
}, { passive: true });

document.addEventListener('touchend', (e: MouseEvent) => {
  const diffX = e.changedTouches[0].clientX;

  if(Math.abs(diffX) > threshold){
    card.classList.toggle('flipped');
  }
}, { passive: true });
*/

// mouse
let isDragging = false
document.addEventListener('mousedown', e => {
  startX = e.clientX;
  isDragging = true;
});

document.addEventListener('mousemove', e => {
  if(!isDragging) return;
});

document.addEventListener('mouseup', e => {
  if(!isDragging) return;
  isDragging = false;

  const diffX = e.clientX - startX;

  if(Math.abs(diffX) > threshold){
    card.classList.toggle('flipped');
  }
});

document.addEventListener('mouseleave', () => {
  isDragging = false;
})