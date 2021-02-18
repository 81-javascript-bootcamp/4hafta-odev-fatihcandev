function resetTableState(movies) {
    movies.forEach((movie) => {
      const $movieEl = document.getElementById(movie.title);
      if ($movieEl.classList.contains("blue-bg")) {
        $movieEl.classList.remove("blue-bg");
      }
    });
}

export default resetTableState