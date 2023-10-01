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
        // nav.classList.remove("slide_out");
        // nav.style.display = "none";
    }

    // Check the screen width and run the function conditionally
    // function checkScreenWidth() {
    //     const minWidth = 768;

    //     const nav_toggle = document.getElementById('nav_toggle');
    //     const nav = document.getElementById('nav');

    //     if (window.innerWidth < minWidth) {
    //         nav_toggle.style.opacity = 1;
    //         nav.style.opacity = 0;
    //         console.log("small window")
    //         nav_toggle.addEventListener('mousedown', showNav);
    //     } else {
    //         nav_toggle.removeEventListener('mousedown', showNav);
    //         nav_toggle.style.opacity = 0;
    //         nav.style.opacity = 1;
    //         nav.classList.remove("slide_out");
    //         nav.classList.remove("slide_in");
    //     }
    // }

    // window.addEventListener("resize", checkScreenWidth);

    // checkScreenWidth();

})