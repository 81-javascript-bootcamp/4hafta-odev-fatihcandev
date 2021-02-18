import genreBgColors from "../constants/genreBgColors.js";

function changeRowBgColor(movieTitle, isGenre, genre) {
    const $movieEl = document.getElementById(movieTitle);
    if(isGenre && genre) {
        $movieEl.setAttribute('style', `background-color: ${genreBgColors[genre]}`);
    } else {
        $movieEl.classList.add("active-bg");
    }
}

export default changeRowBgColor;