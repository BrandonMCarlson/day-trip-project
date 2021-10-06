"Use Strict"; 

// day trip project for our first project
// create day trip planner that will randomly choose a destination/restaurant/mode of travel/extra activity

let destinations = ['Las Vegas', 'Chicago', 'New York', 'Seattle']
let restaurant = ['Steakhouse', 'Seafood', 'Asian cuisine', 'Mexican']
let travelMode = ['Car', 'Plane', 'Train',]
let extraActivity = ['Live Performances', 'Casinos', 'Scenic views', 'Tours']

let randomDest = destinations[Math.floor(Math.random() * destinations.length)];
let randomFood = restaurant[Math.floor(Math.random() * restaurant.length)];
let randomTravel = travelMode[Math.floor(Math.random() * travelMode.length)];
let randomActivity = extraActivity[Math.floor(Math.random() * extraActivity.length)];

// prompt with user input per each random selection until user is satisfied.

let results = (`${randomDest} is your destination. You will be eating at a ${randomFood} restaurant. You will be traveling via a ${randomTravel}. After your dinner you can enjoy ${randomActivity}`); 

alert(results); 

let isUserFinished = false; 

while(isUserFinished === false){
    let userInput = prompt("Is this okay for your trip?");
    if (userInput === "yes"){
        isUserFinished = true;
    }else if (userInput === "no") {
         randomDest = destinations[Math.floor(Math.random() * destinations.length)];
         randomFood = restaurant[Math.floor(Math.random() * restaurant.length)];
         randomTravel = travelMode[Math.floor(Math.random() * travelMode.length)];
         randomActivity = extraActivity[Math.floor(Math.random() * extraActivity.length)];
    }
    alert(results);
} 

console.log(results); 


//prompt inside a while loop



