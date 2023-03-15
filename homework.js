////////////////////////////////
// Easy Going
for(let i = 1; i <= 20; i++)
{
    console.log(i);
}


////////////////////////////////
// Get Even
for(let count = 0; count <= 200; count++)
{
    if(count % 2 == 0)
    {
        console.log(count);
    }
}


////////////////////////////////
// Fizz Buzz
for(let fizbuz = 1; fizbuz <= 100; fizbuz++)
{
    if(fizbuz % 3 == 0 && fizbuz % 5 == 0)
    {
        console.log("FizzBuzz");
    } else if (fizbuz % 3 == 0 && fizbuz % 5 !== 0)
    {
        console.log("Fizz")
    } else if (fizbuz % 5 == 0 && fizbuz % 3 !== 0)
    {
        console.log("Buzz")
    } else
    {
        console.log(fizbuz);
    }
}


////////////////////////////////
// Wild Wild Life
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"];
const sharky = ["Sharky", "shark", 20, "Left Coast"];
const plantee = ["Plantee", "plant",  5000 , "Mordor"];
const porgee = ["Porgee", "Porg", 186, "Ahch-To"];
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"];

//1. Change Plantee's age to reflect her being a year older
for(let i = 0; i < plantee.length; i++)
{
    if(plantee[i] === 5000)
    {
        plantee[i] += 1;
        console.log(`Plantee is now ${plantee[i]} years old.`);
    }
}

//2. Change Wolfy's hometown from "Yukon Territory" to "Gotham City"
wolfy[3] = "Gotham City";

//3. Give D'Art a second hometown by adding "Hawkins"
dart.push("Hawkins");

//4. Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the wolfyarray and replace it with "Gameboy".
wolfy[0] = "Gameboy";

////////////////////////////////
// Yell at the Ninja Turtles
let ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];

for(element of ninjaTurtles)
{
    console.log(element.toUpperCase());
}



////////////////////////////////
// Methods, Revisited
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

for(let count = 0; count < favMovies.length; count++)
{
    if(favMovies[count] === 'Titanic')
    {
        console.log(favMovies[count]);
    }
}

//sort the array in alphabatical order
favMovies.sort();
console.log(favMovies);

//remove last element of the array
favMovies.pop();

//add new element to the end of the array
favMovies.push("Guardians of the Galaxy");

//display the array from last to first element
favMovies.reverse();
console.log(favMovies);

//remove the first element of the array
favMovies.shift();

//add an element to the beginning of the array
favMovies.unshift("Joker");
console.log(favMovies);

for(let fav = 0; fav < favMovies.length; fav++)
{
    if(favMovies[fav] === 'Django Unchained')
    {
        favMovies.splice(fav,1,'Avatar');
    }
}

console.log(favMovies);

let slicedArray = [];
let halfOfArray = Math.ceil(favMovies.length / 2);


slicedArray = favMovies.slice(halfOfArray);

console.log(slicedArray);



////////////////////////////////
// Where is Waldo
////////////////////////////////


////////////////////////////////
//  Excited Kitten
////////////////////////////////


////////////////////////////////
//  Find the Median
////////////////////////////////
