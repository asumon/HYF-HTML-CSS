"use:strict";
const button = document.querySelector('#btn');
//const searchmovie = document.querySelector('#searchbtn');
const clearButton = document.querySelector('#clear');

const moviesUrl='https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json'
const getMoviesPromise=fetch(moviesUrl);



//  Refresh The Page
clearButton.addEventListener('click', () => {
    location.reload();
})

// Get the Movies List
button.addEventListener('click', () => {

    getMoviesPromise.then((response)=>response.json())
    .then((body) =>{
        const lis =body.map(data=> {
           // console.log(data);
         
    let li = document.createElement('li');
    let text=`Movie Title: ${data.title},Year:${data.year}, Rating: ${data.rating},Votes: ${data.votes}`
    let textNode = document.createTextNode(text);
    li.appendChild(textNode);
    return li;
        })    
    
        lis.forEach((li) => {
            document.getElementById('mylist').appendChild(li);    
            })
            
       // .catch((err)=>console.log(err));

       


 })
})


/* function findTheMovie(data, keyWord) {
    return getMoviesPromise.map(titleSearch => {
        const words = titleSearch.title.toLowerCase().split(/[^\w]/);
        console.log(words);
        return keyWord.some(keyword => words.includes(keyword.toLowerCase()));
    });
    console.log("Number of Movies with KeyWords:",getMoviesPromise);
  }


  getMoviesPromise.then((response)=>response.json())
    .then((data) =>{
  const GoodTag= data
  .filter(movieRating =>
      movieRating.rating >=7);
      console.log("Total Movies Over the rating 7 :",GoodTag.length);
  
   const BadRating=data
  .filter(badMovie =>
      badMovie.rating <4);
  //    console.log("Bad Movie Rating",BadRating);
      console.log('Total movies under the rating 4 :',BadRating.length);
  })

 */