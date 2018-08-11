
"use:strict";
//arr=[1,2,3,4,5,6,7];
let userInput=prompt("Enter Your Number:");

let arr = [];
for( let i=1; i<=userInput;i++){
    arr.push(i);
}

console.log(arr);

// here please start your solution
// using closures, functions and (map,filter,reduce)
//const divisibleFactory = function(z) 

function divisibleFactory(z){
return function() {
  return arr.filter((numberFromArray) =>{
return numberFromArray % z ==0;
  });
} 
return function(n){
  return arr.filter((test) =>{
    return test +n ;
  })

}
}
    

const Mod3 = divisibleFactory(3);
const Mod10 = divisibleFactory(10);
const Mod21 = divisibleFactory(21);



const add5 = divisibleFactory(5);
const add10 = divisibleFactory(10)

console.log("Add5",add5());
console.log("Add10",add10());


console.log("Mod By 3:",Mod3());
console.log("Mod By 10:",Mod10());
console.log("Mod By 21:",Mod21());

let divisibleNumbersLength =[];
let i=1;
    while (i<=30){
      divisibleNumbersLength.push(divisibleFactory(i)().length);
      i++;
      }
    console.log(divisibleNumbersLength); 




