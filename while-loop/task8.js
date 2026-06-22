function factorial()
{
    let i=1,n=7,fact=1;
    while(i<=n)
    {
        fact*=i;
        i++;
    }
    console.log("Factorial is:",fact);
}
factorial()