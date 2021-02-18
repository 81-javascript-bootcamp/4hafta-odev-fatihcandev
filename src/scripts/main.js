import movies from "./data.js";

import filterByGenre from "../utils/filterByGenre.js";
import filterBySearchValue from "../utils/filterBySearchValue.js";
import filterByYear from "../utils/filterByYear.js";
import changeRowBgColor from "../utils/changeRowBgColor.js";
import resetTableState from "../utils/resetTableState.js";
import clearSearchInput from "../utils/clearSearchInput.js";

class MoviesApp {
  constructor(options) {
    const { root, searchInput, yearFiltersSection, genreFiltersSection, searchForm } = options;
    this.$tableEl = document.getElementById(root);
    this.$tbodyEl = this.$tableEl.querySelector("tbody");
    this.$yearFiltersSectionEl = document.getElementById(yearFiltersSection);
    this.$genreFiltersSectionEl = document.getElementById(genreFiltersSection);
    this.$searchInput = document.getElementById(searchInput);
    this.$searchForm = document.getElementById(searchForm);
  }


  createMovieEl(movie) {
    const { image, title, genre, year } = movie;
    return `
      <tr id="${title}">
        <td scope="col"><img src="${image}" class="movie-image" /></td>
        <td scope="col">${title}</td>
        <td scope="col">${genre}</td>
        <td scope="col">${year}</td>
      </tr>
    `;
  }

  createYearFilterEl(year, amountOfMoviesWithTheSameYear) {
    return `
      <div class="form-check">
        <input
          name="year"
          class="form-check-input"
          type="radio"
          value="${year}"
          id="yearFilter"
        />
        <label class="form-check-label" for="yearFilter">
          ${year} (${amountOfMoviesWithTheSameYear})
        </label>
      </div>
    `
  }

  createGenreFilterEl(genre, amountOfMoviesWithTheSameGenre) {
    return `
      <div class="form-check">
        <input
          name="genre"
          class="form-check-input"
          type="checkbox"
          value="${genre}"
          id="genreFilter"
        />
        <label class="form-check-label" for="genreFilter">
          ${genre} (${amountOfMoviesWithTheSameGenre})
        </label>
      </div>
    `
  }


  getYearFilters() {
    return document.querySelectorAll('input[name="year"]');
  }

  getGenreFilters() {
    return document.querySelectorAll('input[name="genre"]');
  }

  getDuplicateElementsLength(array, filteredElement) {
    return array.filter(element => element === filteredElement).length;
  }

  filterDuplicates(array) {
    return array.filter((element, index) => array.indexOf(element) === index);
  }

  fillTable() {
    movies.forEach((movie) => {
      const $movieEl = this.createMovieEl(movie);
      this.$tbodyEl.innerHTML += $movieEl;
    });
  }

  fillYearFiltersSection() {
    const years = movies.sort((a, b) => a.year - b.year).map(movie => movie.year);
    const filteredYears = this.filterDuplicates(years);
    filteredYears.forEach(filteredYear => {
      const occurrence = this.getDuplicateElementsLength(years, filteredYear);
      const $yearEl = this.createYearFilterEl(filteredYear, occurrence);
      this.$yearFiltersSectionEl.innerHTML += $yearEl;
    });
  }

  fillGenreFiltersSection() {
    const genres = movies.map(movie => movie.genre);
    const filteredGenres = this.filterDuplicates(genres);
    filteredGenres.forEach(filteredGenre => {
      const occurrence = this.getDuplicateElementsLength(genres, filteredGenre);
      const $genreEl = this.createGenreFilterEl(filteredGenre, occurrence);
      this.$genreFiltersSectionEl.innerHTML += $genreEl;
    });
  }

  handleFilterBySearchValue() {
    this.$searchForm.addEventListener("submit", (event) => {
      event.preventDefault();
      resetTableState(movies);
      const searchValue = this.$searchInput.value;
      const matchedMovies = movies.filter((movie) =>
        filterBySearchValue(movie, searchValue)
      );
      matchedMovies.forEach((movie) => changeRowBgColor(movie.title));
      clearSearchInput(this.$searchInput);
    });
  }

  handleFilterByYear() {
    const $yearFilters = this.getYearFilters();
    $yearFilters.forEach((radioButton) => {
      radioButton.addEventListener("click", (event) => {
        resetTableState(movies);
        const selectedYear = event.target.value;
        const matchedMovies = movies.filter((movie) =>
          filterByYear(movie, selectedYear)
        );
        matchedMovies.forEach((movie) => changeRowBgColor(movie.title));
      });
    });
  }

  handleFilterByGenre() {
    const $genreFilters = this.getGenreFilters();
    $genreFilters.forEach((filter) => {
      filter.addEventListener("click", (event) => {
        const selectedGenre = event.target.value;
        const matchedMovies = movies.filter((movie) =>
          filterByGenre(movie, selectedGenre)
        );
        if(event.target.checked) {
          matchedMovies.forEach((movie) => changeRowBgColor(movie.title)); 
        } else {
          resetTableState(matchedMovies);
        }
      });
    });
  }

  init() {
    this.fillTable();
    this.fillYearFiltersSection();
    this.fillGenreFiltersSection();
    this.handleFilterBySearchValue();
    this.handleFilterByYear();
    this.handleFilterByGenre();
  }
}

const myMoviesApp = new MoviesApp({
  root: "movies-table",
  yearFiltersSection: "year-filters-section",
  genreFiltersSection: "genre-filters-section",
  searchInput: "searchInput",
  searchForm: "searchForm",
});

myMoviesApp.init();
