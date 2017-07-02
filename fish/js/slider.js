document.getElementById('slider-left').onclick = sliderLeft;
document.getElementById('slider-right').onclick = sliderRight;

var left = 0;
var slider = document.getElementById('slider');

function sliderLeft(){
	left += 303;
	if (left > 0){
		left = -1212
	}
	slider.style.left = left + 'px';
}


function sliderRight(){
	left -= 303;
	if (left < -1212){
		left = 0;
	};
	slider.style.left = left + 'px';
}