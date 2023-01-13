var baseUrl = "https://api.themoviedb.org/3/";
var apiKey = "d927d53ae21824c257d2521cfee31add";
var movieIds = []

var getMoviesUrl = "https://api.themoviedb.org/3/movie/popular?api_key=d927d53ae21824c257d2521cfee31add&language=en-US";
var getPosterUrl = "https://api.themoviedb.org/3/movie/"
var getPosterUrl2 = "/images?api_key=d927d53ae21824c257d2521cfee31add&language=en-US"
//{movie_id}


var getMovies = function (user) {
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
  
  var randomizedMovie = Math.floor(Math.random() * movieIds.length);
  console.log(movieIds[randomizedMovie])
})
  .catch(err => console.error(err));
  return;
}

getMovies()

//this link not working correctly yet
var searchMoviesUrl = "https://api.themoviedb.org/3/search/movie/536554?api_key=d927d53ae21824c257d2521cfee31add&language=en-US&page=1&include_adult=false"

var searchMovies = function (user) {
  fetch(searchMoviesUrl)
  .then(response => response.json())
  .then(response => {
    console.log(response)

  })
}

searchMovies()





//MovieEl.InnerHTML = <Img Src="${getPosterUrl + randomizedMovie + Poster_path}" Alt="${Title}"/>


