// -- Calculadora -- //
function op(value1,value2,operator){

    switch(operator){
        case '+':
            console.log(value1 + value2);
            break;
        case '-':
            console.log(value1 - value2);
            break;
        case '*':
            console.log(value1 * value2);
            break;
        case '/':
            console.log(value1 / value2);
            break;
        default:
            console.log('This operator is invalid');
    }
}
op(1,2,'-')
op(2,1,'+')
op(2,6,'*')
op(24,12,'/')