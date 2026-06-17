function checkDay(day)
{
    if(day=="saturday"||day=='sunday')
    {
        console.log('Weekend')
    }
    if(day=='monday'||day=='tuesday'||day=="wednesday"||day=='thursday'||day=='friday')
    {
        console.log('Weekday')
    }
    else
    {
        console.log('Invalid Day')
    }
}
checkDay('wednesday')