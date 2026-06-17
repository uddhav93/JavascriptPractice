function checkMarks(mark)
{
    if(mark>=95)
    {
        console.log('Excellent')
    }
    if(mark<=94 && mark>=70)
    {
        console.log("Good")
    }
    if(mark<=69 && mark>=40)
    {
        console.log('Average')
    }
    else
    {
        console.log("Need Improvement")
    }
}
checkMarks(56)