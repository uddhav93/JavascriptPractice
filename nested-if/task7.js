function calculateBonus(yearsOfService,performance)
{
    if(yearsOfService>=5)
    {
        if(performance=='Excellent')
        {
            console.log('Bonus Awarded')
        }
        else
        {
            console.log('No Bonus Due to Performance')
        }
    }
    else
    {
        console.log('Not Enough Servce years')
    }
}
calculateBonus(5,'good')