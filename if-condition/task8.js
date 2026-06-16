function isLeapYear(year)
{
    if(year%4==0)
    {
        console.log('Leap Year')
    }
    if(year%4!=0)
    {
        console.log("Not a Leap Year")
    }
}
isLeapYear(2022)