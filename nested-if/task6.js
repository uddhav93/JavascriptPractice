function examAccess(isRegistered,feePaid)
{
    if(isRegistered)
    {
        if(feePaid)
        {
            console.log('Access Granted')
        }
        else
        {
            console.log('Pay the fee')
        }
    }
    else{
        console.log('Registration required')
    }
}
examAccess(true,true);