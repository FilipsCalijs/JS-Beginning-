
let numberOfFilms
function start(){
    numberOfFilms = +prompt("Сколько фильмов ты успел постротреть за 2021 год",'');
    while(numberOfFilms = '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt("Сколько фильмов ты успел постротреть за 2021 год",'');
    }
}
start;


console.log(numberOfFilms); 


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememverMyFilms(){

    for (let i = 0;i< 2; i++){
        const a = prompt("Один из последних просмотренных филмов",' ');
        const b = prompt("На сколько вы его отцениваете?",' ');
        if (a != null && b != null && a != '' && b != " "){
            personalMovieDB.movies[a] = b;   
            console.log('done');
            i++;
        }
        else{
            console.log('error');
            i--;
        }
    }
}
rememverMyFilms();



function detextPersonalLeval(){
    let n = personalMovieDB.count;
    if (n < 10){
        console.log("Прасмотрино мало фильмов! ")
    }
    else if (n > 10 && n < 30){
        console.log("вы классический фильмоман! ")
    }
    else if (n > 30){
        console.log("вы смотрите много фильмов! ")
    }
       
}
detextPersonalLeval();
function showMybd(hidden){
    if (!hidden){
        console.log(personalMovieDB)
    }
}
console.log(personalMovieDB); 

function writeYourGeners(){
     for (let i = 1;i <= 3; i++){
         personalMovieDB.genres[i - 1] = prompt('ваш любимый жанр под номером ${i}')
     }
}