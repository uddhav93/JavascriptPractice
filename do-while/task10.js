function DigitCount()
{
    let c=0,rem,num=123455;
    do {
        rem=num%10;
        c++;
        num=Math.trunc(num/10);
    } while (num!=0);
    console.log("digit count is:",c);
}
DigitCount()