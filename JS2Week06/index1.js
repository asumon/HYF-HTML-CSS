const url = 'https://api.github.com/users/benna100';
// Create new ajax call with the js function called XMLHttpRequest
const req = new XMLHttpRequest();
req.addEventListener('load', function (data) {
    // This in here is our callback function
    // Check our server responsecode, 200 means ok, success: https://en.wikipedia.org/wiki/List_of_HTTP_status_codes 
    if (this.status === 200) {
        const responseText = req.responseText;
    } else {
        console.log('Something is probably wrong with the url');
    }
});

req.addEventListener('error', function () {
    console.log('Server error like timeout');
});

// initializes a request with an http method
req.open("GET", url);
// Sends the request 
req.send();