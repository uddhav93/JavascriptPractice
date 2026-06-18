function getSeason(month)
{
    if(month=='december' || month=='january'||month=='febuary')
    {
        console.log('Winter')
    }
    else if(month=="march"||month=="april"||month=="may")
    {
        console.log('Summer')
    }
    else if(month=="june"||month=="july"||month=="augest")
    {
        console.log('Rainy')
    }
    else
    {
        console.log('Autumn')
    }
}
getSeason('january')