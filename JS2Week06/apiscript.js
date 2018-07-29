function getData(url, callback) {
    // Create new ajax call with the js function called XMLHttpRequest
    const req = new XMLHttpRequest();
    req.addEventListener('load', function (jsonData) {
        // This in here is our callback function
        // Check our server responsecode, 200 means ok, success: https://en.wikipedia.org/wiki/List_of_HTTP_status_codes
        if (this.status === 200) {
            const responseText = req.responseText;
            const jsonData = JSON.parse(responseText)
            callback(jsonData);
        } else {
            console.error('Something is probably wrong with the url');
        }
    });

    req.addEventListener('error', function () {
        console.error('Server error like timeout');
    });

    // initializes a request with an http method
    req.open("GET", url);
    // Sends the request
    req.send();
}

//const url = 'https://api.github.com/orgs/HackYourFuture/repos'; 
//const url = 'https://api.github.com/search/repositories?q=user:HackYourFuture+' + searchIteam
//const form =document.querySelector('#searchIteam');
const button = document.querySelector('#btn');
const clearButton = document.querySelector('#clear');
const searchInput = document.querySelector('#search')


clearButton.addEventListener('click', () => {
    repo.innerHTML = '';
})


/*getData(url,jsonData => {
    console.log(jsonData);
}); */

button.addEventListener('click', () => {
    //we call the getData function inside the addEventListener callback
    searchIteam('https://api.github.com/orgs/HackYourFuture-CPH/repos');

})


function searchIteam(url) {
    getData(url, (data) => {
        var HtmlString;

        console.log(data);
        //Display the repository 
        for (let i = 0; i < data.length; i++) {
            HtmlString += "<h2>" + data[i].name + ".</h2>";
            document.getElementById("repo").innerHTML = HtmlString;

        }
    });
}


const form = document.querySelector('#searchForm');
form.addEventListener('submit', event => {
    // If this method is called, the default action of the event will not be triggered.
    event.preventDefault();
    const formData = new FormData(event.target);

    const searchIteam = formData.get('searchIteam');
    const tbody = document.querySelector('#list > tbody');


    const url = 'https://api.github.com/search/repositories?q=user:HackYourFuture+' + searchIteam


    getData(url, data => {


        if (data.Response === 'False') {
            alert(data.Error);
            return;
        }


        for (const repo of data.items) {

            const tr = document.createElement('tr');
            tbody.appendChild(tr);
            tr.innerHTML = `<td>
                <a href='#' class='RepoUrl'>${repo.full_name}</a>
                <div class='repoName'></div>
                </td>
                <td>
                    <img height="50" src="${repo.avatar_url}">
                </td>
            `;

            console.log(data);

            const link = tr.querySelector('.RepoUrl');
            const div = tr.querySelector('.repoName');

            link.addEventListener('click', (event) => {
                event.preventDefault();
            })

        }

    });
});
