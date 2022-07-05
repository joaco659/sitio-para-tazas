


/* Menu responsive */
// Elementos
const menuLogo = document.querySelector('.symbol');
const deco = document.querySelector('.deco');
const socialMedia = document.querySelector('.social-media');

// Desplegar menu
menuLogo.addEventListener('click', () => {
	menuLogo.classList.toggle('listed');
	deco.classList.toggle('active');
	socialMedia.classList.toggle('active');
});


/* Carrusel */
// Fotos
const carouselPics = [
	'./Assets/img/j_cup1.png',
	'./Assets/img/j_cup2.png',
	'./Assets/img/j_cup3.png'
];

const carouselPic = document.querySelector('.carousel-pics');

// Contenido de las fotos
const picContent = {
	'headings': [
		"Mono-Classic Cup",
		"Classic Cup",
		"Dark-o-Cup"
	],

	'info': [
		`La clasica taza de J, pero remodelada,
		mas monocromatica y moderna que nunca.`,

		`La clasica taza de J, para los que
	    le gusta lo clasico.`,

		`Una taza de J Back-end, pero color oscuro,
		ideal para aquellos que programan en el lado del server.`
	],

	'pricing': [
		"125$",
		"90$",
		"110$"
	]
}

// Botones
const leftBtn = document.querySelector('.left-button');
const rightBtn = document.querySelector('.right-button');

// Indicadores
const indicatorsPics = [
	'./Assets/blue-indicator-ring20.png',
	'./Assets/indicator-ring20.png',
	'./Assets/indicator-ring20.png'
];

const indicators = document.querySelector('.carousel-indicators');

// Contenido
const productTitle = document.querySelector('.product-title');
const productInfo = document.querySelector('.product-info');
const productPrice = document.querySelector('.price-ongreen');

// Contenido default
document.addEventListener('DOMContentLoaded', () => {
	productTitle.textContent = picContent.headings[0];
	productInfo.textContent = picContent.info[0];
	productPrice.textContent = picContent.pricing[0];
});

// Sistema de carrusel
// Foto actual
let actualPic = 0;

// Sig. foto
const nextPic = () => {
	if (actualPic >= carouselPics.length - 1) {
		actualPic = 0;
	} else {
		actualPic++;
	}
	renderPic();
};

// Foto previa
const prevPic = () => {
	if (actualPic <= 0) {
		actualPic = carouselPics.length - 1;
	} else {
		actualPic--;
	}
	renderPic();
};

// Renderizar foto
const renderPic = () => {
	carouselPic.style.backgroundImage = `url(${carouselPics[actualPic]})`;
	renderContent();
	indicatePic();
};

// Renderizar contenido
const renderContent = () => {
	productTitle.textContent = picContent.headings[actualPic];
	productInfo.textContent = picContent.info[actualPic];
	productPrice.textContent = picContent.pricing[actualPic];
};

// Indicar foto
const indicatePic = () => {
	switch (actualPic) {
		case 0:
			indicators.children[0].style.backgroundImage = `url(${indicatorsPics[0]})`;
			indicators.children[1].style.backgroundImage = `url(${indicatorsPics[1]})`;
			indicators.children[2].style.backgroundImage = `url(${indicatorsPics[2]})`;
			break;
		case 1:
			indicators.children[0].style.backgroundImage = `url(${indicatorsPics[1]})`;
			indicators.children[1].style.backgroundImage = `url(${indicatorsPics[0]})`;
			indicators.children[2].style.backgroundImage = `url(${indicatorsPics[2]})`;
			break;
		case 2:
			indicators.children[0].style.backgroundImage = `url(${indicatorsPics[1]})`;
			indicators.children[1].style.backgroundImage = `url(${indicatorsPics[2]})`;
			indicators.children[2].style.backgroundImage = `url(${indicatorsPics[0]})`;
			break;
	}
};

// Funcion de botones
leftBtn.addEventListener('click', () => {
	prevPic();
});


rightBtn.addEventListener('click', () => {
	nextPic();
});

// Foto default
document.addEventListener('DOMContentLoaded', () => {
	carouselPic.style.backgroundImage = `url(${carouselPics[actualPic]})`;
	indicators.children[0].style.backgroundImage = `url(${indicatorsPics[actualPic]})`;

	indicators.children[1].style.backgroundImage = `url(${indicatorsPics[1]})`;
	indicators.children[2].style.backgroundImage = `url(${indicatorsPics[2]})`;
});

// Fotos pasando solas
const carouselInterval = setInterval(() => {
	nextPic();
}, 8000);
