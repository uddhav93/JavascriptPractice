function getGrade(mark)
{
    if(mark>=90)
    {
        console.log('A')
    }
    if(mark>=75 && mark<=89)
    {
        console.log('B')
    }
    if(mark>=50 && mark<=74)
    {
        console.log('C')
    }
    else
    {
        console.log('F')
    }
}
getGrade(59)