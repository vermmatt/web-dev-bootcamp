var movies = [
    {title: "In Bruges",
     stars: 5,
     watched: true},
     {title: "Frozen",
     stars: 4.5,
     watched: false}
];
movies.forEach(function(movie) {
    var result = "You have ";
    if(movie.watched) {
        result += "watched ";
    } else {
        result += "not seen ";
    }
    result += "\"" + movie.title + "\" - ";
    result += movie.stars + " stars";


    console.log(result);
})
