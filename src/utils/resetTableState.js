function resetTableState(movies) {
    movies.forEach((movie) => {
      const $movieEl = document.getElementById(movie.title);
      if ($movieEl.classList.contains("active-bg")) {
        $movieEl.classList.remove("active-bg");
      } else {
        $movieEl.setAttribute('style', '');
      }
    });
}

export default resetTableState