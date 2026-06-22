function reverseDigit()
{
    let n=123,rem,num,rev=0;
    num=n;
    while(n!=0)
    {
        rem=n%10;
        rev=(rev*10)+rem;
        n=Math.trunc(n/10);
    }
    console.log('Reversed number is:',rev);
}
reverseDigit()