document.onload = function(){
  document.querySelectorAll('.flip-the-card').forEach(element => {
    element.addEventListener('click', e => {
      console.log('clicked')
      document.querySelector('.flip-card')?.classList.toggle('flipped');
    });
  });
}