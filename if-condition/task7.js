function calculatePrice(price)
{
    if(price>=1000)
    {
        return price*=.2
    }
    if(price<1000)
    {
        return price
    }
}
console.log(calculatePrice(2000));