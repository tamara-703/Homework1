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




////////////////////////////////
// Methods, Revisited
////////////////////////////////


////////////////////////////////
// Where is Waldo
////////////////////////////////


////////////////////////////////
//  Excited Kitten
////////////////////////////////


////////////////////////////////
//  Find the Median
////////////////////////////////
