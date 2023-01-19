var baseUrl = "https://api.themoviedb.org/3/";
var apiKey = "d927d53ae21824c257d2521cfee31add";
var movieIds = []
var movieData = []
var getJokeURL
var getMoviesUrl = "https://api.themoviedb.org/3/movie/popular?api_key=d927d53ae21824c257d2521cfee31add&language=en-US";
var getMoviebyID = "https://api.themoviedb.org/3/movie/"
var getMoviebyID2 = "?api_key=d927d53ae21824c257d2521cfee31add&language=en-US"
var getPosterUrl = "https://api.themoviedb.org/3/movie/"
var getPosterUrl2 = "/images?api_key=d927d53ae21824c257d2521cfee31add&language=en-US"
var randomizedMovie

var getMovies = function (user) {
    fetch(getMoviesUrl)
        .then(response => response.json())
        .then(response => {
            console.log(response)

            for (let i = 0; i < response.results.length; i++) {
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

//this link not working correctly yet, break up and pull randomized movie
//var searchMoviesUrl = "https://api.themoviedb.org/3/movie/ "+randomizedMovie+" ?api_key=d927d53ae21824c257d2521cfee31add&language=en-US"


var searchMovies = function (user) {
    var searchMoviesUrl = "https://api.themoviedb.org/3/movie/" + movieIds[randomizedMovie] + "?api_key=d927d53ae21824c257d2521cfee31add&language=en-US"

    fetch(searchMoviesUrl)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            movieData.push(response)
            console.log(movieData)
            var title = movieData[0].title;
            var overview = movieData[0].overview;
            var vote_average = movieData[0].vote_average;
            var poster_path = movieData[0].poster_path;
            console.log(title, overview, vote_average, poster_path)
        })
        .catch(err => console.error(err));
    return;
}





//MovieEl.InnerHTML = <Img Src="${getPosterUrl + movieIds[randomizedMovie] + Poster_path}" Alt="${Title}"/>
//var poster = (getPosterUrl + movieIds[randomizedMovie] + poster_path)
//console.log(poster)


var generateBtn = (".randomizer-button")
var cardDataEl = (".card-content")
var memeDataEl = (".memes")
var jokeDataEl = (".jokes")
var getMemesURL = 'https://humor-jokes-and-memes.p.rapidapi.com/memes/random?number=5&media-type=gif&min-rating=6'

var memeBaseURL = "https://humor-jokes-and-memes.p.rapidapi.com"
var rapidAPIkey = "3f1d95273cmsh9c70dfc673fb7c8p12bd0cjsn6550dfeba66a"
var dropdownOptions = [
    ("Action"), ("Adventure"), ("Animation"), ("Comedy"), ("Crime"), ("Documentary"), ("Drama"), ("Family"), ("Fantasy"), ("History"), ("Horror"), ("Music"), ("Mystery"), ("Romance"), ("Science Fiction"), ("Thriller"), ("War"), ("Western")];
//event listener for when generate button is clicked, chuck norris movies should randomly populate in first column.
//chuck norris memes should also populate in second column.
//limit results to max 5, display in a column of cards. 
//create persistent storage for results. recall result history on history page.

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function categories() {
    document.querySelector(".dropdown-content").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdown = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdownOptions.length; i++) {
            dropdownOptions.textContent = [i]
            document.querySelector(".dropdown-content").append(categories)
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}


var jokeOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': rapidAPIkey,
        'X-RapidAPI-Host': 'humor-jokes-and-memes.p.rapidapi.com'
    }
};
getJokeURL = 'https://humor-jokes-and-memes.p.rapidapi.com/jokes/random?max-length=400&include-tags=chuck_norris&min-rating=7&exclude-tags=racist,sexist'
fetch(getJokeURL, jokeOptions)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));


var getJokes = function (user) {
    fetch(getJokesURL)
        .then(response => response.json())
        .then(response => {
            console.log(response)

            for (let i = 0; i < response.results.length; i++) {

                //console.log(response.results[i].id)

            }

        })
        .catch(err => console.error(err));
    return;
}

getJokes();
console.log(getJokes)