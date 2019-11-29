$(function () {
	$('.multiple-items').slick({
		centerMode: true,
		centerPadding: '200px',
		slidesToShow: 2,
		prevArrow: $('.prev'),
		nextArrow: $('.next'),
		responsive: [
		{
			breakpoint: 987,
			settings: {
				arrows: false,
				centerMode: true,
				centerPadding: '40px',
				slidesToShow: 1
			}
		},
	    {
			breakpoint: 768,
			settings: {
			arrows: false,
			centerMode: true,
			centerPadding: '40px',
			slidesToShow: 1
	      }
	    },
	    {
			breakpoint: 480,
			settings: {
			arrows: false,
			centerMode: true,
			centerPadding: '0',
			slidesToShow: 1
	      }
	    }
	  ]
	});
});

function show(){
	document.querySelector('.hidden-menu').classList.toggle("show");
}
var header = document.querySelector('header');
var hero = document.querySelector('.hero');

window.onscroll = function(){
	window.pageYOffset > 10 ? hero.classList.add('overlay') : hero.classList.remove('overlay');
	window.pageYOffset > 600 ? header.classList.add('sticky') : header.classList.remove('sticky');
}

let stepper = document.querySelectorAll('.stepper>li');
let stepcontent = document.querySelectorAll('.stepper-content>li');
for(let i=0; i< stepper.length; i++){
stepper[i].addEventListener('click', function(event){
	let currentActiveStep = document.querySelector('.stepper>.activestep');
	let currentActiveContent = document.querySelector('.stepper-content>.activestep');
	if( currentActiveStep != event.target){
		currentActiveStep.classList.remove('activestep');
		currentActiveContent.classList.remove('activestep');
	}
  	stepper[i].classList.add('activestep');
  	stepcontent[i].classList.add('activestep');
});
}
