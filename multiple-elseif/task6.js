function checkBMI(bmi) 
{    
    if (bmi > 24.9) 
    {
        console.log("overweight")
    }
    if(bmi>=18.5 && bmi<=24.9)
    {
        console.log('Normal')
    }
    else
    {
        console.log("underweight")
    }
}
checkBMI(20)