function checkScolarship(mark,attendence)
{
    if(mark>=80)
    {
        if(attendence>=90)
        {
            console.log('Scolarship Approved')
        }
        else
        {
            console.log("Attendence too low")
        }
    }
    else
    {
        console.log('Marks Too low')
    }
}
checkScolarship(80,97)