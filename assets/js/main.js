"use strict";


/* global mobile breakpoint */
var screenBreakpoint = '990';




/* insert before / after helper classes */
function insertBefore(el, referenceNode) {
    referenceNode.parentNode.insertBefore(el, referenceNode);
}
function insertAfter(el, referenceNode) {
    referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
}



/* add / remove desktop / mobile ids/classes depending on screen resolution */
function addRemoveVieportId() {
    let windowWidth = window.innerWidth;
    
    const viewport = document.getElementsByClassName('av-viewport');


    if(windowWidth <= screenBreakpoint) {

        viewport[0].classList.add('av-viewport-mobile');
        viewport[0].classList.remove('av-viewport-desktop');

    } else {

        viewport[0].classList.add('av-viewport-desktop');
        viewport[0].classList.remove('av-viewport-mobile');

    }

}
addRemoveVieportId();
window.addEventListener('resize', addRemoveVieportId);




/* Submenu Dropdown */
function submenuDropdown() {

    const navListItem = document.querySelectorAll('.av-menu-wrapper .av-main-menu > li a');


    for (let i = 0; i < navListItem.length; i++) {

        /* get the parent list item -> li */
        let parentListItem = navListItem[i].parentNode;

        navListItem[i].addEventListener('mouseenter', function(){

            if (parentListItem.querySelector('.sub-menu') != null) {

                parentListItem.querySelector('.sub-menu').classList.add('active');

            }

        });

        /* hide the submenus on mouse leave */
        parentListItem.addEventListener('mouseleave', function(){

            if (parentListItem.querySelector('.sub-menu') != null) {

                parentListItem.querySelector('.sub-menu').classList.remove('active');

            }

        });
        
    }

}
submenuDropdown();




/* Mobile Menu Overlay */
function mainMenuOverlay() {
    
	const mobileMainMenuTrigger = document.getElementById('av-menu-trigger-mobile');
	const mobileMainMenuClose = document.getElementById('av-menu-close');

	mobileMainMenuTrigger.addEventListener('click', function(e) {
		e.preventDefault();
		document.getElementById('av-canvas-overlay-menu').classList.toggle('display-overlay');

		//document.html.setAttribute('style', 'height: 100%; overflow: hidden');
		//document.body.setAttribute('style', 'height: 100%; overflow: hidden');

		//document.body.style('height: 100%; overflow: hidden');

		//html, body {margin: 0; height: 100%; overflow: hidden}

		window.addEventListener('scroll', noScroll);
	})

	mobileMainMenuClose.addEventListener('click', function(e) {
		e.preventDefault();
		document.getElementById('av-canvas-overlay-menu').classList.remove('display-overlay');
		window.removeEventListener('scroll', noScroll);
	})

	window.onkeyup = function(e) {
		if (e.keyCode == 27) {
			document.getElementById('av-canvas-overlay-menu').classList.remove('display-overlay');
			window.removeEventListener('scroll', noScroll);
		}
	}

}
mainMenuOverlay();



/* Portfolio Hover Effect */
function portfolioHover() {
	const portfolioItem = document.querySelectorAll('.av-portfolio-block');
	
	for(let i=0; i < portfolioItem.length; i++) {

		portfolioItem[i].addEventListener('mouseenter', function() {

			portfolioItem[i].classList.add('av-visible');

		});
		portfolioItem[i].addEventListener('mouseleave', function() {

			portfolioItem[i].classList.remove('av-visible');

		});
	}

}
portfolioHover();




function noScroll() {
	window.scrollTo(0, 0);
}
  
  // add listener to disable scroll
  //window.addEventListener('scroll', noScroll);
  
  // Remove listener to re-enable scroll
  //window.removeEventListener('scroll', noScroll);






/* Clone Main Menu For Responsive Version */
function cloneTopMenu() {

    const original = document.querySelector('.av-menu-wrapper nav');

	let clone = original.cloneNode(true);

    clone.id = 'av-menu-wrapper-mobile';

	let cloneAttachment = document.getElementById('av-mainmenu-mobile-wrapper').appendChild(clone);

}

cloneTopMenu();




