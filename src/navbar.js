// Function to make a div red on hover
function markHover(event) {
    event.target.classList.add("hover");
}
function markReset(event) {
    event.target.classList.remove("hover");
}

window.addEventListener("load", function () {

    let highlights = document.getElementsByClassName('highlight1')
    for (var i = 0; i < highlights.length; ++i) {
        var highlight = highlights[i]
        highlight.style.transition = "opacity 0.5s ease-in-out";
    };
    highlights = document.getElementsByClassName('highlight2')
    for (var i = 0; i < highlights.length; ++i) {
        var highlight = highlights[i]
        highlight.style.transition = "opacity 0.5s ease-in-out";
    };
    highlights = document.getElementsByClassName('highlight3')
    for (var i = 0; i < highlights.length; ++i) {
        var highlight = highlights[i]
        highlight.style.transition = "opacity 0.5s ease-in-out";
    };

    // Get all the nav bar elements (divs)
    const home = document.getElementById('home');
    const education = document.getElementById('education');
    const expertise = document.getElementById('expertise');
    const interests = document.getElementById('interests');
    const contact = document.getElementById('contact');

    // Add event listeners to each div
    home.addEventListener('mouseenter', markHover);
    home.addEventListener('mouseleave', markReset);

    education.addEventListener('mouseenter', markHover);
    education.addEventListener('mouseleave', markReset);

    expertise.addEventListener('mouseenter', markHover);
    expertise.addEventListener('mouseleave', markReset);

    interests.addEventListener('mouseenter', markHover);
    interests.addEventListener('mouseleave', markReset);

    contact.addEventListener('mouseenter', markHover);
    contact.addEventListener('mouseleave', markReset);

    // add text to nav bar
    home.querySelector(".label").innerHTML = "Home"
    education.querySelector(".label").innerHTML = "Bildung"
    expertise.querySelector(".label").innerHTML = "Kenntnisse"
    interests.querySelector(".label").innerHTML = "Interessen"
    contact.querySelector(".label").innerHTML = "Kontakt"

    const nav_toggle = document.getElementById('nav_toggle')
    const nav = document.getElementById('nav')
    nav_toggle.addEventListener('mousedown', showNav);

    function showNav() {
        const nav_toggle = document.getElementById('nav_toggle')
        const nav = document.getElementById('nav')
        nav.classList.add("slide_in");
        nav.classList.remove("slide_out");
        nav.style.display = "flex";
        nav_toggle.style.opacity = 0;
        setTimeout(() => {
            nav.classList.add("slide_out");
            nav.classList.remove("slide_in");
            nav_toggle.style.opacity = 1;
            setTimeout(() => {
                nav.style.display = "none";
                nav.classList.remove("slide_out");
            }, 1000)
        }, 3000);
    }

    // link navbar elements to the divs where to jump to

    // the divs:

    const target_home = document.getElementById('navigation_home');
    const target_education = document.getElementById('navigation_education');
    const target_expertise = document.getElementById('navigation_expertise');

    // the corresponding navigation elements in the nav bar:

    const nav_home = document.getElementById('home');
    const nav_education = document.getElementById('education');
    const nav_expertise = document.getElementById('expertise');

    // waiting for onclick on those
    nav_home.addEventListener('click', function (e) {
        e.preventDefault();
        if (target_home) {
            target_home.scrollIntoView({
                behavior: 'smooth'
            });
        }
    })
    nav_education.addEventListener('click', function (e) {
        e.preventDefault();
        if (target_education) {
            target_education.scrollIntoView({
                behavior: 'smooth'
            });
        }
    })
    nav_expertise.addEventListener('click', function (e) {
        e.preventDefault();
        if (target_expertise) {
            target_expertise.scrollIntoView({
                behavior: 'smooth'
            });
        }
    })


})

// every time when scrolled:

window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;

    const offset = window.innerHeight * .7;

    const nav_home = document.getElementById('home');
    const nav_education = document.getElementById('education');
    const nav_expertise = document.getElementById('expertise');

    const target_home = document.getElementById('navigation_home');
    const target_education = document.getElementById('navigation_education');
    const target_expertise = document.getElementById('navigation_expertise');

    if (scrollPosition - offset < target_education.offsetTop) {
        nav_home.classList.add('current_nav_element');
        nav_education.classList.remove('current_nav_element');
        nav_expertise.classList.remove('current_nav_element');
    } else if (scrollPosition - offset >= target_education.offsetTop &&
        scrollPosition - offset < target_expertise.offsetTop) {
        nav_home.classList.remove('current_nav_element');
        nav_education.classList.add('current_nav_element');
        nav_expertise.classList.remove('current_nav_element');
    } else if (scrollPosition - offset >= target_expertise.offsetTop) {
        nav_home.classList.remove('current_nav_element');
        nav_education.classList.remove('current_nav_element');
        nav_expertise.classList.add('current_nav_element');
    } else {
        nav_home.classList.remove('current_nav_element');
        nav_education.classList.remove('current_nav_element');
        nav_expertise.classList.remove('current_nav_element');
    }
});