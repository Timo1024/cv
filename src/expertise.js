window.addEventListener("load", function () {

    // make height of div with class hover_scrolling_middle_line match height of div wit hclass hover_scrolling
    document.querySelector('.hover_scrolling_middle_line').style.height = `${document.querySelector('.hover_scrolling').offsetHeight}px`;

    // Get all the divs with class hover_scrolling_element
    const hoverScrollingElements = document.querySelectorAll('.hover_scrolling_element1');

    // Get the div with class hover_scrolling_middle_arrow
    const middleArrow = document.querySelector('.hover_scrolling_middle_arrow');

    // initialize the middle arrow position
    middleArrow.style.top = `${hoverScrollingElements[0].offsetTop + hoverScrollingElements[0].offsetHeight / 2  - middleArrow.offsetHeight / 2 - 5}px`;
    
    setTimeout(() => {
        middleArrow.style.opacity = 1;
    }, 1000);

    // adapt the middle arrow position when the window is resized
    window.addEventListener('resize', () => {
        middleArrow.style.opacity = 0;
        middleArrow.style.top = `${hoverScrollingElements[0].offsetTop + hoverScrollingElements[0].offsetHeight / 2  - middleArrow.offsetHeight / 2 - 5}px`;
    });

    // set the left value of the arrow to match the value of the line with class hover_scrolling_middle_line
    middleArrow.style.left = `${document.querySelector('.hover_scrolling_middle_line').offsetLeft + 3}px`;

    // Loop through each hover_scrolling_element1 div and add a mouseover event listener
    hoverScrollingElements.forEach(element => {
        element.addEventListener('mouseover', () => {

            middleArrow.style.opacity = 1;

            // Get the middle position of the hovered element
            const middlePosition = element.offsetTop + element.offsetHeight / 2;

            // Set the top position of the middle arrow to match the middle position of the hovered element
            middleArrow.style.top = `${middlePosition - middleArrow.offsetHeight / 2 - 5}px`;

        });
    });

    const pythonDiv = document.getElementById('l_python');
    const javaDiv = document.getElementById('l_java');
    const rDiv = document.getElementById('l_r');
    const c0Div = document.getElementById('l_c0');
    const htmlDiv = document.getElementById('l_html');
    const schemeDiv = document.getElementById('l_scheme');

    const pythonContentDiv = document.getElementById('d_python');
    const javaContentDiv = document.getElementById('d_java');
    const rContentDiv = document.getElementById('d_r');
    const c0ContentDiv = document.getElementById('d_c0');
    const htmlContentDiv = document.getElementById('d_html');
    const schemeContentDiv = document.getElementById('d_scheme');

    const python = {l : pythonDiv, d : pythonContentDiv};
    const java = {l : javaDiv, d : javaContentDiv};
    const r = {l : rDiv, d : rContentDiv};
    const c0 = {l : c0Div, d : c0ContentDiv};
    const html = {l : htmlDiv, d : htmlContentDiv};
    const scheme = {l : schemeDiv, d : schemeContentDiv};

    // Loop through each language div and add a mouseover event listener
    const languages = [python, java, r, c0, html, scheme];

    // make each d div cetered vertically with respect to the corresponding l div
    languages.forEach(language => {
        language.d.style.top = `${language.l.offsetTop - language.d.offsetHeight / 2 + 10}px`;
        // top value not smaller than x
        const x = document.querySelector('.hover_scrolling').offsetTop;
        if (language.d.offsetTop < x) {
            language.d.style.top = `${x}px`;
        }
        // top value not greater than y
        const y = document.querySelector('.hover_scrolling').offsetTop + document.querySelector('.hover_scrolling').offsetHeight - language.d.offsetHeight;
        if (language.d.offsetTop > y) {
            language.d.style.top = `${y}px`;
        }
    });

    // on window rezize recalculate the top value of each d div
    window.addEventListener('resize', () => {
        languages.forEach(language => {
            language.d.style.top = `${language.l.offsetTop - language.d.offsetHeight / 2 + 10}px`;
            // top value not smaller than x
            const x = document.querySelector('.hover_scrolling').offsetTop;
            if (language.d.offsetTop < x) {
                language.d.style.top = `${x}px`;
            }
            // top value not greater than y
            const y = document.querySelector('.hover_scrolling').offsetTop + document.querySelector('.hover_scrolling').offsetHeight - language.d.offsetHeight;
            if (language.d.offsetTop > y) {
                language.d.style.top = `${y}px`;
            }
        });
    });

    languages.forEach(language => {
        language.l.addEventListener('mouseover', () => {
            language.d.style.opacity = 1;
            // make opacity of all other laguages 0
            languages.forEach(otherLanguage => {
                if (otherLanguage.l != language.l) {
                    otherLanguage.d.style.opacity = 0;
                }
            });
        });
    });

});
