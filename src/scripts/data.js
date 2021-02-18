const movies = [
    {
      title: "In The Mood For Love",
      year: "2000",
      genre: "Romance",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51mlHukWl0L._SY445_.jpg"
    },
    {
      title: "The Master",
      year: "2012",
      genre: "Drama",
      image:
        "https://upload.wikimedia.org/wikipedia/en/0/08/TheMaster2012Poster.jpg"
    },
    {
      title: "Enter The Void",
      year: "2009",
      genre: "Drama",
      image:
        "https://upload.wikimedia.org/wikipedia/en/3/39/Enter-the-void-poster.png"
    },
    {
      title: "The Godfather",
      year: "1972",
      genre: "Crime",
      image:
        "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY1200_CR107,0,630,1200_AL_.jpg"
    },
    {
      title: "The Godfather: Part II",
      year: "1974",
      genre: "Crime",
      image:
        "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
    },
    {
      title: "The Dark Knight",
      year: "2008",
      genre: "Action",
      image:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg"
    },
    {
      title: "12 Angry Men",
      year: "1957",
      genre: "Crime",
      image:
        "https://ia.media-imdb.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg"
    },
    {
      title: "Schindler's List",
      year: "1993",
      genre: "Biography",
      image:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
    },
    {
      title: "The Lord of the Rings: The Return of the King",
      year: "2003",
      genre: "Adventure",
      image:
        "https://upload.wikimedia.org/wikipedia/en/b/be/The_Lord_of_the_Rings_-_The_Return_of_the_King_%282003%29.jpg"
    },
    {
      title: "Pulp Fiction",
      year: "1994",
      genre: "Crime",
      image:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTkxMTA5OTAzMl5BMl5BanBnXkFtZTgwNjA5MDc3NjE@._V1_SX300.jpg"
    },
    {
      title: "The Good, the Bad and the Ugly",
      year: "1966",
      genre: "Western",
      image:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BOTQ5NDI3MTI4MF5BMl5BanBnXkFtZTgwNDQ4ODE5MDE@._V1_SX300.jpg"
    },
    {
      title: "Fight Club",
      year: "1999",
      genre: "Drama",
      image:
        "https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY1200_CR85,0,630,1200_AL_.jpg"
    },
    {
      title: "The Lord of the Rings: The Fellowship of the Ring",
      year: "2001",
      genre: "Adventure",
      image:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg"
    },
    {
      title: "Forrest Gump",
      year: "1994",
      genre: "Drama",
      image:
        "https://ia.media-imdb.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
    },
    {
      title: "Star Wars: Episode V - The Empire Strikes Back",
      year: "1980",
      genre: "Action",
      image:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
    },
    {
      title: "Inception",
      year: "2010",
      genre: "Action",
      image:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg"
    },
    {
      title: "The Lord of the Rings: The Two Towers",
      year: "2002",
      genre: "Adventure",
      image:
        "https://m.media-amazon.com/images/M/MV5BZGMxZTdjZmYtMmE2Ni00ZTdkLWI5NTgtNjlmMjBiNzU2MmI5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY1200_CR70,0,630,1200_AL_.jpg"
    },
    {
      title: "One Flew Over the Cuckoo's Nest",
      year: "1975",
      genre: "Drama",
      image:
        "https://ia.media-imdb.com/images/M/MV5BZjA0OWVhOTAtYWQxNi00YzNhLWI4ZjYtNjFjZTEyYjJlNDVlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
    },
    {
      title: "Goodfellas",
      year: "1990",
      genre: "Biography",
      image:
        "https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY1200_CR85,0,630,1200_AL_.jpg"
    },
    {
      title: "The Matrix",
      year: "1999",
      genre: "Action",
      image:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
    },
    {
      title: "Seven Samurai",
      year: "1954",
      genre: "Adventure",
      image:
        "https://m.media-amazon.com/images/M/MV5BOWE4ZDdhNmMtNzE5ZC00NzExLTlhNGMtY2ZhYjYzODEzODA1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg"
    },
    {
      title: "Star Wars: Episode IV - A New Hope",
      year: "1977",
      genre: "Action",
      image:
        "https://ia.media-imdb.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
    }
  ];
  
  export default movies;