/* Add Top Submenu Toggle Trigger */
function addMainSubMenuToggle() {

	let TopMenuParent = document.getElementById("av-menu-wrapper-mobile").querySelectorAll("li .sub-menu");


	for(let i=0; i < TopMenuParent.length; i++) { 

	 	let navArrow = document.createElement('span');
	 	navArrow.className = 'mainmenu-dropdown-arrow';

		// create an empty span in the mainmenu-dropdown-arrow span for background svg
		let arrowContent = navArrow.appendChild(document.createElement('span'));
		arrowContent.className = 'mainmenu-arrow-container';

		let lineContent = navArrow.appendChild(document.createElement('span'));
		lineContent.className = 'mainmenu-arrow-line';

	 	insertBefore(navArrow, TopMenuParent[i]);


	};

	mainMenuLine();
	window.addEventListener('resize', mainMenuLine);

}
addMainSubMenuToggle();



function portfolioTitleMobile() {

	const portfolioTitle = document.querySelectorAll('.portfolio-grid-wrapper .av-portfolio-title');

	const portfolioImgWrapper = document.querySelectorAll('.av-slide-img');
		

	for(let i=0; i < portfolioImgWrapper.length; i++) {

		if (portfolioTitle[i]) {
			let cloneTitle = portfolioTitle[i].cloneNode(true);

			let portfolioMobileTitleWrapper = document.createElement('div');
			portfolioMobileTitleWrapper.className = 'av-portfolio-title-wrapper-mobile';

			portfolioMobileTitleWrapper.appendChild(cloneTitle);
			insertAfter(portfolioMobileTitleWrapper, portfolioImgWrapper[i]);				
		}

	}

}
portfolioTitleMobile();



/* Creates A Line For Mobile Main Menu */
function mainMenuLine() {
	let mobileMenuWrapperWidth = document.getElementById("av-mainmenu-mobile-wrapper").offsetWidth;
	let mainMenuArrowLineWidth = mobileMenuWrapperWidth - 100;

	const mainMenuArrowLine = document.querySelectorAll('.mainmenu-arrow-line');

	for(let i=0; i < mainMenuArrowLine.length; i++) {
		mainMenuArrowLine[i].setAttribute("style", `width: ${mainMenuArrowLineWidth}px`);
	}

}



/* Top Mainmenu Toggle Trigger */
function toggleMainSubMenu() {

	const adiacentSubMenu = document.querySelectorAll(".mainmenu-dropdown-arrow + .sub-menu");
	const trigger = document.querySelectorAll(".mainmenu-dropdown-arrow");

	for(let i=0; i < adiacentSubMenu.length; i++) {

		trigger[i].addEventListener('click', function(e) {

		 	e.preventDefault();
			adiacentSubMenu[i].classList.toggle("sub-menu-selected");
			slideToggle(adiacentSubMenu[i], 200);
		});

	}

	for(let i=0; i < trigger.length; i++) {

		trigger[i].addEventListener('click', function(e) {
		 	e.preventDefault();

			 trigger[i].classList.toggle("mainmenu-dropdown-arrow-selected");
		});

	}

}
toggleMainSubMenu();



