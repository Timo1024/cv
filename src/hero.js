
function changeInterest(interests, interestsElement, currentIndex, currentSubstring) {

    if (currentSubstring == interests[currentIndex]) {
        currentIndex = (currentIndex + 1) % interests.length
        currentSubstring = ""
    } else {
        currentSubstring = interests[currentIndex].slice(0, currentSubstring.length + 1)
    }

    timeout = Math.random() * 100 + 50
    if(currentSubstring == interests[currentIndex]){
        timeout = 1000
    }

    interestsElement.innerHTML = currentSubstring + "_"; // Update the content

    setTimeout(function() {
        changeInterest(interests, interestsElement, currentIndex, currentSubstring)
    }, timeout)
}

window.addEventListener("load", function () {
    const interests = ["Discord Bots", "Webdevelopment", "Joshi", "Bioinformatics"];
    const interestsElement = document.getElementById("interest_keywords");
    let currentIndex = 0;
    let currentSubstring = "";

    changeInterest(interests, interestsElement, currentIndex, currentSubstring)
});