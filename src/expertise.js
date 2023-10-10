window.addEventListener("load", function () {

    // make height of div with class hover_scrolling_middle_line match height of div wit hclass hover_scrolling
    document.querySelector('.hover_scrolling_middle_line').style.height = `${document.querySelector('.hover_scrolling').offsetHeight}px`;
    document.querySelector('.hover_scrolling_middle_line2').style.height = `${document.querySelector('.hover_scrolling2').offsetHeight}px`;
    document.querySelector('.hover_scrolling_middle_line3').style.height = `${document.querySelector('.hover_scrolling3').offsetHeight}px`;

    // Get all the divs with class hover_scrolling_element
    const hoverScrollingElements = document.querySelectorAll('.hover_scrolling_element1');
    const hoverScrollingElements2 = document.querySelectorAll('.hover_scrolling_element2');
    const hoverScrollingElements3 = document.querySelectorAll('.hover_scrolling_element3');

    // Get the div with class hover_scrolling_middle_arrow
    const middleArrow = document.querySelector('.hover_scrolling_middle_arrow');
    const middleArrow2 = document.querySelector('.hover_scrolling_middle_arrow2');
    const middleArrow3 = document.querySelector('.hover_scrolling_middle_arrow3');

    // initialize the middle arrow position
    middleArrow.style.top = `${hoverScrollingElements[0].offsetTop + hoverScrollingElements[0].offsetHeight / 2 - middleArrow.offsetHeight / 2 - 5}px`;
    middleArrow2.style.top = `${hoverScrollingElements2[0].offsetTop + hoverScrollingElements2[0].offsetHeight / 2 - middleArrow2.offsetHeight / 2 - 5}px`;
    middleArrow3.style.top = `${hoverScrollingElements3[0].offsetTop + hoverScrollingElements3[0].offsetHeight / 2 - middleArrow3.offsetHeight / 2 - 5}px`;

    // set the left value of the arrow to match the value of the line with class hover_scrolling_middle_line
    middleArrow.style.left = `${document.querySelector('.hover_scrolling_middle_line').offsetLeft + 3}px`;
    middleArrow2.style.left = `${document.querySelector('.hover_scrolling_middle_line2').offsetLeft + 3}px`;
    middleArrow3.style.left = `${document.querySelector('.hover_scrolling_middle_line3').offsetLeft + 3}px`;

    setTimeout(() => {
        middleArrow.style.opacity = 1;
        middleArrow2.style.opacity = 1;
        middleArrow3.style.opacity = 1;
    }, 1000);

    // adapt the middle arrow position when the window is resized
    window.addEventListener('resize', () => {
        middleArrow.style.opacity = 0;
        middleArrow.style.top = `${hoverScrollingElements[0].offsetTop + hoverScrollingElements[0].offsetHeight / 2 - middleArrow.offsetHeight / 2 - 5}px`;
        middleArrow2.style.opacity = 0;
        middleArrow2.style.top = `${hoverScrollingElements2[0].offsetTop + hoverScrollingElements2[0].offsetHeight / 2 - middleArrow2.offsetHeight / 2 - 5}px`;
        middleArrow3.style.opacity = 0;
        middleArrow3.style.top = `${hoverScrollingElements3[0].offsetTop + hoverScrollingElements3[0].offsetHeight / 2 - middleArrow3.offsetHeight / 2 - 5}px`;

        // make height of div with class hover_scrolling_middle_line match height of div wit hclass hover_scrolling
        document.querySelector('.hover_scrolling_middle_line').style.height = `${document.querySelector('.hover_scrolling').offsetHeight}px`;
        document.querySelector('.hover_scrolling_middle_line2').style.height = `${document.querySelector('.hover_scrolling2').offsetHeight}px`;
        document.querySelector('.hover_scrolling_middle_line3').style.height = `${document.querySelector('.hover_scrolling3').offsetHeight}px`;

    });

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
    // Loop through each hover_scrolling_element1 div and add a mouseover event listener
    hoverScrollingElements2.forEach(element => {
        element.addEventListener('mouseover', () => {

            middleArrow2.style.opacity = 1;

            // Get the middle position of the hovered element
            const middlePosition = element.offsetTop + element.offsetHeight / 2;

            // Set the top position of the middle arrow to match the middle position of the hovered element
            middleArrow2.style.top = `${middlePosition - middleArrow.offsetHeight / 2 - 5}px`;

        });
    });
    // Loop through each hover_scrolling_element1 div and add a mouseover event listener
    hoverScrollingElements3.forEach(element => {
        element.addEventListener('mouseover', () => {

            middleArrow3.style.opacity = 1;

            // Get the middle position of the hovered element
            const middlePosition = element.offsetTop + element.offsetHeight / 2;

            // Set the top position of the middle arrow to match the middle position of the hovered element
            middleArrow3.style.top = `${middlePosition - middleArrow.offsetHeight / 2 - 5}px`;

        });
    });

    //////////////////////////////

    const pythonDiv = document.getElementById('l_python');
    const javaDiv = document.getElementById('l_java');
    const rDiv = document.getElementById('l_r');
    const c0Div = document.getElementById('l_c0');
    const htmlDiv = document.getElementById('l_html');
    const schemeDiv = document.getElementById('l_scheme');
    const javascriptDiv = document.getElementById('l_javascript');
    const typescriptDiv = document.getElementById('l_typescript');
    const cssDiv = document.getElementById('l_css');
    const phpDiv = document.getElementById('l_php');

    const gitDiv = document.getElementById('l_git');
    const agiledevelopmentDiv = document.getElementById('l_agiledevelopment');

    const tailwindDiv = document.getElementById('l_tailwind');
    const reactDiv = document.getElementById('l_react');
    const bootstrapDiv = document.getElementById('l_bootstrap');

    //////////////////////////////

    const pythonContentDiv = document.getElementById('d_python');
    const javaContentDiv = document.getElementById('d_java');
    const rContentDiv = document.getElementById('d_r');
    const c0ContentDiv = document.getElementById('d_c0');
    const htmlContentDiv = document.getElementById('d_html');
    const schemeContentDiv = document.getElementById('d_scheme');
    const javascriptContentDiv = document.getElementById('d_javascript');
    const typescriptContentDiv = document.getElementById('d_typescript');
    const cssContentDiv = document.getElementById('d_css');
    const phpContentDiv = document.getElementById('d_php');

    const gitContentDiv = document.getElementById('d_git');
    const agileDevelopmentContentDiv = document.getElementById('d_agiledevelopment');

    const tailwindContentDiv = document.getElementById('d_tailwind');
    const reactContentDiv = document.getElementById('d_react');
    const bootstrapContentDiv = document.getElementById('d_bootstrap');

    //////////////////////////////

    const python = { l: pythonDiv, d: pythonContentDiv };
    const java = { l: javaDiv, d: javaContentDiv };
    const r = { l: rDiv, d: rContentDiv };
    const c0 = { l: c0Div, d: c0ContentDiv };
    const html = { l: htmlDiv, d: htmlContentDiv };
    const scheme = { l: schemeDiv, d: schemeContentDiv };
    const javascript = { l: javascriptDiv, d: javascriptContentDiv };
    const typescript = { l: typescriptDiv, d: typescriptContentDiv };
    const css = { l: cssDiv, d: cssContentDiv };
    const php = { l: phpDiv, d: phpContentDiv };

    const git = { l: gitDiv, d: gitContentDiv };
    const agiledevelopment = { l: agiledevelopmentDiv, d: agileDevelopmentContentDiv };

    const tailwind = { l: tailwindDiv, d: tailwindContentDiv };
    const react = { l: reactDiv, d: reactContentDiv };
    const bootstrap = { l: bootstrapDiv, d: bootstrapContentDiv };

    //////////////////////////////

    // Loop through each language div and add a mouseover event listener
    const languages = [python, java, r, c0, html, scheme, javascript, typescript, css, php];
    const methods = [git, agiledevelopment];
    const frameworks = [tailwind, react, bootstrap];

    // make the left property of all descriptions of all hover scrolling elements the same
    languages.forEach(element => {
        element.d.style.left = `${document.querySelector('.hover_scrolling_middle_line').offsetLeft + 10}px`;
    });
    methods.forEach(element => {
        element.d.style.left = `${document.querySelector('.hover_scrolling_middle_line2').offsetLeft + 10}px`;
    });
    frameworks.forEach(element => {
        element.d.style.left = `${document.querySelector('.hover_scrolling_middle_line3').offsetLeft + 10}px`;
    });

    // make each d div cetered vertically with respect to the corresponding l div
    languages.forEach(language => {
        // language.d.style.top = `${language.l.offsetTop - language.d.offsetHeight / 2 + 10}px`;
        language.d.style.top = `${language.l.offsetTop + language.l.offsetHeight / 2 - language.d.offsetHeight / 2 - 10}px`;
        // top value not smaller than x
        const x = document.querySelector('.hover_scrolling').offsetTop;
        if (language.d.offsetTop < x) {
            language.d.style.top = `${x}px`;
        }
        // top value not greater than y
        const y = document.querySelector('.hover_scrolling').offsetTop +
            document.querySelector('.hover_scrolling').offsetHeight -
            language.d.offsetHeight;

        if (language.d.offsetTop + 10 > y) {
            language.d.style.top = `${y - 20}px`;
        }
    });
    // make each d div cetered vertically with respect to the corresponding l div
    methods.forEach(method => {
        method.d.style.top = `${method.l.offsetTop + method.l.offsetHeight / 2 - method.d.offsetHeight / 2 - 10}px`;
        // top value not smaller than x
        const x = document.querySelector('.hover_scrolling2').offsetTop;
        if (method.d.offsetTop < x) {
            method.d.style.top = `${x}px`;
        }
        // top value not greater than y
        const y = document.querySelector('.hover_scrolling2').offsetTop +
            document.querySelector('.hover_scrolling2').offsetHeight -
            method.d.offsetHeight;

        if (method.d.offsetTop + 10 > y) {
            method.d.style.top = `${y - 20}px`;
        }
    });
    // make each d div cetered vertically with respect to the corresponding l div
    frameworks.forEach(framework => {
        framework.d.style.top = `${framework.l.offsetTop + framework.l.offsetHeight / 2 - framework.d.offsetHeight / 2 - 10}px`;
        // top value not smaller than x
        const x = document.querySelector('.hover_scrolling3').offsetTop;
        if (framework.d.offsetTop < x) {
            framework.d.style.top = `${x}px`;
        }
        // top value not greater than y
        const y = document.querySelector('.hover_scrolling3').offsetTop +
            document.querySelector('.hover_scrolling3').offsetHeight -
            framework.d.offsetHeight;

        if (framework.d.offsetTop + 10 > y) {
            framework.d.style.top = `${y - 20}px`;
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
        methods.forEach(method => {
            method.d.style.top = `${method.l.offsetTop + method.l.offsetHeight / 2 - method.d.offsetHeight / 2 - 10}px`;
            // top value not smaller than x
            const x = document.querySelector('.hover_scrolling2').offsetTop;
            if (method.d.offsetTop < x) {
                method.d.style.top = `${x}px`;
            }
            // top value not greater than y
            const y = document.querySelector('.hover_scrolling2').offsetTop +
                document.querySelector('.hover_scrolling2').offsetHeight -
                method.d.offsetHeight;

            if (method.d.offsetTop + 10 > y) {
                method.d.style.top = `${y - 20}px`;
            }
        });
        frameworks.forEach(framework => {
            framework.d.style.top = `${framework.l.offsetTop + framework.l.offsetHeight / 2 - framework.d.offsetHeight / 2 - 10}px`;
            // top value not smaller than x
            const x = document.querySelector('.hover_scrolling3').offsetTop;
            if (framework.d.offsetTop < x) {
                framework.d.style.top = `${x}px`;
            }
            // top value not greater than y
            const y = document.querySelector('.hover_scrolling3').offsetTop +
                document.querySelector('.hover_scrolling3').offsetHeight -
                framework.d.offsetHeight;

            if (framework.d.offsetTop + 10 > y) {
                framework.d.style.top = `${y - 20}px`;
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
    methods.forEach(method => {
        method.l.addEventListener('mouseover', () => {
            method.d.style.opacity = 1;
            // make opacity of all other laguages 0
            methods.forEach(otherMethod => {
                if (otherMethod.l != method.l) {
                    otherMethod.d.style.opacity = 0;
                }
            });
        });
    });
    frameworks.forEach(framework => {
        framework.l.addEventListener('mouseover', () => {
            framework.d.style.opacity = 1;
            // make opacity of all other laguages 0
            frameworks.forEach(otherFramework => {
                if (otherFramework.l != framework.l) {
                    otherFramework.d.style.opacity = 0;
                }
            });
        });
    });

});
