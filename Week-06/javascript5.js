var days =prompt("Enter Your Desire Date to meet:");
var newDate = new Date(Date.now()+days*24*60*60*1000);

document.write("Today is:",new Date());
document.write('</em><br/>');
document.write("We are meeting on:",newDate);

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
document.write('</em><br/>');
document.write('</em><br/>');
document.write("HomeWork-2.3");
document.write('</em><br/>');
var n = 6;
var lineOfStars = '';

for(var i = 1; i <= n; i++){
    
  for(var j = 1; j <= i; j++){
           
       lineOfStars += '*' ;
       document.write('*');
  }
lineOfStars += '\n' ;   
document.write('<br>');
}

console.log(lineOfStars);


