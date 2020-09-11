
//a
var boys = ["Peter", "lars", "Ole"];
var girls = ["Janne", "hanne", "Sanne"];

//b
var all = boys.concat(girls);

//c
var string = all.join();
console.log(string);
var string2 = all.join("-");
console.log(string2);

//d
all.push("Lone", "Gitte")
//e
all.unshift("Hans", "Kurt")

console.log(all)

//f
all.shift("Hans")
//g
all.pop("Gitte")

console.log(all)

//h 
all.splice(3, 2)
console.log(all)

//i
all.reverse()
console.log(all)

//j
all.sort()
console.log(all)

//l

let map = all.map(n=> n.toUpperCase())

console.log(map)


//m



function filterName(nameOfArray, index, letter) {
    var filteredNames = all.filter(function(word) {
     return word[index] === letter;
    });
    return filteredNames 
}

var loneArray = filterName(all, 0, "L")
var larsArray = filterName(all, 0, "l")
var loneOgLarsArray = loneArray.concat(larsArray)
console.log(loneOgLarsArray)




