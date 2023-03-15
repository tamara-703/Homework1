//Hamster
class Hamster{
    constructor(name)
    {
        this.name = name;
        this.owner = '';
        this.price = 15
    }

    wheelRun()
    {
        console.log("Squeak squeak");
    }

    eatFood()
    {
        console.log("Nibble nibble");
    }

    getPrice()
    {
        return this.price;
    }
}

class Person{
    constructor(name)
    {
        this.name = name;
        this.age = 0;
        this.height = 0;
        this.weight = 0;
        this.mood = 0;
        this.hamsters = [];
        this.bankAccount = 0;

    }

    getName()
    {
        return this.name;
    }

    getAge()
    {
        return this.age;
    }

    getWeight()
    {
        return this.weight;
    }

    greet()
    {
        console.log(`Hello ${this.name}`);
    }

    eat()
    {
        this.weight++;
        this.mood++;
    }

    exercise()
    {
        this.weight--;
    }

    ageUp()
    {
        this.age++;
        this.height++;
        this.weight++;
        this.mood--;
        this.bankAccount += 10;
    }

    buyHamster(hamster)
    {
        this.hamsters.push(hamster);
        this.mood += 10;
        this.bankAccount -= hamster.getPrice();
        hamster.owner = "Tamara"

        let inDebt = this.bankAccount;
        if(this.bankAccount <= 0)
        {
            inDebt = "broke";
        }
        console.log(`${this.name} now has a pet!\nbankAccount:$${inDebt}\nAge:${this.age}\nPet owner: ${hamster.owner}`);
    }
}

let newHamster = new Hamster("Charlie");

let newPerson = new Person("Timmy");
newPerson.greet();
let keepCount = 30;

while(keepCount > 0)
{
    newPerson.eat();
    newPerson.ageUp();
    keepCount--;
}

newPerson.buyHamster(newHamster);
