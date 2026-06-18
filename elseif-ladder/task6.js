function calculateTax(salary)
{
    if(salary<250000)
    {
        console.log("No Tax")
    }
    else if(salary>=250000 && salary<=500000)
    {
        console.log('5% tax')
    }
    else if(salary>=500001 && salary<=1000000)
    {
        console.log('10% tax')
    }
    else
    {
        console.log('30% tax')
    }
}
calculateTax(300000);