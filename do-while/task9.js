function reverseNum()
{
    let rem,num=1234,rev=0;
    do {
        rem=num%10;
        rev=(rev*10)+rem;
        num=Math.trunc(num/10);
    } while (num!=0);
    console.log("reverse number is:",rev);
}
reverseNum()