function drivingTest(age,passedTest)
{
    if(age>=18)
    {
        if(passedTest)
        {
            console.log('Licence Issued')
        }
        else{
            console.log('Test Not Passed')
        }
    }
    else
    {
        console.log('Too Young')
    }
}
drivingTest(21,true)