/* SVG Icons */
function svgIcons() {
	const icons = {
		'menu': '<svg class="svg-av-menu" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 50.8 32.7" xml:space="preserve"><g><rect x="16" width="34.8" height="3.6"/><rect x="16" y="9.7" width="34.8" height="3.6"/><polygon points="50.8,32.7 0,32.7 0,29.1 47.2,29.1 47.2,23 16,23 16,19.4 50.8,19.4"/></g></svg>',
		'arrowLeft': '<svg class="svg-arrow-left" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 77 47.3" xml:space="preserve"><g><path d="M0,23.6l47.1,23.6l0-21.6H77v-4H47.2L47.2,0L0,23.6z M43.1,40.8L8.9,23.6L43.2,6.5L43.1,40.8z"/></g></svg>',
		'arrowRight': '<svg class="svg-arrow-right" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 77 47.3" xml:space="preserve"><g><path d="M77,23.6L29.9,0l-0.1,21.6H0v4h29.9l-0.1,21.6L77,23.6z M33.9,6.5l34.2,17.2L33.8,40.8L33.9,6.5z"/></g></svg>',
		'arrowTop': '<svg class="svg-arrow-top" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 47.3 77" xml:space="preserve"><g><path d="M23.6,0L0,47.1l21.6,0V77h4V47.2l21.6,0.1L23.6,0z M6.5,43.1L23.6,8.9l17.2,34.3L6.5,43.1z"/></g></svg>',
		'arrowBottom': '<svg class="svg-arrow-bottom" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 47.3 77" xml:space="preserve"><title>Arrow Bottom</title><g><path d="M23.6,77l23.6-47.1l-21.6-0.1V0h-4v29.9L0,29.8L23.6,77z M40.8,33.9L23.6,68.1L6.5,33.8L40.8,33.9z"/></g></svg>',
		'arrowSimpleLeft': '<svg class="svg-simple-left" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 35.2 54.7" xml:space="preserve"><g><path d="M35.2,0v54.7L0,27.4L35.2,0z M31.2,46.5V8.2L6.5,27.4L31.2,46.5z"/></g></svg>',
		'arrowSimpleRight': '<svg class="svg-simple-right" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 35.2 54.7" xml:space="preserve"><g><path d="M0,54.7V0l35.2,27.4L0,54.7z M4,8.2v38.4l24.6-19.2L4,8.2z"/></g></svg>',
		'arrowSimpleTop': '<svg class="svg-simple-top" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 54.7 35.2" xml:space="preserve"><g><path d="M54.7,35.2H0L27.4,0L54.7,35.2z M8.2,31.2h38.4L27.4,6.5L8.2,31.2z"/></g></svg>',
		'arrowSimpleBottom': '<svg class="svg-simple-bottom" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 54.7 35.2" xml:space="preserve"><g><path d="M0,0h54.7L27.4,35.2L0,0z M46.5,4H8.2l19.2,24.6L46.5,4z"/></g></svg>',
		'close': '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 38.8 38.8" xml:space="preserve"><g><polygon points="38.8,2.8 36,0 19.4,16.6 2.8,0 0,2.8 16.6,19.4 0,36 2.8,38.8 19.4,22.2 36,38.8 38.8,36 22.2,19.4"/></g></svg>',
		'mouse': '<svg class="svg-av-mouse" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 55.5 70.1" xml:space="preserve"><g><path d="M27.7,70.1C16.7,70.1,7.4,63.8,4,54c-4-11.6-4-40.4-4-41.6v-1.2L19.9,0l7.9,5.9L35.6,0l19.9,11.2v1.2c0,1.2,0,30-4,41.6l0,0C48,63.8,38.7,70.1,27.7,70.1z M4,13.6C4,19.1,4.5,43,7.8,52.6c2.8,8.2,10.6,13.5,19.9,13.5s17.1-5.3,19.9-13.5l0,0 c3.3-9.7,3.8-33.6,3.8-39.1L35.9,4.8l-8.1,6.1l-8.2-6.1L4,13.6z"/><path d="M27.7,32.9c-1.1,0-2-0.9-2-2v-9c0-1.1,0.9-2,2-2s2,0.9,2,2v9C29.7,32,28.8,32.9,27.7,32.9z"/></g></svg>'		
	}

	/*
	if (document.getElementById("av-menu-trigger-mobile") !== null) {
		document.getElementById("av-menu-trigger-mobile").innerHTML = icons.menu;
	}
	*/

	if (document.getElementById("av-menu-close") !== null) {
		document.getElementById("av-menu-close").innerHTML = icons.close;
	}

	if (document.querySelector(".av-slider-prev") !== null) {
		document.querySelector(".av-slider-prev").innerHTML = icons.arrowTop;
	}

	if (document.querySelector(".av-slider-next") !== null) {
		document.querySelector(".av-slider-next").innerHTML = icons.arrowBottom;
	}

	if (document.querySelector(".av-slider-mouse-scroll") !== null) {
		document.querySelector(".av-slider-mouse-scroll").innerHTML = icons.mouse;
	}

}
svgIcons();



/* Create Main Menu Trigger Graphics */
function addMainMenuTrigger() {

	if (document.querySelector(".av-menu-symbol") !== null) {
		const mainMenuTriggerClass = document.querySelector('.av-menu-symbol');

		for (let i=0; i < 3; i++) {
			let newSpan = document.createElement('span');
			mainMenuTriggerClass.appendChild(newSpan);  
		}

	}
	
}
addMainMenuTrigger();



/* Adjust Mobile Main Menu Container Height */
function adjustHeightMainMenu() {
	//av-menu-overlay-wrapper
	const menuOverlayWrapper = document.querySelector(".av-menu-overlay-wrapper");
	let windowWidth = window.innerWidth;
	let windowHeight = window.innerHeight;
	//console.log(windowHeight);

	if (windowWidth > screenBreakpoint) {
		/* desktop */
		let menuOverlayHeight = windowHeight - 140;
		//let margins = windowHeight - (windowHeight - 200);
				
		//console.log(margins);
		
		//margin-top: ${margins}px; padding-bottom: ${margins}px;

		menuOverlayWrapper.setAttribute("style", `height: ${menuOverlayHeight}px;`);
	} else {
		/* mobile */
		if (windowWidth > 540) {
			let menuOverlayHeight = windowHeight - 220;
			menuOverlayWrapper.setAttribute("style", `height: ${menuOverlayHeight}px; margin-top: 30px; padding-bottom: 30px;`);
		} else {
			let menuOverlayHeight = windowHeight - 100;
			menuOverlayWrapper.setAttribute("style", `height: ${menuOverlayHeight}px; margin-top: 30px; padding-bottom: 30px;`);
		}
	}

	

}
adjustHeightMainMenu();
window.addEventListener('resize', adjustHeightMainMenu);



