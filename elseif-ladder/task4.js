function checkBMI(bmi)
{
    if(bmi<18.5)
    {
        console.log('underWeight')
    }
    else if(bmi>=18.5 && bmi<=24.9)
    {
        console.log('Normal')
    }
    else if(bmi>=25 && bmi<=29.9)
    {
        console.log('Overweight')
    }
    else
    {
        console.log('Obese')
    }
}
checkBMI(25.4)