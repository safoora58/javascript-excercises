//const URL = `https://www.omdbapi.com/?i=tt3896198&apikey=${apikey}`;

const movieSearchBox = document.querySelector('#movie-search-box');
const searchList = document.querySelector('.search-list');
const resultGrid = document.querySelector('.result-grid');

const apikey = "a32805a7";

// GET movies from API
async function loadMovies(searchTerm) {
  const URL = `https://www.omdbapi.com/?i=tt3896198&apikey=${apikey}&s=${searchTerm}`;

  const res = await fetch(URL);
  const data = await res.json();
  console.log(data);
  if (data.Response == "True") {
    displayMovieList(data.Search);

  }
}

function findMovies() {
  let searchTerm = movieSearchBox.value.trim();
  if (searchTerm.length > 0) {
    searchList.classList.remove('hide-search-list');
    loadMovies(searchTerm);
  } else {
    searchList.classList.add('hide-search-list');
  }
}

function displayMovieList(movies) {
  searchList.innerHTML = "";
  for (let i = 0; i < movies.length; i++) {
    let movieListItem = document.createElement('div');
    console.log(movieListItem);
    movieListItem.dataset.id = movies[i].imdbID;
    movieListItem.classList.add('search-list-item');
    if (movies[i].Poster != "N/A")
      moviePoster = movies[i].Poster;
    else
      moviePoster = "not-found.png";
    movieListItem.innerHTML = `
<div class="search-item-pic ">
              <img src="${moviePoster}">
            </div>
            <div class="search-item-info me-4">
              <h3 class="fw-bold fs-6">${movies[i].Title}</h3>
              <p class="fw-bold mt-2 opacity-75">${movies[i].Year}</p>
            </div>
` ;
    searchList.appendChild(movieListItem);
  }
  loadMovieDetails();
}

function loadMovieDetails() {
  const searchListMovies = searchList.querySelectorAll('.search-list-item');
  searchListMovies.forEach(movie => {
    // console.log(movie);
    movie.addEventListener('click', async () => {
      //console.log(movie.dataset.id);
      searchList.classList.add('hide-search-list');
      movieSearchBox.value = '';

      const result = await fetch(`https://www.omdbapi.com/?i=${movie.dataset.id}&apikey=${apikey}`);
      const movieDetails = await result.json();
      //console.log(movieDetails);
      displayMovieDetails(movieDetails);
    });

  })
}

function displayMovieDetails(data) {

  console.log(data);
  // console.log(data.Title);
  // console.log(data.Poster);
  // console.log(data.Genre);
  // console.log(data.Year);
  // console.log(data.Rated);
  // console.log(data.imdbRating);
  // console.log(data.Runtime);
  // console.log(data.Plot);
  // console.log(data.Actors); 

  resultGrid.innerHTML = `
 <div class="col-sm-6 result-movie">
        <div class="movie-poster">
          <img src="${(data.Poster != "N/A") ? data.Poster : "not-found.png"}">
        </div>
      </div> 

       <div class="col-sm-6 ">
        <div class="movie-info text-white ">
          <h3 class="movie-title text-warning">${data.Title}</h3>
          <ul class="d-flex">
            <li class="year fw-bold mt-2 ms-2">Year : ${data.Year}</li>
            <li class="rated ms-2">Rating : ${data.Rated}</li>
            <li class="released mt-2">Released :${data.Released}</li>
          </ul>
          <p class="genre d-inline-block"><b>Genre : </b>${data.Genre}</p>
          <p class="writer"><b>Writer : </b>${data.Writer}</p>
          <p class="actors"><b>Actors : </b>${data.Actors}</p>
          <p class="Summary"><b>Summary : </b>${data.Plot}</p>
          <p class="language text-warning fst-italic"><b>Language : </b>${data.Language}</p>
          <p class="awards"><b>Awards : </b>${data.Awards}</p>
        </div>
      </div> 

` ;
}


window.addEventListener('click', (event) => {
  if (event.target.className != "form-control") {
    searchList.classList.add('hide-search-list');
  }
})







































