const toggleButs = document.querySelectorAll('.faq-toggle')



toggleButs.forEach(toggle => {
  toggle.addEventListener('click', ()=>{
    toggle.parentNode.classList.toggle('active');
  })
})