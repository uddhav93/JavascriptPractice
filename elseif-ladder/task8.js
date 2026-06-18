function examResult(score)
{
    if(score>=85)
    {
        console.log('Distinction')
    }
    else if(score>=60 && score<=84)
    {
        console.log("First class")
    }
    else if(score>=40 && score<=59)
    {
        console.log('Second class')
    }
    else{
        console.log("Fail")
    }
}
examResult(56)