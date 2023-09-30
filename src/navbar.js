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

})