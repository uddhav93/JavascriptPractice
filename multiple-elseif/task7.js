function checkElectricityBill(units)
{
    if(units<100)
    {
        console.log("Low usage")
    }
    if(units>=100 && units<=300)
    {
        console.log("Medium usage")
    }
    else{
        console.log("High usage")
    }
}
checkElectricityBill(234)