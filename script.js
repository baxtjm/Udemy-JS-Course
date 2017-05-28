// Lecture: variables
/*
var name = 'John';
console.log(name);

var lastName = 'Smith';
console.log(lastName);

var age = 26;
console.log(age);

var fullAge = true;
console.log(fullAge);
*/

// Lecture: variables 2
/*var name = 'John';
var age = 26;

//console.log(name + age);
//console.log(age + age);

var job, isMarried;

//console.log(job);

job = 'teacher';
isMarried = false;

console.log(name + ' is a ' + age + ' years old ' + job + '. Is he married?  ' + isMarried + '.');

age = 'thirty six';
job = 'driver';

console.log(name + ' is a ' + age + ' years old ' + job + '. Is he married?  ' + isMarried + '.');

//var lastName = prompt('What is the last name?');
//console.log(lastName);

alert(name + ' is a ' + age + ' years old ' + job + '. Is he married?  ' + isMarried + '.');
*/







/*
// Lecture: Operators
var now = 2016;
var birthYear = now - 26;


birthYear = now - 26 * 2;
//2016-52
//1964



console.log(birthYear);

var ageJohn = 30;
var ageMark = 30;

var ageJohn = ageMark = (3 + 5) * 4 - 6;
//ageJohn = ageMark = 26
//ageJohn = 26

ageJohn++;
ageMark *= 2;


console.log(ageJohn);
console.log(ageMark);
*/

// Lecture: if/else statements

/*
var name = 'John';
var age = 26;
var isMarried = 'yes';

if (isMarried === 'yes') {
    console.log(name + ' is married!');
} else {
    console.log(name + ' will hopefully marry soon :)');
}

isMarried = true;
/*
if(isMarried) {
    console.log('YES!');
} else {
    console.log('NO!');
}


if(isMarried) {
    console.log('YES!');
}





if (23 === '23') {
    console.log("Something to print...");
}
*/

//lecture: boolean logic and switch

/*
var age = 35;

if (age < 20) {
    console.log('John is a teenager');
} else if (age >= 20 && age < 30)  {
    console.log('John is a young man!');
}
else {
    console.log('John is a man');
}

var job = 'banker';

job = prompt('What does John do?')

switch (job) {
    case 'teacher':
        console.log('John teaches kids.');
        break
    case 'driver':
        console.log('John drives a cab in Libson.');
        break;
    case 'cop':
        console.log('John helps fight crime.');
        break;
    default: 
        console.log('John does something else.');
           }
*/


var johnHeight = 172;
var johnAge = 26;

var friendHeight = 29;
var friendAge = 165;

var johnScore = johnHeight + (5 * johnAge);
var friendScore = friendHeight + (5 * friendAge);

/*
if (johnScore > friendScore) {
    console.log("Johns score is higher!");
} else if (johnScore === friendScore) {
    console.log("Scores are the same");
} else {
    console.log("Friend's score is higher!");
}
*/

var maryHeight = 158;
var maryAge = 31;
var maryScore = maryHeight + 5 * maryAge;

if (johnScore > friendScore && johnScore > maryScore) {
    console.log('John wins the game');
} else if (friendScore > johnScore && friendScore > maryScore) {
    console.log('Friend wins the game');
} else if (maryScore > johnScore && maryScore > friendScore) {
    console.log('Mary wins the game')
} else {
    console.log("It's a draw")
}
































