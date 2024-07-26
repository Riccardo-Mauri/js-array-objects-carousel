//array di oggetti cioè le immagini con relativi titoli e descizione
const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];
//creo una variabile globale che utilizzerò per inserire le immagini
let items = '';
//creo un ciclo per prendermi le immagini con titolo e descizione E inserirle poi nel HTML
for (let i = 0; i < images.length; i++) {
    if (i === 0) {
        items += `<li class="carousel-slide active">`;
    } else {
        items += `<li class="carousel-slide">`;
    }
    items += `
        <img src="${images[i].image}" alt="${images[i].title}">
        <div class="carousel-caption">
            <h3>${images[i].title}</h3>
            <p>${images[i].text}</p>
        </div>
    </li>`;
    //salvo in console per vedere 
    console.log('items', items, typeof items);
};
