function checkVoting(age,isCitizen)
{
    if(age>=18)
    {
        if(isCitizen)
        {
            console.log("Eligible to vote")
        }
    }
    else
    {
        console.log('Not Eligible to vote')
    }
}
checkVoting(22,true)