// go top button
const gotop = document.querySelector('.top');
gotop.onclick = function () {
  window.scrollTo(0, 0)
}



// home slider
const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  // direction: 'vertical',
  loop: true,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  
});

// multi nav control

const multiNav = document.querySelectorAll('.multinav-expend');
const multiNavList = document.querySelector('.multi-nav ul');
const multiNavButton = document.querySelectorAll('.multi-nav ul li');

let index = 0;

multiNavButton.forEach((el, idx) => {
  el.addEventListener('mouseenter', () => {
    multiNav[index].classList.add('hidden');
    index = idx;
    multiNav[idx].classList.remove('hidden');
  })

  // multiNav[idx].addEventListener('scroll', e => {
  //   e.stopPropagation();
  // })
})

multiNavList.addEventListener('mouseleave', () => {
  multiNav.forEach(el => {
    el.classList.add('hidden')
  })
});


