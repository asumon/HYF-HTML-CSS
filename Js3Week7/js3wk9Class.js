//Q1
var bunny = {
    lovesCarrots: true,
    f: function () {
      return this.lovesCarrots;
    }
  }
  
  console.log("Q1",bunny.f())
  // True (Rules-1)

//Q2
var person = {
    firstName: "Penelope",
    lastName: "Barrymore",
    getName: function () {
      return this.firstName + " " + this.lastName;
    }
  }
  
  console.log("Q2",person.getName())
//Penelope Barrymore  (Rules-2)



  //Q3

  var o = {
    prop: 37,
    f: function() {
      return this.prop;
    }
  };
  console.log("Q3",o.f());
  
  //
  

  //Q4

  var golfGames = {
    tournament: "The Masters",
    players:
    [
      {name:"T. Woods", age:37},
      {name:"P. Mickelson", age:43}
    ],
    showAllGames: function () {
      currObject = this;
      this.players.forEach (function (player) {
        console.log("Q4",player.name + ' is playing at ' + currObject.tournament);
      })
    }
  }
  
  golfGames.showAllGames();

  //Ans : T.Woods The Masters 

  //q5

  var player1 = {
    firstName: "Jack",
    lastName: "Black",
    getName: function () {
      return this.firstName + " " + this.lastName;
    }
  }
  
  var player2 = {
    firstName: "Bunny",
    lastName: "Rabbit",
    getName: function () {
      return this.firstName + " " + this.lastName;
    }
  }
  
  var game = {
    players: [],
  
    listPlayers: function () {
      this.players.forEach(function (player) {
        console.log("Q5",player.getName());
      });
    }
  }
  
  game.players.push(player1, player2);
  game.listPlayers();

  //Q6

  function setBodyTextColor(color) {
    this.body.style.color = color;
  }
  
  document.setBodyTextColor = setBodyTextColor;
  document.setBodyTextColor("green");
  document.setBodyTextColor("blue");
  
  function getBodyTextColor(){
    return this.body.style.color;
  }
  
  document.getBodyTextColor = getBodyTextColor;
  console.log("Q6",document.getBodyTextColor());

  //document is a object 
  //getBodyTextColor is function, and this. is (2.3)
  // return 

  //Q7

  var Counter = {
    count: 0,
    add: function(){
      this.count++;
    }
 }
 
 Counter.add();
 console.log("Q7",Counter.count);
 var addToCount = Counter.add;
 addToCount();
 console.log("Q7",Counter.count);

 // following 2.1  /2.3

 //Q8

 var Counter = {
    count: 0,
    add: function(){
      this.count++;
    }
  }
  
  Counter.add();
  console.log("Q8",Counter.count);
  
  var AnotherCounter = {};
  AnotherCounter.count = Counter.count;
  AnotherCounter.add = Counter.add;
  AnotherCounter.add();
  
  console.log(AnotherCounter.count);
  console.log(Counter.count)
  
  var YetAnotherCounter = Counter;
  Counter.add();
  console.log(YetAnotherCounter.count)