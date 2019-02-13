$(document).ready(function() {




	//Вызов слайдера

	$("#top-slider").owlCarousel({
		singleItem: true,
		navigation: true,
		theme: "top-slider-theme",
		navigationText : ["",""],
		slideSpeed: 600
	});

	//slide2id - плавная прокрутка по ссылкам внутри страницы
	$("nav a,a[href='#top'],a[rel='m_PageScroll2id'],a.PageScroll2id").mPageScroll2id({
	    highlightSelector:"nav a"
	});

	
});