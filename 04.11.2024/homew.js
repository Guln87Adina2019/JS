let a = 10, b = 10; с = 12;
let isStudent = true;
let isAlumni = true;//выпускник немесе түлек
let san = 0;//false

console.log("San:", !san); // San:true

if (a = "") {
    console.log("Бос жол");
}
else {
    console.log("a-да мән бар");
}

console.log(!isStudent);
// ==(тең)
console.log(a == b);

// console.log(a==b);//true
//== (тең емес)
console.log(a != b); //false

//>
console.log(a > b); //false

//<
console.log(a < b); //false

//>(үлкен немесе тең)
console.log(a >= b); // 9>=10false

//>=(кіші немесе тең)
console.log(a <= b); // 9<=10true

//&&(және) екі шарттың екеуі де true болған жағдайда,true қайтарады
console.log((a > b)) && ((c > a)); // 9>10(false) 12>9(true) =>false

//||(немесе) екі шарттың кемінде біреуі ғана true болған жағдайда,true қайтарады
console.log((a > b)) || ((c > a)); // 9>10(false) 12>9(true) =>true










//Күрделі өрнек 
let age = 20, hasTicket = true, isVip = false;

if ((age >= 18 && hasTicket) || isVip) {
    console.log("Сізге кіруге болады!");
}
else {
    console.log("Сізге кіруге тыйым салынады!");
}

// Нәтиже:Сізге кешке кіруге болады!

// updated