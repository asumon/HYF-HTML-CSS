let GitHubRepo= document.getElementById("exc");
let GitHubRepo1= document.getElementById("exc1");
let btn=document.getElementById("btn");

btn.addEventListener("click",function() {

  let ourRequest = new XMLHttpRequest();
  ourRequest.open('GET',"https://api.github.com/orgs/HackYourFuture/repos",true);
//    ourRequest.open('GET',"http://www.omdbapi.com/?i=tt3896198&apikey=cd101d0",true);
    ourRequest.onload=function() {
   
        var ourData= JSON.parse(ourRequest.responseText);
        alert('You Clicked Me')
        console.log(ourData);
HtmlFetch(ourData);

    };
    
    ourRequest.send();

});

function HtmlFetch(data) {

var HtmlString = "";

for (i=0;i<data.length;i++) {   
    HtmlString += "<h2>" + data[i].name + ".</h2>";
     document.getElementById("exc").innerHTML = HtmlString;
            
    }  
 }

 const form = document.querySelector('#searchForm');
form.addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const searchString = formData.get('searchString');
    const tbody = document.querySelector('#repoList > tbody');
    //tbody.innerHTML = '';

    const url = 'https://api.github.com/search/repositories?q=user:HackYourFuture' + searchString + '&page=1'

    fetchJSONData(url, ourData => {



        if (ourData.Response === 'False') {
            alert(ourData.Error);
            return;
        }


        for (const name of ourData.Search) {
            const tr = document.createElement('tr');
            tbody.appendChild(tr);
          
            const imdb="https://api.github.com/search/repositories?q=user:HackYourFuture"
            tr.innerHTML = `<td>${movie.Title}<br>
            <a href='${movie.imdbId}'>Details</a>
            <td>
            <img src="${movie.Poster}">
        </td>`;
        }

    });
});







