let GitHubRepo= document.getElementById("exc");
let btn=document.getElementById("btn");
let HtmlString = "";
    

function fetchJSONData (url,callback) {
    
const  ourRequest = new XMLHttpRequest();
ourRequest.addEventListener('load',function(data){

    if (this.status===200){
        const responseText = ourRequest.responseText;
        const Data=JSON.parse(responseText)
        callback(data);
    }else {
        console.error('Something is probably wrong with the url');
        }
});

ourRequest.addEventListener('error',function(){
    console.error('Server Time Out');
});

ourRequest.open('GET',url);
ourRequest.send();
}

  
const form = document.querySelector('#searchForm');
form.addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const searchString = formData.get('searchString');

    const tbody = document.querySelector('#moviesList > tbody');
    tbody.innerHTML = '';

    const url = 'https://api.github.com/orgs/HackYourFuture/repos' + searchString + '&page=1'





    fetchJSONData(url, data => {



        if (data.Response === 'False') {
            alert(data.Error);
            return;
        }

        GitHubRepo=url;
        for (i=0;i<data.length;i++)    
                HtmlString += "<h2>" + data[i].name + ".</h2>";
           // HtmlString1+= "<h2>" +data[i].git_url+ ".</h2>";
           document.getElementById("exc").innerHTML = HtmlString;

        
        for (const repository of data.Search) {
            const tr = document.createElement('tr');
            tbody.appendChild(tr);

            tr.innerHTML = `<td>
                <a href='#' class='movieTitle'>${repository.name}</a>
                <div class='movieDetails'></div>
                </td>
                <td>
                    <img height="150" src="${repository.url}">
                </td>
            `;

            const link = tr.querySelector('.movieTitle');
            const div = tr.querySelector('.movieDetails');

            link.addEventListener('click', (event) => {
                event.preventDefault();

                showMovieDetails(movie, div);
            })

        }

    });
});


function showMovieDetails(movie, div) {
    const url = 'https://api.github.com/orgs/HackYourFuture/repos+=' + repository.git_url;

    fetchJSONData(url, movieDetails => {
        div.innerHTML = `
                IMDB Rating: ${movieDetails.full_name} <br>
                IMDB Votes count: ${movieDetails.git_url} <br>
                Director: ${movieDetails.id} <br>

            `;

    });
};
