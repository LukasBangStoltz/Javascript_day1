var cars = [
    {id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000},
    {id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900},
    {id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000},
    {id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799},
    {id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799}
];

var sqlCars = cars.filter(n => n.year > 1999).map(x => 'INSERT INTO cars (id,year,make,model,price) VALUES (' + x.id +"," + x.year +","+ x.make + ","+x.model + ","+x.price + ") ")

console.log(sqlCars.join(""))