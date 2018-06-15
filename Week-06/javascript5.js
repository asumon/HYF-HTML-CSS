function weekName() {

	var days = document.getElementById("numberOfDays").value;
	var newDate = new Date(Date.now() + days * 24 * 60 * 60 * 1000);
	//Days,hours,Minutes,Seconds and Milliseconds(1 second=1000 MilliSeconds)
	//Counting the total Seconds
	let currentDate = new Date();

	document.getElementById("presentDate").innerHTML = currentDate;
	document.getElementById("hw1").innerHTML = newDate;
}
var btn = document.getElementById("clickBTN");
btn.addEventListener("click", function () {
	weekName();
});


/*
document.write('</em><br/>');
var student = new Object(); // Create the object
student.firstName = "Perl"; // Assign properties to the object
student.lastName = "Mohtashim";
student.address="33";
student.telephone="917";
student.postCode="2700";
student.course="jv";
student.grade="b+";

document.write("First name is : " + student.firstName + "<br>");
document.write("Last Name is : " + student.lastName + "<br>");
document.write("Address : " + student.address + "<br>");
document.write("Telephone : " + student.telephone + "<br>");
document.write("PostCode : " + student.postCode + "<br>");
document.write("Course Name : " + student.course + "<br>");
document.write("Grade : " + student.grade + "<br>");

*/
//HomeWork 2.2

let output = "";
for (let i = 1; i <= 1000; i++) {
	if (i % 3 === 0 && i % 5 === 0) {
		console.log(i + " FizzBuzz");
		//document.write(i + " FizzBuzz");
		output += "<p>FizzBuzz</p>";
	} else if (i % 3 === 0) {
		console.log(i + " Fizz");
		//document.write(i + " Fizz");
		output += "<p>Fizz</p>";
	} else if (i % 5 === 0) {
		console.log(i + " Buzz");
		//document.write(i + "Buzz");
		output += "<p>Buzz </p>";
	} else {
		console.log(i);
		output += `<p>${i}</p>`;
		//document.write(i);
		//output =i;
		//document.getElementById("HomeWork-2.2").innerHTML=i,output;

	}
}
document.getElementById("HomeWork-2.2").innerHTML = output;
document.write('</em><br/>');


//document.write('</em><br/>');
//document.write('</em><br/>');
//document.write("HomeWork-2.3");
//document.write('</em><br/>');

//HomeWork-2.3

var n = 6;
var lineOfStars = '';
for (var i = 1; i <= n; i++) {

	for (var j = 1; j <= i; j++) {

		lineOfStars += '*';
		//   document.write('*');
	}
	lineOfStars += '\n';
	lineOfStars += "<br>";
	//document.write('<br>');
}
document.getElementById("HomeWork-2.3").innerHTML = lineOfStars;
console.log(lineOfStars);


/*

let text;
var choose=document.getElementById("myHomeWork").value;
switch (choose) {
  case "A": 
    document.getElementById("HomeWork-2.3").innerHTML=homework2_3();
    break;
  case "B":
   document.getElementById("HomeWork-2.2").innerHTML=homework2_2();
    //Statements executed when the
    //result of expression matches value2
    break;
   case 3:
    //Statements executed when the
    //result of expression matches valueN
    break;
  default:
    //Statements executed when none of
    //the values match the value of the expression
    break;
}
 document.getElementById("HomeWork-2.3").innerHTML=lineOfStars;

*/
