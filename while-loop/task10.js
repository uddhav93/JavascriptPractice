function countDigit()
{
    let c=0,n=12345;
    while(n!=0)
    {
        rem=n%10;
        c++;
        n=Math.trunc(n/10);
    }
    console.log("No of digits is:",c)
}
countDigit()