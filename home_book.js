let videoBtn = document.querySelectorAll('.vid-btn');  
let videoSlider = document.querySelector('#video-slider');  
videoBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelector('.controls .active').classList.remove('active');
    btn.classList.add('active');
    let src = btn.getAttribute('data-src');
    videoSlider.src = src;
    videoSlider.play();
  });
});
const cards = document.querySelectorAll('.card');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let current = 0;

    function updateCards() {
      cards.forEach((card, index) => {
        card.classList.remove('active', 'previous', 'next');
        if (index === current) {
          card.classList.add('active');
        } else if (index === (current + 1) % cards.length) {
          card.classList.add('next');
        } else if (index === (current - 1 + cards.length) % cards.length) {
          card.classList.add('previous');
        }
      });
    }

    prevBtn.addEventListener('click', () => {
      current = (current - 1 + cards.length) % cards.length;
      updateCards();
    });

    nextBtn.addEventListener('click', () => {
      current = (current + 1) % cards.length;
      updateCards();
    });

    updateCards();
    var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".brand-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        450: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        991: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 5,
        },
      },
});
let currentSlide = 0;
   const slides = document.querySelectorAll('.carousel-slide');

        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.classList.toggle('active', i === index);
            });
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }

        function prevSlide() {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(currentSlide);
        }

   showSlide(currentSlide);