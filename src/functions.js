function add(n1, n2){
   return n1 +n2;
}


var sub = function(n1,n2){
  return n1 - n2
} 

var mul = function (n1,n2){
    return n1 * n2
}


var cb = function(n1,n2, callback){
   if (typeof n1 === "number" && typeof n2 === "number" && typeof callback === "function"){
  return "Result from the two numbers: "+n1+"+"+n2+"="+callback(n1,n2);
   }else{
       throw new exeption("forfra")
   }
};

//1 - vil sammenligge 1 og 2
console.log(add(1,2))

//2 - printer funktionsnavnet
console.log(add)

//3 - Tager kun de to første tal
console.log(add(1,2,3))

//4 - nan
console.log(add(1))

//5 - cb kalder på to variable og en funktion
console.log(cb(3,3,add))

//6 - Samme som 5'eren, men fejl da cb funktionen regner med at der bliver brugt + og ikke minus
console.log( cb(4,3,sub) );

//7 vi kan ikke kalde metoden direkte i form parametrene
//console.log(cb(3,3,add()));

//8  
try {
    console.log(cb(3, "hh", add))// What will it print
// answer = 3 + hh = 3hh
} catch (e) {
    console.log("det skal være tal og eller en function");
}
//---
//4
//---


console.log(cb(3,3,mul));

console.log(cb(4,2,function (n1,n2){return n1/n2}));