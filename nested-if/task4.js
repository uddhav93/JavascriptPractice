function checkLoan(age,salary)
{
    if(age>=21)
    {
        if(salary>=30000)
        {
            console.log('Loan Approved')
        }
        else
        {
            console.log('Salary Too low')
        }
    }
    else
    {
        console.log('Age not Eligible')
    }
}
checkLoan(23,40000)