/* Adjust Slider Height */
function sliderHeightAdjustment() {

	//window.addEventListener('load', function() {
		if (document.querySelector(".av-slider-wrapper") !== null) {
			const sliderWrapper = document.querySelector(".av-slider-wrapper");
		

			let windowWidth = window.innerWidth;
			let windowHeight = window.innerHeight;
		
			if(windowWidth <= screenBreakpoint) {
				sliderWrapper.setAttribute("style", `height: calc(${windowHeight}px - 190px)`);
			} else {
				sliderWrapper.setAttribute("style", "");
			}
		}
	//});


}
sliderHeightAdjustment();
window.addEventListener('resize', sliderHeightAdjustment);



function portfolioBlockClick() {

	if (document.querySelectorAll(".av-portfolio-overlay") !== null) {
		const portfolioOverlay = document.querySelectorAll(".av-portfolio-overlay");
		const portfolioTitle = document.querySelectorAll(".av-portfolio-title a");

		for(let i=0; i < portfolioOverlay.length; i++) {
			
			portfolioOverlay[i].addEventListener("click", function(){
				window.location = portfolioTitle[i].href;
			});

		}		
	}
}
portfolioBlockClick();



/* Slide Up/Down and Toggle Functions */
{

	let slideUp = (target, duration=700) => {
		target.style.transitionProperty = 'height, margin, padding';
		target.style.transitionDuration = duration + 'ms';
		target.style.boxSizing = 'border-box';
		target.style.height = target.offsetHeight + 'px';
		target.offsetHeight;
		target.style.overflow = 'hidden';
		target.style.height = 0;
		target.style.paddingTop = 0;
		target.style.paddingBottom = 0;
		target.style.marginTop = 0;
		target.style.marginBottom = 0;
		window.setTimeout( () => {
			target.style.display = 'none';
			target.style.removeProperty('height');
			target.style.removeProperty('padding-top');
			target.style.removeProperty('padding-bottom');
			target.style.removeProperty('margin-top');
			target.style.removeProperty('margin-bottom');
			target.style.removeProperty('overflow');
			target.style.removeProperty('transition-duration');
			target.style.removeProperty('transition-property');
		}, duration);
	}


	let slideDown = (target, duration=700) => {
		target.style.removeProperty('display');
		let display = window.getComputedStyle(target).display;

		if (display === 'none') {
			display = 'block';

			target.style.display = display;
			let height = target.offsetHeight;
			target.style.overflow = 'hidden';
			target.style.height = 0;
			target.style.paddingTop = 0;
			target.style.paddingBottom = 0;
			target.style.marginTop = 0;
			target.style.marginBottom = 0;
			target.offsetHeight;
			target.style.boxSizing = 'border-box';
			target.style.transitionProperty = "height, margin, padding";
			target.style.transitionDuration = duration + 'ms';
			target.style.height = height + 'px';
			target.style.removeProperty('padding-top');
			target.style.removeProperty('padding-bottom');
			target.style.removeProperty('margin-top');
			target.style.removeProperty('margin-bottom');
			window.setTimeout( () => {
				target.style.removeProperty('height');
				target.style.removeProperty('overflow');
				target.style.removeProperty('transition-duration');
				target.style.removeProperty('transition-property');
			}, duration);
		
		}
	}
	var slideToggle = (target, duration = 500) => {
		if (window.getComputedStyle(target).display === 'none') {
			return slideDown(target, duration);
		} else {
			return slideUp(target, duration);
		}
	}

}



function formItemSelect() {
	
	const formItem = document.querySelectorAll('.av-form-item');

	for(let i=0; i < formItem.length; i++) {

		formItem[i].addEventListener('focus', function(){
			formItem[i].parentNode.classList.add('av-input-selected');
		});

		formItem[i].addEventListener('focusout', function(){
			if (!formItem[i].value) {
				formItem[i].parentNode.classList.remove('av-input-selected');
			}
		});

	}


}
formItemSelect();