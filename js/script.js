//Header плашка
/*
const headerElem = document.querySelector(".header");

const callback = function (entries, observer) {
	if (entries[0].isInteresting) {
		headerElem.classList.remove('scroll')
	} else {
		headerElem.classList.add("scroll")
	}
};

const headerObserver = new IntersectionObserver(callback)
headerObserver.observe(headerElem)
*/
/*
const links = document.querySelectorAll(".menu-header__link");

links.forEach((link) => {
	link.addEventListener("mouseover", function (e) {
		if (!e.target.classList.contains("tdu")) {
			e.target.classList.add("tdu")
		}
		link.addEventListener("mouseout", function (e) {
			if (!e.target.classList.contains("lock")) {
				e.target.classList.remove("tdu")
			}
		})
	})
})
*/
//=============================HEADER==============================================================================================================================================
//бургер
const burger = document.querySelector(".actions-header__burger");
if (burger) {
	burger.addEventListener("click", function (e) {
		burger.classList.toggle("active")
		document.body.classList.toggle("scroll-lock")
		const headerNavMenu = document.querySelector(".header-nav-menu")
		headerNavMenu.classList.toggle("active")
		const navigation = document.querySelector(".navigation__items")
		if (navigation.classList.contains("active")) {
			headerNavMenu.classList.add("active")
			burger.classList.add('active')
			navigation.classList.remove("active")
		}
	})
}

//Наведение на скрытое меню

const subList = document.querySelector(".drop-menu");
const dropMenuLink = document.querySelector(".drop-menu-link");
const headerNavMenuBody = document.querySelector(".header-nav-menu__body")





if (dropMenuLink) {
	dropMenuLink.addEventListener("click", function (e) {
		subList.classList.toggle("active")
		dropMenuLink.classList.toggle("active")

	})
}



if (window.innerWidth <= 767) {
	const header_nav_menu__images_links = document.querySelector(".header-nav-menu__images-links");
	if (!header_nav_menu__images_links) {
		headerNavMenuBody.insertAdjacentHTML(
			'beforeend',
			`
					<div class="header-nav-menu__images-links">
					<a href="#" class="header-nav-menu__image-link">
					<img src="img/header/header-nav-menu/01.svg"
						alt="Ссылка на телеграм сайта 'Интернет магазина'">
				</a>
						<a href="#" class="header-nav-menu__image-link">
							<img src="img/header/header-nav-menu/02.svg"
								alt="Ссылка на ютуб сайта 'Интернет магазина'">
						</a>
					</div>
				`
		)

	}
	const navButton = document.querySelector(".navigation__button");
	if (navButton.classList.contains("btn-purple")) {
		navButton.classList.remove("btn-purple")
	}
}

const catalog = document.querySelector(".actions-header__catalog");
if (catalog) {
	catalog.addEventListener("click", function (e) {
		const navigation = document.querySelector(".navigation__items")
		navigation.classList.toggle("active")
	})
}
const navigation = document.querySelector(".navigation__items");
if (navigation) {
	if (window.innerWidth <= 767) {
		const headerBody = document.querySelector(".header__body")
		if (headerBody) {
			headerBody.prepend(navigation)
		}
	}
}

if (window.innerWidth <= 700) {
	const catalog = document.querySelector(".actions-header__catalog");
	if (catalog) {
		headerNavMenuBody.prepend(catalog)

	}
}


if (window.innerWidth <= 1152) {
	const dropMenuLinkTwo = document.querySelector(".drop-menu-link-two")
	const subListTwo = document.querySelector(".drop-menu-two")
	dropMenuLinkTwo.addEventListener("click", function (e) {
		subListTwo.classList.toggle("active")
		dropMenuLinkTwo.classList.toggle("active")
	})
}





//Меняем каталог картинку

