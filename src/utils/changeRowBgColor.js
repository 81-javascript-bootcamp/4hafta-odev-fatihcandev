function changeRowBgColor(movieTitle) {
    const $movieEl = document.getElementById(movieTitle);
    $movieEl.classList.add("blue-bg");
}

export default changeRowBgColor;