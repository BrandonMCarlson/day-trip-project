"Use Strict"; 

// day trip project for our first project
// create day trip planner that will randomly choose a destination/restaurant/mode of travel/extra activity

let destinations = ['Las Vegas', 'Chicago', 'New York', 'Seattle']
let restaurant = ['Steakhouse', 'Seafood', 'Asian cuisine', 'Mexican']
let travelMode = ['Car', 'Plane', 'Train',]
let extraActivity = ['Live Performances', 'Casinos', 'Scenic views', 'Tours']
// the above arrays allow for the program to have options to choose from when getting randoms through the process below.

let randomDest = destinations[Math.floor(Math.random() * destinations.length)];
let randomFood = restaurant[Math.floor(Math.random() * restaurant.length)];
let randomTravel = travelMode[Math.floor(Math.random() * travelMode.length)];
let randomActivity = extraActivity[Math.floor(Math.random() * extraActivity.length)];
// the above is allowing random selection from the arrays above between lines 6 and 9. this is one of the most important parts of this program.


// prompt with user input per each random selection until user is satisfied.

let results = (`${randomDest} is your destination. You will be eating at a ${randomFood} restaurant. You will be traveling via a ${randomTravel}. After your dinner you can enjoy ${randomActivity}`); 
// line 20 is the results line. this brings the 4 random results and places them in the sentences that I have layed out.

alert(results); 
// alert function allows the randomly chosen arrays to be displayed to the user.

let isUserFinished = false; 

while(isUserFinished === false){
    let userInput = prompt("Is this okay for your trip?");
    if (userInput === "yes"){
        isUserFinished = true;
    }else if (userInput === "no"){
         randomDest = destinations[Math.floor(Math.random() * destinations.length)];
         randomFood = restaurant[Math.floor(Math.random() * restaurant.length)];
         randomTravel = travelMode[Math.floor(Math.random() * travelMode.length)];
         randomActivity = extraActivity[Math.floor(Math.random() * extraActivity.length)];
         let newResults = (`${randomDest} is your destination. You will be eating at a ${randomFood} restaurant. You will be traveling via a ${randomTravel}. After your dinner you can enjoy ${randomActivity}`);
         alert(newResults);
         console.log(newResults);
    } 
} 
// i added a new line for "newResults" as i was having an issue with the information not updating correctly when a user selects "no". Now the program works as intended and you can switch your day trip is wanted by the user.
// the above is a while loop. this is where the user is prompted and asked if they like the options that were randomly selected for them
// after the initial selection, if the user selects "no" then that will prompt the program to get a new selection of random options. These will be displayed before asking the user again if it is okay
// if the user does select yes, it will then alert the trip they are having and will also then console log the results





