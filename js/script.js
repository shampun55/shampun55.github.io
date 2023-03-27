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
			document.body.classList.add("scroll-lock")
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
/*
let elementSwiper = new Swiper(".main-slimes__columns", {
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
*/


new Swiper(".main-slimes__columns", {
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
		767: {
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

/*
if (elementSwiper) {
	elementSwiper.addEventListener('dblclick', function (e) {
		autoplay.stop();
	});
	elementSwiper.addEventListener('mouseover', function (e) {
		autoplay.stop();
	});

	elementSwiper.addEventListener('mouseout', function (e) {
		tautoplay.start();
	});
}
*/
//При клике на колонку


const columnsInTovars = document.querySelectorAll(".main-slimes__columns");

if (window.innerWidth >= 1024 && window.innerWidth <= 1600) {
	if (columnsInTovars.length > 0) {

		document.addEventListener("click", function (e) {
			if (e.target.closest(".main-slimes__column")) {
				console.log('ghbdt');
				if (e.target.closest(".item-main-slimes__button") || e.target.closest(".item-main-slimes__pluse-minus")) {
					document.querySelector(".item-main-slimes__text").classList.toggle("active");
					document.querySelector(".item-main-slimes__colvo").classList.toggle("active");
					document.querySelector(".item-main-slimes__button").classList.toggle("active");
					document.querySelector(".item-main-slimes__title").classList.toggle("active")
				}
			}
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

//

/*
new Swiper(".about-slime__item ", {

})
*/

//Вставляем кнопку

const about_slime__item = document.querySelector('.about-slime__item');

if (about_slime__item) {
	if (window.innerWidth <= 1024 && window.innerWidth >= 767) {
		about_slime__item.insertAdjacentHTML(
			"beforeend",
			`<button class="item-about-slime__more">Читать полностью</button>`
		)
	}
	about_slime__item.addEventListener("click", function (e) {
		document.querySelector(".item-about-slime__text").classList.toggle("active")
	})
}



//150 символов

const textOverflow = document.querySelectorAll(".item-reviews__text p");
/*
if (textOverflow.length > 0) {
	console.log(textOverflow);
	textOverflow.forEach((item) => {
		let symbols = item.textContent;
		console.log(symbols);
		if (symbols.length >= 100) {
			item.classList.add("lock");

		} else {
			item.classList.remove("lock")
		}
	})
}

const columnsReviews = document.querySelectorAll(".reviews__column");

if (columnsReviews.length > 0) {
	columnsReviews.forEach((item) => {
		textOverflow.forEach((text) => {
			item.addEventListener("mouseenter", function (e) {
				if (text.textContent.length >= 100) {
					text.classList.remove("lock")
				}
			})
			item.addEventListener("mouseleave", function (e) {
				if (text.textContent.length >= 100) {
					text.classList.add("lock")
				}
			})
		})

	})
}
*/
/*
if (textOverflow.length > 0) {
	textOverflow.forEach((item) => {
		item = item.join('')
		if (item.textContent.length > 40) {
			let text = text.slice(0, 40)
			text.innerHTML = text;
		}
	})
}
*/
//Скрываем колонки


const lockColumns = document.querySelectorAll("lock-column");

if (lockColumns.length > 0) {
	lockColumns.forEach((lockColumn) => {
		document.querySelector(".reviews__button").addEventListener("click", function (e) {
			lockColumn.classList.toggle("lock-column")
		})
	})
}

const columnsReviews = document.querySelectorAll(".reviews__column");

if (window.innerWidth <= 992) {
	if (columnsReviews.length > 0) {
		document.addEventListener("click", function (e) {
			if (e.target.closest(".reviews__column")) {
				let reviewsImages = document.querySelector(".reviews__images")
				reviewsImages.classList.toggle("active")
				let reviewstext = document.querySelector(".reviews__text")
				reviewstext.classList.toggle("active")
			}
		})
	}
}

//Фокус формам


const inputsFocus = document.getElementsByName("input");
if (inputsFocus.length > 0) {
	inputsFocus.forEach((item) => {
		let placehold = item.placeholder;
		item.addEventListener("focus", function (e) {
			item.placeholder = '';
		})
		item.addEventListener("blur", function (e) {
			item.placeholder = placehold;
		})
	})
}


//checkbox


const checkbox = document.querySelector(".form-contacts__checkbox");

if (checkbox) {

	if (checkbox.checked == true) {
		document.querySelector(".form-contacts__block").classList.add("active")
	}
	const block = document.querySelector(".form-contacts__block");
	block.addEventListener("click", function (e) {
		if (block.classList.contains("active")) {
			checkbox.checked == false;
		} else {
			checkbox.checked == true;
		}
		block.classList.toggle("active")
	})

}


//Отправить форму

const buttonContact = document.querySelector(".form-contacts__button");

buttonContact.addEventListener("click", function (e) {
	const block = document.querySelector(".form-contacts__block");
	if (!block.classList.contains("active")) {
		alert("Заполните все поля!")
	}
	e.preventDefault()
})

if (window.innerWidth <= 767) {
	let submitContacts = document.querySelector(".form-contacts__button ")
	const block = document.querySelector(".form-contacts__block");
	submitContacts.before(block)
	//document.querySelector(".contacts__body").append(block)
}


//Свайпер
/*
if (window.innerWidth <= 767) {
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
}
*/

//Меняем расположение элементов в футере

const buttonFooter = document.querySelector(".contacts-footer__button");
const deliveryFooter = document.querySelector(".connection-footer__delivery")
const connectionBody = document.querySelector(".connection-footer__body");
const connectionIcons = document.querySelector(".connection-footer__icons")
if (buttonFooter && deliveryFooter && connectionBody && connectionIcons) {
	if (window.innerWidth <= 992) {
		deliveryFooter.before(buttonFooter)
		buttonFooter.before(connectionIcons)

	}
	if (window.innerWidth <= 767) {
		buttonFooter.insertAdjacentHTML(
			"afterend",
			`<div class="footer__bd"></div>`
		)
	}
}