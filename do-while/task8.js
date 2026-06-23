function factorial()
{
    let i=1,fact=1,n=6;
    do {
        fact*=i;
        i++
    } while (i<=n);
    console.log(fact)
}
factorial();
