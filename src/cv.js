window.addEventListener("load", function () {
    const line = document.getElementById("cv_line");
    console.log({line});
    line.style.height = document.body.offsetHeight - window.innerHeight
    // line.style.height = '100px';
});