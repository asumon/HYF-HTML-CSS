"use:strict:"
//Say you would like to write a program that doubles 
//the odd numbers in an array and throws away the even number.

const numbers = [0,1, 2, 3, 4,5,6,7,8,9,10,11,12,13,14,15];
//console.log(numbers);
const oddNumber=numbers.filter(x=> 
    x % 2 !=0);
  //  console.log(oddNumber);
    const evenNumber=oddNumber.map(x=> 
        x *2);
    //    console.log(evenNumber);

 let doubleNumber = numbers.filter((x)=> x % 2 !==0)
     .map((x)=> x * 2)
     console.log("Even Number :",doubleNumber);


//HTTP Request

function getAjaxData(url, callback) {
    // Create new ajax call with the js function called XMLHttpRequest
    const request = new XMLHttpRequest();
    request.addEventListener('load', function () {
        // This in here is our callback function
        // Check our server responsecode, 200 means ok, success: https://en.wikipedia.org/wiki/List_of_HTTP_status_codes
        if (this.status === 200) {
            callback(JSON.parse(request.responseText));
        } else {
            console.log('Something is probably wrong with the url');
        }
    });
 
    request.addEventListener('error', function () {
        console.log('Server error like timeout');
    });
 
    // initializes a request with an http method
    request.open("GET", url);
    // Sends the request
    request.send();
 }


 moviesUrl ='https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json'; 

     //I.Give each movie a tag: Good (>= 7), Average (>= 4 and < 7), Bad (< 4) based on the ratings.

     getAjaxData(moviesUrl,movieData =>{
        console.log("Repository :",movieData);
    
       
//Total Length of Movie Database
        const movieLength=movieData.length
       // console.log("TotalLength",movieLength);
       //let avgMovieVotes = totalVotes /movieLength;
        //console.log("Average Votes",avgMovieVotes)
        
    //Summation of all the rating elements

        const totalMovieRating =movieData
        .reduce((sum, value) =>
            sum + value.rating, 1);
            //console.log("Total Rating",totalMovieRating);

       //Calculate the average rating of all the movies.

       const avgMovieRating=totalMovieRating /movieLength;
       console.log("Average rating of the movies :",avgMovieRating);


 //Individual Movie Tag

//Total Good Movie
        const GoodTag= movieData
       .filter(movieRating =>
           movieRating.rating >=7);
           console.log("Total Movies Over the rating 7 :",GoodTag.length);

           //Total Bad Movie 

        const BadRating=movieData
        .filter(badMovie =>
            badMovie.rating <4);
        //    console.log("Bad Movie Rating",BadRating);
            console.log('Total movies under the rating 4 :',BadRating.length);

        //Average Movie Rating

            const avgMovieTag =movieData.filter(avgMovies=>
                avgMovies.rating >= 4 &&
                avgMovies.rating <7)
                console.log("Total Movies with average rating :",avgMovieTag.length);

        //Count he number of movies containing the following keywords:
        // ["The", "dog", "who", "is", "not", "a", "man"].
        // Can you make sure the search is case insensitive?


        const movieTitle =movieData.map(mTitle=>
               mTitle.title)

        const keywords= ["The", "dog", "who", "is", "not", "a", "man"];      
        
        const specialNames = movieTitle.filter(x => {
            const words = x.split(/[^\w]/);
            //console.log("Words",words);
            return keywords.some(keyword => words.includes(keyword));   
        });
        
        console.log("Number of Movies with KeyWords:",specialNames.length);


    })   