//const catalog = document.querySelector(".actions-header__catalog");
if (catalog) {
	if (window.innerWidth <= 767 && window.innerWidth >= 700) {
		catalog.addEventListener("click", function (e) {
			const catalogImage = document.querySelector(".catalog__image img");
			const catalogImageActive = document.querySelector(".catalog__image")
			catalogImageActive.classList.toggle("active")
			if (catalogImageActive.classList.contains("active")) {
				catalogImage.removeAttribute("src");

			}

			if (!catalogImageActive.classList.contains("active")) {
				catalogImage.setAttribute("src", 'img/header/header-actions/catalog.svg')
			}


		})
	}

}
//свайпер
/*
new Swiper('.reviews__columns', {
	slidesPerView: 1,
	slidesPerGroup: 1,
	spaceBetween: 30,
	breakpoints: {
		767: {
			slidesPerView: 2,
			slidesPerGroup: 2,
		}
	},
	navigation: {
		nextEl: '.swiper-button-next ',
		prevEl: '.swiper-button-prev ',
	},
})
*/




//хедер плашка




//=====================================MAIN====================================================================================================================================
//Слайдеры


new Swiper('.slides__slider-one', {
	slidesPerView: 1,
	//slidesPerGroup: 1,
	spaceBetween: 30,

	navigation: {
		nextEl: '.swiper-button-nextious ',
		prevEl: '.swiper-button-previouss ',
	},
	pagination: {
		type: 'bullets',
		el: '.swiper-pagination',
		clickable: true,
		dynamicBullets: true,
	},

})

//======================================

new Swiper('.slides__slider-two', {
	slidesPerView: 4,
	breakpoints: {

		1600: {
			slidesPerView: 4,
		},
		1152: {
			slidesPerView: 3,
		},
		1024: {
			slidesPerView: 2,
		},
		320: {
			slidesPerView: 1,
		}
	},
	spaceBetween: 15,
	slidesPerGroup: 1,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
		dynamicBullets: true,
	},
	autoHeight: true,
	navigation: {
		prevEl: '.swiper-button-prev',
		nextEl: '.swiper-button-next',

	},
})

//Еще слайдер.. :(

let el = new Swiper(".main-slimes__columns", {
	loop: true,
	freeMode: true,
	breakpoints: {
		1152: {
			slidesPerView: 4,
		},
		767: {
			slidesPerView: 2,
		},
		479: {
			slidesPerView: 2,
			//centeredSlides: true,
		},
		320: {
			slidesPerView: 1,
			//	centeredSlides: true,
		},
	},
	speed: 5000,
	slidesPerGroup: 1,
	autoplay: {
		delay: 0,
		waitForTransition: true,
	},
	spaceBetween: 15,
})
el.addEventListener('dblclick', function (e) {
	autoplay.stop();
});
el.addEventListener('mouseover', function (e) {
	autoplay.stop();
});

el.addEventListener('mouseout', function (e) {
	tautoplay.start();
});
//При клике на колонку


const columnsInTovars = document.querySelectorAll(".main-slimes__columns");

if (columnsInTovars.length > 0) {
	for (let index = 0; index < columnsInTovars.length; index++) {
		const element = columnsInTovars[index];
		element.addEventListener("click", function (e) {
			document.querySelector(".item-main-slimes__text").classList.toggle("active");
			document.querySelector(".item-main-slimes__colvo").classList.toggle("active");
			document.querySelector(".item-main-slimes__button").classList.toggle("active");
			document.querySelector(".item-main-slimes__title").classList.toggle("active")
		})
	}
}

/*
const colvo = document.querySelector(".item-main-slimes__pluse-minus span")
if (colvo) {
	attributeColvo = colvo.getAttribute("data-colvo");

	const plus = document.querySelector("minus")
	//colvo.innerHTML = attributeColvo;
	plus.addEventListener("click", function (e) {
		attributeColvo = colvo.innerHTML = attributeColvo + 1;
		e.preventDefault()
	})
	const minus = document.querySelector("pluse")
	minus.addEventListener("click", function (e) {
		attributeColvo = colvo.innerHTML = attributeColvo - 1;
		e.preventDefault()
	})
}
*/