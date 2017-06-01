//VERTICAL ACCO
$(document).ready(function(){
	$('.ourteam__name').on('click',function(e){
		e.preventDefault();

		var item = $(this).closest('.ourteam__item');
		var personBlock = item.find('.ourteam__person');
		var otherPerson = item.siblings();
		var  otherPersonInf = otherPerson.find('.ourteam__person');

		if (item.hasClass('ourteam__item_active')) {
			personBlock.slideUp();
			item.removeClass('ourteam__item_active');
		} else {
			item.addClass('ourteam__item_active');
			personBlock.slideDown();
			otherPersonInf.slideUp();
			otherPerson.removeClass('ourteam__item_active')
		}
	})


	var slider = $('.burger-slider').slick({
		prevArrow: $(".burger-slider__btn_prev"),
  		nextArrow: $(".burger-slider__btn_next"),
	});

})


//HORIZONTAL ACCO
$(function () { 
	$('.menu__trigger').on('click',function(e){
		e.preventDefault();

		var item = $(this).closest('.menu__item');
		var personBlock = item.find('.menu__content');
		var reqWidth = personBlock.outerWidth();
		var otherPerson = item.siblings();
		var  otherPersonInf = otherPerson.find('.menu__content');

		if (item.hasClass('menu__item_active')) {
			personBlock.animate({'width': '0'});
			item.removeClass('menu__item_active');
		} else {
			item.addClass('menu__item_active');
			personBlock.animate({'width': '540'});
			otherPersonInf.animate({'width': '0'});
			otherPerson.removeClass('menu__item_active')
		}
	})
	$(document).on('click', function(e) {
		var $this = $(e.target);
		if(!$this.closest('.menu__list').length) {
			$('.menu__content').animate({'width':'0'});
			$('.menu__item').removeClass('menu__item_active');
		}

	})
});

//input mask
$(function () {
	$('.phone-mask').inputmask('+7 (999) 999 99 99');
});


//fancybox
$(function () {
	$('.review__view').fancybox({
		type: 'inline',
		maxWidth : 460,
		fitToView : false,
		padding : 0
	});
	
	$('.full-review__close').on('click', function(e){
	    e.preventDefault();
		$.fancybox.close();
	});
});

//form submit
$(function () {
	$('#order-form').on('submit',function(e){
		e.preventDefault();
		var 
			form = $(this),
			formData = form.serialize();
		console.log(formData)
		$.ajax({
			url:'mail.php',
			type: 'GET',
			data:formData,
			success: function(data){
				
			}
		})
	})
})