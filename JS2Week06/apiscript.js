//let GitHubRepo= document.getElementById("exc");
//let GitHubRepo= document.getElementById("exc");
const url = 'https://api.github.com/orgs/HackYourFuture/repos'; // Main Repo
let sub_url = 'https://api.github.com/search/repositories?q=user:HackYourFuture+';
let HtmlString;
let HtmlUrl;
let htmlLink;

const btn=document.getElementById("btn");
const ourRequest = new XMLHttpRequest();

btn.addEventListener("click",function(ourData) {

   ourRequest.open('GET',"https://api.github.com/orgs/HackYourFuture/repos",true);
//    ourRequest.open('GET',"http://www.omdbapi.com/?i=tt3896198&apikey=cd101d0",true);
    ourRequest.onload=function() {
   
        const ourData= JSON.parse(ourRequest.responseText);
        console.log('You Clicked Me');
        console.log(ourData);
        HtmlFetch(ourData);


    };
    
    ourRequest.send();
});



function HtmlFetch(data) {


for (i=0;i<data.length;i++) {   
    HtmlString += "<h2>" + data[i].name + ".</h2>";
    HtmlUrl += "<h2>" +"<a href>" + data[i].url + ".</h2>" +"</a>";
    
     document.getElementById("exc").innerHTML = HtmlString;
     document.getElementById("apilink").innerHTML = HtmlUrl;
            
    }  
 }

 
