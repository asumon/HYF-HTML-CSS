var GitHubRepo= document.getElementById("exc");
var GitHubRepo1= document.getElementById("exc1");

var btn=document.getElementById("btn");
btn.addEventListener("click",function() {

    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET',"http://www.omdbapi.com/?i=tt3896198&apikey=cd101d0",true);
    ourRequest.onload=function() {
   
        var ourData= JSON.parse(ourRequest.responseText);
        console.log(ourData);
HtmlFetch(ourData);

    };
    
    ourRequest.send();

});

function HtmlFetch(data) {

var HtmlString = "";
var HtmlString1 = "";
var HtmlString2 ="";
        var x;

for (i=0;i<data.length;i++) {   

    HtmlString += "<h2>" + data[i].name + ".</h2>";
   document.getElementById("exc").innerHTML = HtmlString;
}
    
    }
