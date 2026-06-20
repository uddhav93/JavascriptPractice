function calculator(a,b,operator)
{
    switch(operator)
    {
        case "+":
            console.log("Addition:",(a+b));
            break;
        case "-":
            console.log("Subtraction:",(a-b));
            break;
        case "*":
            console.log("Multiplication:",(a*b));
            break;
        case "/":
            console.log("Division:",(a/b));
            break;
        default:
            console.log('Invalid Operator')
    }
}
calculator(2,3,"*")