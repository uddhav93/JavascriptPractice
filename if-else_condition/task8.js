function checkPassword(password)
{
    let c=0;
    for(let pwd of password)
    {
        ++c;
    }
    if(c>=8)
    {
        console.log("Strong")
    }
    else
    {
        console.log(Weak)
    }
}
checkPassword("hello@1234")