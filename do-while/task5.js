function sumEven()
{
    let i=2,sum=0;
    do {
        if(i%2==0)
        {
            sum+=i
        }
        i++;
    } while (i<=50);
    console.log(sum)
}
sumEven()