function movieEntry(age,hasTicket)
{
    if(age>=13)
    {
        if(hasTicket)
        {
            console.log('Entry Allowed')
        }
        else
        {
            console.log('Buy a Ticket')
        }
    }
    else
    {
        console.log('Age restricted')
    }
}
movieEntry(21,true);