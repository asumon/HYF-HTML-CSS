var hyF06 = ['Zeeshan', 'Anas', 'Sajid', 'Anuradha',
    'Gary', 'Marco', 'Ehsan', 'Haretha', 'Krishna', 'Mohammad Azizul Huq',
    'Mohammad Mosiur Rahman', 'Samara', 'Vignesh', 'Zoey Zou',
    'Mohammad Subhiyeh'
];


document.write(hyF06);
document.write("<hr>");
console.log(hyF06);

function generatePair(arr){
for (i = 0; i < 7; i++) {
    var firstRandomArray = Math.floor(Math.random() * hyF06.length);

    if (firstRandomArray === hyF06.length - 1) {
        console.log('here we got the last element')
        firstRandomArray = firstRandomArray - 1;
        var randomName = hyF06.splice(firstRandomArray, 2);
        console.log(hyF06.length);
        console.log(randomName);
        console.log(hyF06);
        document.write("<hr>");
        document.write(randomName);
        document.write("<hr>");

    } else {
        var randomName = hyF06.splice(firstRandomArray, 2);
        console.log(hyF06.length);
        console.log(randomName);
        document.write(randomName);
        document.write("<hr>");
        console.log(hyF06);
    }

    if (hyF06.length === 1) {
        randomName = hyF06.splice(0, 1);
        document.write(randomName);

    }
}
}
document.getElementById("clickBtn").addEventListener("click", generatePair);