console.log("In script.js");


let myBirtday = 'August 27th';  
//declaration = assignment

let month = 'August';
let day = '27th';
console.log(`My birthday is ${month} ${day}`); //console.log variable interpolation. 

//camelCase
//hoursToDrive //use this

//SCREAMING_SNAKE_CASE
//HOURS_TO_DRIVE

//snake_case
//hours_to_drive it works but camelCase is preferred

//kebob case, not used in JS
//hours-to-drive


let birthdayInfo ={
    //key: value,
    month: 'August',
    date: '27th', 
    friends: [
        {
            name: 'Tina',
            age: '39'
        },
        {
            name: 'Bobby',
            age: '40'
        }
    ],
    attendees:[
        {
            person:'john',
            relationship: 'friend',
            age: 32,
            wearing: ['shirt', 'hat', 'pants']
            /// how to get to second item attendee is wearing => birthdayInfo.attendees[0].attendees.wearing[1]
        }
    ]
    }
////////This needs work

 for(let person of birthdayInfo.attendees){
         for (let clothing of person.wearing){
             console.log(`${person} is wearing ${clothing}`)
         }
     }

 //console.log(`My birthday is ${birthdayInfo.month} ${birthdayInfo.date}`)



/*
-Declaring a variable stores information on a computer with a label
-declaring defines scope. global vs local

-evaluation- computers computing, performing an action
-expressions are a bit of code that can be evaluated







*/



let person={
    name: 'John',
    relationship: 'friend',
    age: 24,
    wearing:['shirt', 'hat', 'pants']
};

//Input: a person
//Output: boolean (true/false)
function canTheyDrinkAtWedding(human){
    if(human.age >= 21){
        return true;
    }else{
        return false
    }
};

canTheyDrinkAtWedding(person);

let canJohnDrink = canTheyDrinkAtWedding(person);
console.log(canJohnDrink);

let canAnnieDrink = canTheyDrinkAtWedding({
    name: 'Annie',
    age: 8
});

console.log('canAnnieDrink', canAnnieDrink)



/////////////Explain the code below


////A function called isWordSilly is declared with a parameter called aWord.
function isWordSilly(aWord) {
//Inside the function the variable sillyWords is declared and an array of strings is assigned.   
    let sillyWords = ['squeegee', 'barnacle', 'barbecue', 'quagmire', 'bog', 'loofah'];
//There is a for loop that will iterate through the sillyWords array. If the argument matches any of the words in the sillyWords array, true will be returned. If the argument does not match, return false.
    for (let oneSillyWord of sillyWords){
      if (oneSillyWord === aWord) {
        return true;
      }
    }
    return false;
  } 


console.log(isWordSilly('banana'));






