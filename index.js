const readlineSync = require('readline-sync');
class Movie {
  constructor(title, genre, releaseYear, available) {
    this.title = title;
    this.genre = genre;
    this.releaseYear = releaseYear;
    this.available = available;
  }

  rentMovie() {
    if (this.available) {
      this.available = false;
      console.log(`Successfully rented ${this.title}`);
    } else {
      console.log(`${this.title} is not available for rent`);
    }
  }

  returnMovie() {
    if (!this.available) {
      this.available = true;
      console.log(`Successfully returned ${this.title}`);
    } else {
      console.log(`${this.title} is already available`);
    }
  }

  static createMovieFromData(movieData) {
    return new Movie(
      movieData.title,
      movieData.genre,
      movieData.releaseYear,
      movieData.available
    );
  }
}

class MovieStore {
  constructor() {
    this.movies = [];
  }

  addMovie(movie) {
    this.movies.push(movie);
    console.log(`Added ${movie.title} to the store`);
  }

  displayAvailableMovies() {
    const availableMovies = this.movies.filter((movie) => {
      return movie.available});
    if (availableMovies.length === 0) {
      console.log('No movies available for rent');
    } else {
      console.log('Available Movies:');
      availableMovies.forEach((movie) => {
        console.log(movie.title)});
    }
  }
}

// Example usage:

const movieStore = new MovieStore();
// adding 10 objects to movieData

const movieData = [
  { title: 'blood money 1&2', genre: 'Drama', releaseYear: 2024, available: true },
  { title: 'poverty or ritual', genre: 'Sci-Fi', releaseYear: 2010, available: true },
  { title: 'money or ashawo', genre: 'romance', releaseYear: 2008, available: false },
  { title: 'The Shawshank Redemption', genre: 'Drama', releaseYear: 1994, available: true },
  { title: 'The Godfather', genre: 'Crime', releaseYear: 1972, available: true },
  { title: 'The Dark Knight', genre: 'Action', releaseYear: 2008, available: true },
  { title: 'Pulp Fiction', genre: 'Crime', releaseYear: 1994, available: true },
  { title: 'Schindlers List', genre: 'Biography', releaseYear: 1993, available: true },
  { title: 'Forest Gump', genre: 'Drama', releaseYear: 1994, available: true },
  { title: 'The Matrix', genre: 'Action', releaseYear: 1999, available: true },
  { title: 'The Silence of the Lambs', genre: 'Crime', releaseYear: 1991, available: false },
  { title: 'Goodfellas', genre: 'Biography', releaseYear: 1990, available: true },
  { title: 'The Lord of the Rings: The Return of the King', genre: 'Adventure', releaseYear: 2003, available: true }
];

// Using the static method to create movie objects from data
const movies = movieData.map(Movie.createMovieFromData);

movies.forEach((movie) => {
  return movieStore.addMovie(movie)});

//movieStore.displayAvailableMovies();

// Renting and returning movies as needed
// movies[0].rentMovie();
// movies[2].rentMovie();
// movies[6].rentMovie();
// movies[8].rentMovie();
// movies[5].rentMovie();


// movieStore.displayAvailableMovies();

// movies[0].returnMovie();
// movies[8].returnMovie();

// movieStore.displayAvailableMovies();







while (true) {
  console.log("\nWelcome to Ikechukwu Nworah (f) movie api");
  console.log("[1] display available movies");
  console.log("[2] rent a movie");
  console.log("[3] return a movie");
  console.log("[4] quit");
  const choice = readlineSync.question("Enter A choice: ");

  switch (choice) {
    
    case "3":
      let num = parseInt(
        readlineSync.question("\nEnter choice from the above movies: ") - 1,
        10)
      num - 1;
      
      movies[num].returnMovie()
      break;
    case "1":
      movieStore.displayAvailableMovies()
      break;
    case "2":
       let number = parseInt(
        readlineSync.question("\nEnter enter choice from the above movies: ") - 1,
        10)
      

      movies[number].rentMovie()
      break;
    case "4":
      console.log("Goodbye!");
      console.log("REMEMBER WE ARE ALWAYS AVAILABLE TO SERVE YOU BETTER")
      process.exit();
    default:
      console.log("This item does not exist. Please try again.");
  }
}