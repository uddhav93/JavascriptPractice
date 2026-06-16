function validatePassword(passowrd)
{
    let c=0;
    for(let pwd of passowrd)
    {
        ++c;
    }
    if(c>=8)
    {
        console.log("Valid Password")
    }
    if(c<8)
    {
        console.log("Password too short")
    }
}
validatePassword("Admin@")