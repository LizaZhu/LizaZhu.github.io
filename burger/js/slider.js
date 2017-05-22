$(document).ready(function(){
	$('.ourteam__name').on('click',function(e){
		e.preventDefault();

		var item = $(this).closest('.ourteam__item');
		var personBlock = item.find('.ourteam__person');
		var reqHeight = personBlock.outerHeight();
		var otherPerson = item.siblings();
		var  otherPersonInf = otherPerson.find('.ourteam__person');

		if (item.hasClass('ourteam__name_active')) {
			personBlock.css('display', 'none');
			item.removeClass('ourteam__name_active');
		} else {
			item.addClass('ourteam__name_active');
			personBlock.('display', 'block');
			otherPersonInf.css('display', 'none');
			otherPerson.removeClass('ourteam__name_active')
		}
	})
})