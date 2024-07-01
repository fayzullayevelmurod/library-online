let similarSwp = new Swiper(".similar-book .swiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    breakpoints: {
        1700: {
            slidesPerView: 8
        },
        1500: {
            slidesPerView: 7,
        },
        1200: {
            slidesPerView: 6
        },
        992: {
            slidesPerView: 5
        },
        700: {
            slidesPerView: 4
        }
    }
})

let bars = document.querySelector('.header__bars'),
    main = document.querySelector('main.main'),
    mainNav = document.querySelector('.main_nav'),
    mainContent = document.querySelector('.main_content'),
    mainNavClose = document.querySelector('.main_nav__close');

if (bars) {
    bars.onclick = e => {
        e.preventDefault();

        main.classList.toggle('active');
        mainContent.classList.toggle('active');
        bars.classList.toggle('active');

        if (mainNav.classList.contains('active')) {
            mainNav.classList.remove('active');
            mainNav.classList.add('end-active');
            setTimeout(() => {
                mainNav.classList.remove('end-active');
            }, 300);
        } else {
            mainNav.classList.add('active');
        }
        if (window.innerWidth <= 1200) {
            document.querySelector('body').style.overflow = 'hidden';
        }
    }

    mainNavClose.onclick = e => {
        e.preventDefault();
        main.classList.remove('active');
        mainContent.classList.remove('active');
        mainNav.classList.remove('active');
        mainNav.classList.add('end-active');
        bars.classList.toggle('active')
        setTimeout(() => {
            mainNav.classList.remove('end-active');
        }, 300);
        if (window.innerWidth <= 1200) {
            document.querySelector('body').style.overflow = 'visible';
        }
    }
}

let search = document.querySelector('.search_mb'),
    searchBtn = document.querySelector('.search_btn'),
    searchBg = document.querySelector('.search_mb__bg');

if (searchBtn) {
    searchBtn.onclick = e => {
        e.preventDefault();
        if (search.classList.contains('active')) {
            search.classList.remove('active');
            search.classList.add('end-active');
            setTimeout(() => {
                search.classList.remove('end-active')
            }, 300);
        } else {
            search.classList.add('active');
        }
    }

    searchBg.onclick = () => {
        search.classList.remove('active');
            search.classList.add('end-active');
            setTimeout(() => {
                search.classList.remove('end-active')
            }, 300);
    }
}

let bookSwps = document.querySelectorAll('.book-swp');

if (bookSwps.length) {
    bookSwps.forEach(el => {
        let swp = new Swiper(el.querySelector('.swiper'), {
            slidesPerView: 2,
            spaceBetween: 20,
            loop: true,
            breakpoints: {
                1700: {
                    slidesPerView: 6,
                    spaceBetween: 30,
                },
                1500: {
                    slidesPerView: 5,
                    spaceBetween: 30,
                },
                700: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                },
                450: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                }
            },
            navigation: {
                nextEl: el.querySelector('.book-swp__btn_next'),
                prevEl: el.querySelector('.book-swp__btn_prev'),
            }
        })
    })
}

let popularSwp = new Swiper('.popular-genres .swiper', {
    slidesPerView: 2,
    spaceBetween: 15,
    // loop: true,
    grid: {
        rows: 2,
        fill: "row",
    },
    breakpoints: {
        1700: {
            slidesPerView: 7,
            spaceBetween: 20,
            grid: {
                rows: 1,
                fill: "row",
            },
        },
        1500: {
            slidesPerView: 6,
            spaceBetween: 20,
            grid: {
                rows: 1,
                fill: "row",
            },
        },
        700: {
            slidesPerView: 4,
            spaceBetween: 20,
            grid: {
                rows: 1,
                fill: "row"
            }
        },
        450: {
            slidesPerView: 3,
            spaceBetween: 15,
            grid: {
                rows: 2,
                fill: "row"
            }
        }
    },
    navigation: {
        nextEl: ".popular-genres__btn_next",
        prevEl: ".popular-genres__btn_prev"
    }
})

let indexMain = document.querySelector('.main.index-main');

function menuHide() {
    if (window.innerWidth <= 1200) {
        indexMain.classList.remove('active');
        mainNav.classList.remove('active');
        mainContent.classList.remove('active');
    }

    if (indexMain.classList.contains('active')) {
        bars.classList.add('active');
    } else {
        bars.classList.remove('active');
    }
}

if (indexMain) {
    menuHide();
}

let accordion = document.querySelector('.accordion'),
    accordionBtn = document.querySelector('.accordion_btn');

if (accordion) {
    accordionBtn.onclick = () => {
        accordion.classList.toggle('hide');
    }
}

let reviewStars = document.querySelectorAll('.review_form .star_group');

if (reviewStars.length) {
    reviewStars.forEach(el => {
        let btns = el.querySelectorAll('button');
        btns.forEach((btn, btnID) => {
            btn.onclick = e => {
                e.preventDefault();
                btns.forEach((item, itemID) => {
                    if (btnID >= itemID) {
                        item.classList.add('active');
                    } else {
                        item.classList.remove('active');
                    }
                })
            }
        })
    })
}

let bookPageContent = document.querySelector('.book-page__content'),
    themeBtns = document.querySelectorAll('.book-page__content .theme button'),
    zoomIn = document.querySelector('.book-page__content .zoom-in'),
    zoomOut = document.querySelector('.book-page__content .zoom-out'),
    bookPageText = document.querySelectorAll('.book-page__content_text p');

if (bookPageContent) {
    themeBtns.forEach(el => {
        el.onclick = () => {
            themeBtns.forEach(btn => {
                if (el != btn) {
                    btn.classList.remove('active');
                    bookPageContent.classList.remove(`${btn.getAttribute('data-theme')}-theme`);
                } else {
                    btn.classList.add('active');
                    bookPageContent.classList.add(`${btn.getAttribute('data-theme')}-theme`);
                }
            })
        }
    })

    zoomIn.onclick = () => {
        bookPageText.forEach(el => {
            let size = parseInt(window.getComputedStyle(el, null).getPropertyValue('font-size'))
            el.style.fontSize = size + 2 + 'px';
        })
    }

    zoomOut.onclick = () => {
        bookPageText.forEach(el => {
            let size = parseInt(window.getComputedStyle(el, null).getPropertyValue('font-size'))
            el.style.fontSize = size - 2 + 'px';
        })
    }
}

let inp = document.querySelectorAll('.login_form .login_form_in input');

if (inp.length) {
    inp.forEach(el => {
        el.onblur = () => {
            if (el.value == "") {
                el.classList.add('error')
            } else {
                el.classList.remove('error')
            }
        }
    })
}

let formPassword = document.querySelectorAll('.form_password');

if (formPassword.length) {
    formPassword.forEach(el => {
        let inp = el.querySelector('input[type="password"]'),
            btn = el.querySelector('button');

        btn.onclick = () => {
            let type = inp.getAttribute('type');
            if (type == 'password') {
                inp.setAttribute('type', 'text');
                el.classList.add('show');
            } else {
                inp.setAttribute('type', 'password');
                el.classList.remove('show');
            }
        }
    })
}

window.addEventListener('resize', function () {
    if (indexMain) {
        menuHide();
    }
})