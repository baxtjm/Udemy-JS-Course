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

/*
var johnHeight = 172;
var johnAge = 26;

var friendHeight = 29;
var friendAge = 165;

var johnScore = johnHeight + (5 * johnAge);
var friendScore = friendHeight + (5 * friendAge);

j
if (johnScore > friendScore) {
    console.log("Johns score is higher!");
} else if (johnScore === friendScore) {
    console.log("Scores are the same");
} else {
    console.log("Friend's score is higher!");
}



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
*/















/*
//lecture: Functions

function calculateAge(yearOfBirth) {
    var age = 2016 - yearOfBirth;
    return age;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1969);
var ageMary = calculateAge(1948);
//console.log(ageMary);

function yearsUntilRetirement(name, year) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    
    if (retirement > 0) {
    console.log(name + ' retires in ' + retirement + ' years.');
    } else {
    console.log(name + ' is already retired.');
    }
}



yearsUntilRetirement('John', 1990);
yearsUntilRetirement('Mike', 1969);
yearsUntilRetirement('Mary', 1948);

*/

/*
//lecture: Statements and Expressions

function somefun(par) {
    
}

var somefun = function(par) {
    
}


//Expressions
3 + 4;
var x = 3;



//statements
if (x === 0) {
    //do something
}

*/

//Lecture: Arrays 
/*
var names = ['John', 'Jane', 'Mark'];
var years = new Array(1990, 1969, 1948);

console.log(names[2]);
names[1] = 'Ben';
console.log(names);

var john = ['John', 'Smith', 1969, 'teacher', false];

john.push('blue');
john.unshift('Mr.');
john.pop();
john.shift();
console.log(john);

////when an item is not in an array it returns -1
if (john.indexOf('designer') === - 1) {
    console.log('John is not a teacher');
}

*/


// Lecture: Objects
/*
var john = {
    name: 'John', 
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher', 
    isMarried: false
};

console.log(john.lastName);
console.log(john['lastName']);

var xyz = 'job';
console.log(john[xyz]);

john.lastName = 'Miller';
john['job'] = 'programmer';

console.log(john);

var jane = new Object();
jane.name = 'Jane';
jane.lastName = 'Smith';
jane['yearOfBirth'] = 1969;
jane['job'] = 'retired';
jane['isMarried'] = true;

console.log(jane);
*/

// Lecture: Objects and Methods
/*
var john = {
    name: 'John', 
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher', 
    isMarried: false,
    family: ['Jane', 'Mark', 'Bob'],
    calculateAge: function(yearOfBirth) {
        return 2016 - this.yearOfBirth;
    }
    
};




var john = {
    name: 'John', 
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher', 
    isMarried: false,
    family: ['Jane', 'Mark', 'Bob'],
    calculateAge: function(yearOfBirth) {
        this.age = 2016 - this.yearOfBirth;
    }
    
};


john.calculateAge();
console.log(john);

*/




























// Lecture: Loops and Iterations

//For Loop

//for (var i = 0; i < 10; i++) {
//    console.log(i);
//}
//


//var names = ['John', 'Jane', 'Mary', 'Mark', 'Bob'];
//
////for (var i = 0; i < names.length; i++) {
////    console.log(names[i]);
////}
////
////for (var i = names.length - 1; i >= 0 ; i--) {
////    console.log(names[i])
////}
//
//
//
//// while loop
//
////var i = 0
////while(i < names.length) {
////    console.log(names[i]);
////    i++;
////}
////
//
//for (var i = 1; i < 6; i++) {
//    
//    
//    if (i === 3) {
//        break;
////        continue;
//    }
//    
//    console.log(i);
//}
//
//
//
//



//Coding Challenge 2

//var years = [2001, 1985, 1994, 2014, 1973];
//var ages = [];
//
//for (var i = 0; i < years.length; i++){
//    ages[i]= 2016 - years[i];
//}
//
////console.log(ages);
//
//for (i = 0; i < ages.length; i++)
//    if (ages[i] >= 18) {
//        console.log('Person ' + ages[i] +  ' years old, as if of full age.');
//    } else {
//        console.log('Person '  + ages[i] + ' years old, as is NOT of full age');
//    }

/*
var years = [2001, 1985, 1994, 2014, 1973];

function printFullAge(years) {
   var ages = [];
   var fullAges = [];
var ages = [];

for (var i = 0; i < years.length; i++){
    ages[i]= 2016 - years[i];
}

//console.log(ages);

for (i = 0; i < ages.length; i++) {
    

    if (ages[i] >= 18) {
        console.log('Person ' + ages[i] +  ' years old, as if of full age.');
        fullAges.push(true);
    } else {
        console.log('Person '  + ages[i] + ' years old, as is NOT of full age');
        fullAges.push(false);
    }
}
   return fullAges; 
}

var full_1 = printFullAge(years);
var full_2 = printFullAge([2012, 1915, 1999])

*/


























































