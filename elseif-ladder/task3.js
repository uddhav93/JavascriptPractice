function ticketCategory(age)
{
    if(age<12)
    {
        console.log('Child')
    }
    else if(age>=12 && age<=17)
    {
        console.log('Teen')
    }
    else if(age>=18 && age<=59)
    {
        console.log('Adult')
    }
    else
    {
        console.log('Senior')
    }
}
ticketCategory(34)