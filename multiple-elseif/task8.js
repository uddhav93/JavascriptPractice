function findLargest(a,b,c)
{
    if(a>b && a>c)
    {
        console.log('a is largest')
    }
    if(b>a && b>c)
    {
        console.log('b is largest')
    }
    else
    {
        console.log('c is largest')
    }
}
findLargest(3,4,2)