function getGrade(mark)
{
    if(mark>=90)
    {
        console.log("A")
    }
    if(mark<=89 && mark>=75)
    {
        console.log("B")
    }
    if(mark<=74 && mark>=50)
    {
        console.log("C")
    }
    if(mark<50)
    {
        console.log("Fail")
    }
}
getGrade(68)