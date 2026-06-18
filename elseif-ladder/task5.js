function checkTemprature(temp)
{
    if(temp<0)
    {
        console.log("Freezing")
    }
    else if(temp>=0 && temp<=15)
    {
        console.log('Cold')
    }
    else if(temp>=16 && temp<=30)
    {
        console.log('Warm')
    }
    else
    {
        console.log("Hot")
    }
}
checkTemprature(32)