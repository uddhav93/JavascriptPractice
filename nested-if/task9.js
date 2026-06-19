function gymAccess(age,membership)
{
    if(age>=16)
    {
        if(membership)
        {
            console.log('Access Granted')
        }
        else
        {
            console.log('Membership Expired')
        }
    }
    else
    {
        console.log('Minimum age requirement nott met')
    }
}
gymAccess(21,true)
