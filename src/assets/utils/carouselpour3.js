const slideShow = document.getElementById('animal-carousel');
const precedent = document.querySelector('[aria-label="Précédent');
const suivant = document.querySelector('[aria-label="Suivant');

let i = 0;

const carouselPics = document.querySelectorAll('.carousel-img');
carouselPics[0].classList.toggle('hidden');
carouselPics[1].classList.toggle('hidden');
carouselPics[2].classList.toggle('hidden');

suivant.addEventListener('click', function () {
  const carouselPics = document.querySelectorAll('.carousel-img');
  if (i < carouselPics.length - 3) {
    carouselPics[i].classList.toggle('hidden');
    carouselPics[i+3].classList.toggle('hidden');
    i++;   
  };
});

precedent.addEventListener('click', function () {
  const carouselPics = document.querySelectorAll('.carousel-img');
  if (i > 0) {
    carouselPics[i+2].classList.toggle('hidden');
    carouselPics[i-1].classList.toggle('hidden');
    console.log(i);
    i--;   
  };  
});