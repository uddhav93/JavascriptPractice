function getDiscount(amount)
{
    if(amount>=5000){
        console.log("30% discount")
    }
    else if(amount<=4999 && amount>=3000)
    {
        console.log("20% discount")
    }
    else if(amount<=2999 && amount>=1000)
    {
        console.log('10% discount')
    }
    else
    {
        console.log('No Discount')
    }
}
getDiscount(2000)