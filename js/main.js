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

        if (mainNav.classList.contains('active')) {
            mainNav.classList.remove('active');
            mainNav.classList.add('end-active');
            setTimeout(() => {
                mainNav.classList.remove('end-active');
            }, 300);
        } else {
            mainNav.classList.add('active');
        }
    }

    mainNavClose.onclick = e => {
        e.preventDefault();
        main.classList.remove('active');
        mainContent.classList.remove('active');
        mainNav.classList.remove('active');
        mainNav.classList.add('end-active');
        setTimeout(() => {
            mainNav.classList.remove('end-active');
        }, 300);
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
}

if (indexMain) {
    menuHide();
}

window.addEventListener('resize', function () {
    if (indexMain) {
        menuHide();
    }
})