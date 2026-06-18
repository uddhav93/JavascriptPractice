function trafficAction(color)
{
    if(color=='red')
    {
        console.log('Stop')
    }
    else if(color=='yellow')
    {
        console.log('get Ready')
    }
    else if(color=='green')
    {
        console.log('Go')
    }
    else
    {
        console.log('Invalid signal')
    }
}
trafficAction('green')