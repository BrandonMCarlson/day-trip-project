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

let results = (`${randomDest} is your destination. You will be eating at a ${randomFood} restaurant. You will be traveling via a ${randomTravel}. After your dinner you can enjoy ${randomActivity}`); 
console.log(results);
// function getFood[]










// function getTravel[]











// function getActivity[]