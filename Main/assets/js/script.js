var baseUrl = "https://api.themoviedb.org/3/";
var apiKey = "d927d53ae21824c257d2521cfee31add";
var movieIds = []

var getMoviesUrl = "https://api.themoviedb.org/3/movie/popular?api_key=d927d53ae21824c257d2521cfee31add&language=en-US";
var getMoviebyID = "https://api.themoviedb.org/3/movie/"
var getMoviebyID2 = "?api_key=d927d53ae21824c257d2521cfee31add&language=en-US"
var getPosterUrl = "https://api.themoviedb.org/3/movie/"
var getPosterUrl2 = "/images?api_key=d927d53ae21824c257d2521cfee31add&language=en-US"
var randomizedMovie 
var searchMoviesUrl
var title
var overview
var vote_average
var poster_path
var poster

var buttonEl = document.getElementById('dropdown-menu3')
var movieinfoEl = document.getElementById('movie-info')

var getMovies = function () {
fetch(getMoviesUrl)
.then(response => response.json())
.then(response => {
  console.log(response)

  for (let i=0; i<response.results.length; i++ ) {
    var idReturn = (response.results[i].id)
    movieIds.push(idReturn)
  }
  console.log(movieIds)
  console.log(movieIds.length)
  
  randomizedMovie = Math.floor(Math.random() * movieIds.length);
  console.log(movieIds[randomizedMovie])
  searchMovies()
})
  .catch(err => console.error(err));
  return;
}
//keep this for final code
var searchHistory = JSON.parse(localStorage.getItem("searchHistory")) || [];
//saves the search history to the history dropdown menu
var select = document.getElementById("search-history");
select.innerHTML = '';
for (var i = 0; i < searchHistory.length; i++) {
  var searchTitle = searchHistory[i];
  var option = document.createElement("option");
  option.text = searchTitle;
  option.value = searchTitle;
  select.appendChild(option);
}
//final code
//final code
function saveSearchHistory() {
  localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
}
//final code
 var searchMovies = function () {
  searchMoviesUrl = "https://api.themoviedb.org/3/movie/" + movieIds[randomizedMovie] + "?api_key=d927d53ae21824c257d2521cfee31add&language=en-US"

  fetch(searchMoviesUrl)
  .then(response => response.json())

  .then(response => { 
    var movieData =[];
    console.log(response);
    movieData.push(response);
    console.log(movieData);
    title = movieData[0].title;
    overview = movieData[0].overview;
    vote_average = movieData[0].vote_average;
    poster_path = movieData[0].poster_path;


    poster = "https://image.tmdb.org/t/p/original" + poster_path;

    searchHistory.push(title);
    if (searchHistory.length > 10) {
      searchHistory.shift();
    }
    saveSearchHistory();

    //saves the search history to the history dropdown menu
    var select = document.getElementById("search-history");
    select.innerHTML = '';
    for (var i = 0; i < searchHistory.length; i++) {
      var searchTitle = searchHistory[i];
      var option = document.createElement("option");
      option.text = searchTitle;
      option.value = searchTitle;
      select.appendChild(option);
    }

    showMovies(poster, title, vote_average,overview)
      console.log(poster)
      console.log(title)
      console.log(vote_average)
      console.log(overview)
})
  .catch(err => console.error(err));
  return;  
}
//final code
function showMovies(poster, title, vote_average,overview) {
console.log('test')
    movieinfoEl.textContent = '';
    movieEl = document.createElement('div');
    movieEl.classList.add('movie');
    movieEl.innerHTML = `
    <img src=${poster} alt=${title}> </img>

    <div class="movie-data">
      <h3>Title: ${title}</h3>
      <h3>Review: <span class="${getColor(vote_average)}">${vote_average}</span>
      </h3>
    </div>

    <div class="overview">

      <h3>Overview: ${overview}</h3>
      
    </div>
   `
   
  movieinfoEl.appendChild(movieEl)
  

}
//final code

function getColor(vote) {
  if(vote >= 8){
    return'green'
  }else if(vote >= 5){
    return'orange'
  }else{
    return'red'
  }
}

buttonEl.addEventListener('click', getMovies)
//final code
