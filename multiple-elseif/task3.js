function calculateTicketPrice(age)
{
    if(age<5)
    {
        console.log('Free')
    }
    if(age>=5 && age<=12)
    {
        console.log('Half Price')
    }
    else
    {
        console.log('Full price')
    }
}
calculateTicketPrice(12)