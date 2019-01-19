//call back function
function imprimirNummero(x){
    console.log(x);
  }

  function imprimirTowNumbers(var1 ,var2){
    var2(var1);
  }

  imprimirTowNumbers(2, imprimirNummero);

//Math Object
var nume = Math.floor(10.9);
console.log(nume);


//math random
//*********************************************************** */
  function gradeTheStudent () {
    var grades = ['Master', 'Good', 'Acceptable', 'Average', 'Poor', 'Fail'];

    var randomNumber = Math.random();            // Random decimal [0.0 - 1.0)
    randomNumber = randomNumber * grades.length; // Random decimal [0.0 - 6.0)
    randomNumber = Math.floor(randomNumber);     // Random integer [0   - 5]

    return grades[randomNumber];
  }

  var myGrade = gradeTheStudent();
  console.log(myGrade);

// practicin abstraction
    let newQuiz= Math.floor(Math.random()* 101) + "+" + Math.floor(Math.random() * 101);
    console.log(newQuiz);

    // another way

    function createNewQuiz(limit){
      return Math.floor(Math.random()*(limit+1));
    }

    console.log(createNewQuiz(100))
//Anonynos functions
//********************************************************************** */
  var anon = function(){
    console.log("An0nym0us Funct10n");
  }

  anon();

//************************************* */
// An0nym0us Funct10n


  function doSomethingWithAFunction(name, functionToCall){
    functionToCall(name);
  }
                                        // Anonymous Function
  doSomethingWithAFunction("Ironhacker", function(someParameter){
    console.log("Hello " + someParameter);
  });
  // => Hello Ironhacker
                                        // Anonymous Function
  doSomethingWithAFunction("Ironhacker", function(someParameter){
    console.log("Goodbye " + someParameter);
  });
  // => Goodbye Ironhacker

                              // Anonymous Function
  doSomethingWithAFunction(2, function(someParameter){
    console.log(5 + someParameter);
  });
  // => 7


// no returns

function noReturs(){
  console.log("nada");
}
let reciveReturn= noReturs();
console.log(reciveReturn);
//will pirnt undefined


// We can use return in differents parts
function avg(array) {
if (array.length === 0 ) {
  return;
}

for (var sum=0, i=0; i < array.length; i++) {
  sum += array[i];
}
return sum/array.length;
}

console.log(avg([]));

//Function expressions
// First JS evaluate the expression in the actual parameter, the result
// will be the actual parameters
  var ratings = [ avg([2,3,4]), avg([1,3,5]), avg([1,1,2,2]) ]
  // ratings === [3, 3, 1.5]
  avg(ratings);
  // => 2.5

//*******************************************************************
//*************************************************************** */
//Reuse code: We can call a function as many times as we need it in our code,     but we only need to define how it works once :)
//Abstraction is a technique that allows us to think at higher, more abstract   levels. if we know what Math.floor() does, we can use it happily in our       code… we don’t have to worry about how math.floor() performs it’s magic.      It’s abstracted from us
//Separation of Concerns: Functions allow us to separate a big problem into     many smaller ones.
//Single Responsibility Principle: A function has to do just one thing, and     the name of the function has to be very clear so you can identify what is     doing just reading the name.

var add = function (a) {
return function (b) {
  return a + b;
};
};

var add2 = add(2)(3);

console.log(add2)