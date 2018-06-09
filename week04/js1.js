// function randomNum(minVal, maxVal) {
//     do {
//     r = Math.random();
//     } while (r == 1);
//     return minVal+Math.floor(r*(maxVal+1-minVal));
//     }
    
if (!hyF06)
var hyF06 = ['Zeeshan Haider', 'Anas', 'Anuradha', 'Gary', 'Marco', 'Ehsan','Haretha','Krishna','Ahmad', 'Mohammad Azizul Huq','Mohammad Mosiur Rahman','Samara', 'Vignesh', 'Zoey Zou', 'Mohammad Subhiyeh'];
 
   

    // var  hyF066 = ['Zeeshan Haider', 'Anas', 'Sajid', 'Anuradha', 'Gary', 'Marco', 'Ehsan','Haretha','Krishna', 'Mohammad Azizul Huq','Mohammad Mosiur Rahman','Samara', 'Vignesh', 'Zoey Zou', 'Mohammad Subhiyeh'];

    /*var hyF06 = new Array();
    hyF06[0] = “Zeeshan”;
    hyF06[1] = “Anas”;
    hyF06[2] = “Sajid”;
    hyF06[3] = “Anuradha”;
    hyF06[4] = “Gary”;
    hyF06[5] = “Marco”;
    hyF06[6] = “Ehsan”;
    hyF06[7] = “Haretha”;
    hyF06[8] = “Krishna”;
    hyF06[9] = “Mohammad Azizul Huq”;
    hyF06[10] = “Mohammad Mosiur Rahman”;
    hyF06[11] = “Samara”;
    hyF06[12] = “Vignesh”;
    hyF06[13] = “Zoey Zou”;
    hyF06[14] = “Mohammad Subhiyeh”;
    
   console.log(hyF06);

var myArray = [];*/
        for(i=0; i < 7 ;i++){
        var firstRandomArray=Math.floor(Math.random() * hyF06.length);
        
        
        if (firstRandomArray === hyF06.length - 1 ){
            console.log('here we got the last element')
            firstRandomArray = firstRandomArray -1;
            var firstrandom=hyF06.splice(firstRandomArray,2);
            console.log(hyF06.length);
            console.log(firstrandom);
            console.log(hyF06);
            document.write("<hr>");
            document.write(firstrandom);
            document.write("<hr>");

        }
        else {
            var firstrandom=hyF06.splice(firstRandomArray,2);
            console.log(hyF06.length);
            console.log(firstrandom);
            document.write(firstrandom);
            document.write("<hr>");
            console.log(hyF06);
        }
        if (hyF06.length === 1){
            firstrandom=hyF06.splice(0,1);
            document.write(firstrandom); 

        }
        }
       





       
        // var randomArry1=Math.floor(Math.random() * hyF06.length);
        
        
        
        // console.log(first);
        // console.log(hyF06);


        // var hyF05 = hyF06;
        // secondRandomArray = Math.floor(Math.random() * hyF05.length);
        // var second = hyF05.splice(secondRandomArray,2)
        // console.log(second);
        // console.log(hyF05);
    // myArray += myArray.push(rs);
    







   /*
        hyF06.sort();
        document.write(rs);
        document.write("<hr>");
        document.write(rs1);
        document.write("<hr>");
        document.write(randomArry);
        document.write("<hr>");
        document.write(randomArry1);
     
    for(i=0;i<hyF06.length;i++)
    {
       // document.write(hyF06[i] + "<br/>");
        console.log(hyF06[i]);
    }


  
   // document.body.innerHTML = hyF06[randomNum(0, hyF06.length+1)];
    //document.body.innerHTML = hyF06[randomNum(1, hyF06.length+1)];


    /*
while 
    console.log(hyF06);

   

  var names1 = ["Sean","Kyle","Emily","Nick","Cotter","Brian","Jeremy","Kimmy","Pat","Johnny"];
  var  names = ['Zeeshan Haider','Sajid', 'Anuradha', 'Gary', 'Marco', 'Ehsan','Haretha','Krishna', 'Mohammad Azizul Huq','Mohammad Mosiur Rahman','Samara', 'Vignesh', 'Zoey Zou', 'Mohammad Subhiyeh'];
  if (names.length % 2 != 0) {
    alert("You must have an even number of names. You currently have " + names.length + " names.");
} else {
    var arr1 = names.slice(), // copy array
        arr2 = names.slice(); // copy array again

    if (arr1 = ! arr2) 
     alert ("wrong number");
     else {
    while (arr1.length) {
        var name1 =  arr1.pop(), // get the last value of arr1
            name2 = arr2[0] === name1 ? arr2.pop() : arr2.shift();
            //        ^^ if the first value is the same as name1, 
            //           get the last value, otherwise get the first

        console.log(name1 + ' gets ' + name2);
        document.write(`First member is: ${name1} and Second member is: ${name2}`)
    }}
} */