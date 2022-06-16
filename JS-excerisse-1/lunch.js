const people = ["Mike", "ken", "Tracey", "Louise", "Pedro"]

function buyLunch(people) {
 let numberPeople = people.length;
 let randomIndex = Math.random() * numberPeople;
 let personLunch = Math.floor(randomIndex);
 
 return people[personLunch];
}

console.log(buyLunch(people));