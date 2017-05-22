$(document).ready(function(){
	$('.ourteam__name').on('click',function(e){
		e.preventDefault();

		var item = $(this).closest('.ourteam__item');
		var personBlock = item.find('.ourteam__person');
		var otherPerson = item.siblings();
		var  otherPersonInf = otherPerson.find('.ourteam__person');

		if (item.hasClass('ourteam__item_active')) {
			personBlock.css('display', 'none');
			item.removeClass('ourteam__item_active');
		} else {
			item.addClass('ourteam__item_active');
			personBlock.css('display', 'block');
			otherPersonInf.css('display', 'none');
			otherPerson.removeClass('ourteam__item_active')
		}
	})

	$('.menu__trigger').on('click',function(e){
		e.preventDefault();

		var item = $(this).closest('.menu__item');
		var personBlock = item.find('.menu__content');
		var reqWidth = personBlock.outerWidth();
		var otherPerson = item.siblings();
		var  otherPersonInf = otherPerson.find('.menu__content');

		if (item.hasClass('menu__item_active')) {
			personBlock.css('width', 0);
			item.removeClass('menu__item_active');
		} else {
			item.addClass('menu__item_active');
			personBlock.css('width', '540px');
			otherPersonInf.css('width', 0);
			otherPerson.removeClass('menu__item_active')
		}
	})
})