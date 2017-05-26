(function() {
	var display = $('.maincontent');
	var sections =$('.section');
	var inScroll = false;

	var performTransition = function(sectEq){
		if (inScroll) return;
		inScroll = true;
		var position = (sectEq * -100) + '%';

		sections.eq(sectEq).addClass('active')
			.siblings().removeClass('active')

		display.css({
			'transform':'translate(0,'+ position + ')'
		})

		setTimeout(function(){
			inScroll = false
			$('.fixed-menu__item').eq(sectEq).addClass('fixed-menu__item_active')
					.siblings().removeClass('fixed-menu__item_active');
		}, 1300)
	}

	$('.wrapper').on('wheel',function(e){
		var activeSection = sections.filter('.active');
		var nextSection = activeSection.next();
		var prevSection = activeSection.prev();
		if (e.originalEvent.deltaY > 0 && nextSection.length){//скролл вниз
			performTransition(nextSection.index())
		}
		if (e.originalEvent.deltaY < 0 && prevSection.length){//скролл вверх
			performTransition(prevSection.index())
		}
	})

	$('.nav__link, .fixed-menu__link, .down, .link__order').on('click', function(e){
		e.preventDefault();
		var href = parseInt($(this).attr('href'));
		performTransition(href)
	})

	$(document).on('keydown', function(e){
		var activeSection = sections.filter('.active');
		var nextSection = activeSection.next();
		var prevSection = activeSection.prev();
		switch (e.keyCode){
			case 40:
				if (nextSection.length){//скролл вниз
					performTransition(nextSection.index())
				}
			case 38:
				if (prevSection.length){//скролл вверх
				performTransition(prevSection.index())
			}
		}
	})

	

}())