new Swiper('.image-slider', {
	direction: 'horizontal',
    loop: true,
    navigation: {
		nextE1: '.swiper-button-next',
		prevE1: '.swiper-button-prev'
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
});