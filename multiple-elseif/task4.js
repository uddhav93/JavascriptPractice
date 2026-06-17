function checkspeed(speed)
{
    if(speed>=80)
    {
        console.log("Fast")
    }
    if(speed>=40 && speed<=80)
    {
        console.log('Normal')
    }
    else
    {
        console.log("Slow")
    }
}
checkspeed(30)