const l1 = 4;
const l2 = 4;
const l3 = 2;

if (l1 == l2 && l2 == l3){ 
        console.log('equilateral');
}

else if ( (l1 < l2 && l2 < l3) || (l3 < l2 && l2 < l1) ){
        console.log('scaleno');
    }

else if ( (l1 == l2 && l2 != l3) || (l1 != l2 && l2 == l3) ){
    console.log('isosceles');
}
else{
        console.log('none');
}

