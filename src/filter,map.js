//1

var array = ["lone", "frans", "karl", "ingrid", "ost", "ole"];


var shortNameArray = array.filter(function(array){
   return array.length <=3; 
});


console.log("Originale array:")
array.forEach(n=> console.log(n) )

console.log("arrays med navne på under 4 bogstaver:")
shortNameArray.forEach(n=> console.log(n) )

//2 
let map = array.map(n=> n.toUpperCase())

console.log(map)

//3 
var arrayOfNames = ["jens", "karl", "ole", "troels"]

var newArrayOfNames = arrayOfNames.map(function(name){
    return "<li>" + name + "</li>"
})

newArrayOfNames.unshift("<ul>")
newArrayOfNames.push("<ul>")

let stringArray = newArrayOfNames.join("");

console.log(stringArray)

//4
var cars = [
  { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
  { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
  { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
  { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
  { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
];

console.log("biler produceret efter 1999:")
var newCars = cars.filter(function(cars){
    return cars.year>1999
})

console.log(newCars)

console.log("volvobiler")
var volvoCars = cars.filter(function(cars){
    return cars.make=="Volvo"
})

console.log(volvoCars)

console.log("biler under 5000")
var cheapCars = cars.filter(function(cars){
    return cars.price<5000
})

console.log(cheapCars)