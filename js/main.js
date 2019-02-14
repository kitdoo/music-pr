$(document).ready(function() {




	//Вызов слайдера

	$("#track-slider").owlCarousel({
		singleItem: true,
		navigation: true,
		theme: "track-slider-theme",
		navigationText : ["",""],
		slideSpeed: 600
	});

	//slide2id - плавная прокрутка по ссылкам внутри страницы
	$("nav a,a[href='#top'],a[rel='m_PageScroll2id'],a.PageScroll2id").mPageScroll2id({
	    highlightSelector:"nav a"
	});


		// jQuery Validate JS
	$("#contact-form").validate({
		rules: {
			name: { required: true },
			email: { required: true, email: true },
			// skype:  { required: true },
			// phone:  { required: true },
			message: { required: true }
		},

		messages: {
			name: "Пожалуйста, введите свое имя",
			email: {
				required: "Пожалуйста, введите свой email",
				email: "Email адрес должен быть в формате name@domain.com . Возможно вы ввели email с ошибкой."
			},
			message: "Пожалуйста, введите текст сообщения"
		},
		    submitHandler: function(form) {
            ajaxFormSubmit();
        }
	
  })

	    function ajaxFormSubmit() {
        var string = $("#contact-form").serialize();
        
        $.ajax( {
            type: "POST",
            url: "php/mail.php",
            data: string,
            success: function(html) {
                $("#contact-form").slideUp(800);
                $('#answer').html(html);
            }
        });
        
        return false;
    }
	
});