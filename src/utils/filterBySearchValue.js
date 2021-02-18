const filterBySearchValue = (movie, searchValue) => {
    return (
      movie.title.includes(searchValue) ||
      movie.title.toLowerCase().includes(searchValue)
    );
  };
  
  export default filterBySearchValue;
  