console.log('hello world');

/*
- Lo rendiamo dinamico
    - rimuoviamo il markup statico e inseriamo le immagini attraverso l'array
    - Nascondiamo tutte le immagini tranne la prima che avrà una classe specifica 'active'
*/

const slides = [
    '01.webp',
    '02.webp',
    '03.webp',
    '04.webp',
    '05.webp',
];

//console.log(slides);

let activeImage = 0;

//console.log(activeImage);

const slidesElement = document.querySelector('.slides')

//console.log(slidesElement);

for (let i = 0; i < slides.length; i++) {
    const slide = slides[i];
    console.log(slide);

    let slideMarkUp = `<img src="./assets/img/${slide}" alt="" class="${i === activeImage ? 'active' : ''}">`
    console.log(slideMarkUp);

    slidesElement.innerHTML += slideMarkUp
}

console.log(document.querySelector('.prev'));

document.querySelector('.prev').addEventListener('click', function () {
    activeImage--

    if (activeImage < 0) {
        activeImage = slides.length - 1;
    }

    const currentImage = document.querySelector('img.active')
    console.log(currentImage);

    currentImage.classList.remove('active')
    console.log(currentImage);

    const allSlides = document.querySelectorAll('img')
    console.log(allSlides);

    allSlides[activeImage].classList.add('active')

})

console.log(document.querySelector('.next'));

document.querySelector('.next').addEventListener('click', function () {
    activeImage++
    //console.log(activeImage);
    console.log(activeImage > slides.length - 1);

    if (activeImage > slides.length - 1) {
        activeImage = 0
    }

    const currentImage = document.querySelector('img.active')
    console.log(currentImage);

    currentImage.classList.remove('active')
    console.log(currentImage);

    const allSlides = document.querySelectorAll('img')
    console.log(allSlides);

    allSlides[activeImage].classList.add('active')


})

/*
BONUS 2:
Aggiungere la visualizzazione di tutte le thumbnails sulla destra dell’immagine grande attiva, come nello screenshot proposto. Tutte le miniature avranno un layer di opacità scura, tranne quella corrispondente all’immagine attiva, che invece avrà un bordo colorato. Al click delle frecce, oltre al cambio di immagine attiva, gestire il cambio di miniatura attiva.
*/

for (let i = 0; i < slides.length; i++) {
    const slide = slides[i];
    console.log(slide);

    let borderMarkUp = `<div class="rectangle ${i === activeImage ? 'select' : ''}">
    <img src="./assets/img/${slide}" alt=""> 
    </div>`
    console.log(borderMarkUp);

    document.querySelector('.thumbnails').innerHTML += borderMarkUp

}

document.querySelector('.prev').addEventListener('click', function () {
    activeImage-
    console.log(activeImage);

    if (activeImage < 0) {
        activeImage = slides.length - 1;
    }

    const selectImage = document.querySelector('div.select')
    console.log(selectImage);

    selectImage.classList.remove('select')
    console.log(selectImage);

    const allRectangle = document.querySelectorAll('.rectangle')
    console.log(allRectangle);

    allRectangle[activeImage].classList.add('select')

})

document.querySelector('.next').addEventListener('click', function () {
    activeImage+
    console.log(activeImage);

    if (activeImage > slides.length - 1) {
        activeImage = 0;
    }

    
    const selectImage = document.querySelector('div.select')
    //console.log(selectImage);

    selectImage.classList.remove('select')
    //console.log(selectImage);

    const allRectangle = document.querySelectorAll('.rectangle')
    //console.log(allRectangle);

    allRectangle[activeImage].classList.add('select')

})