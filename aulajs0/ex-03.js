const number = -10;
//if
if (number > 0) console.log('this number is positive');

//if..else
if (number > 0){
    console.log('This number is positive');
}
else if (number < 0){
    console.log('This number is negative');
}
else{
    console.log('This number is negative or zero');
}
console.log("")
//switch
const value1 = 10;
const value2 = 5;
const operator = '-'; // +, -

switch(operator){
    case '+':
        console.log(value1 + value2);
        break
    case '+':
        console.log(value1 - value2);
        break
    default:
        console.log('This operator is invalid');

    }
    console.log("")

// while
let flag = 0;

while (flag < 10){
    console.log(flag)
    flag++;
}

// do..while
flag = 0;

do {
    console.log(flag);
    flag++;
}
while (flag < 10);

// for
for (let flag = 0; flag < 10; flag++){
    console.log(flag);
}
