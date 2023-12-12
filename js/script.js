$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		dots:true,
		slidesToShow:6, // КОл-во слайдов
		autoplay:true, // авто проигрывание тоже ВАУ не догадаться
		speed:500, //скорость кнопки
		autoplaySpeed:2000, // скорость авто прокрутки ВАУ
		infinitive:true, //бесконечный слайдер
		dragoble:true, //передвежение мышкой, если офнуть на телефонах будет работать
		swipe:true, //тоже самое что и выше тока для мобил
		touchmove:false, //нельзя двигать слайды но если свайпнуть он перелиснется
		touchThreshold:6, // длина свайпа для некст картинки
		waitForAnimate:false, //не ждем анимацию слайда


		responsive:[ // это для разрешений экранов P.s а хули еще ночью делать (с)Я
			{
				breakpoint: 768,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:1
				}
			}
		]
	});
});
/**/
var slideIndex = [1,1];
var slideId = ["mySlides1", "mySlides2"]
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}