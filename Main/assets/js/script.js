var baseUrl = "https://api.themoviedb.org/3/";
var apiKey = "d927d53ae21824c257d2521cfee31add";
var movieIds = []
var movieData =[]

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
  
  randomizedMovie = Math.floor(Math.random() * movieIds.length);
  console.log(movieIds[randomizedMovie])
  searchMovies()
})
  .catch(err => console.error(err));
  return;
}

getMovies()


 var searchMovies = function (user) {
  searchMoviesUrl = "https://api.themoviedb.org/3/movie/" + movieIds[randomizedMovie] + "?api_key=d927d53ae21824c257d2521cfee31add&language=en-US"

  fetch(searchMoviesUrl)
  .then(response => response.json())
  .then(response => {
    console.log(response)
    movieData.push(response)
    console.log(movieData)
    title = movieData[0].title;
    overview = movieData[0].overview;
    vote_average = movieData[0].vote_average;
    poster_path = movieData[0].poster_path;

    poster = "https://image.tmdb.org/t/p/original" + poster_path;
      console.log(poster)
      console.log(title)
      console.log(vote_average)
      console.log(overview)
})
  .catch(err => console.error(err));
  return;  
}

var showMovies = function {
  

}

//MovieEl.InnerHTML = <Img Src="${poster}" Alt="${title}"/>
