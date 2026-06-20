function fruitPrice(fruit)
{
    switch(fruit)
    {
        case 'apple':
            console.log('₹100/kg');
            break;
        case 'banana':
            console.log('₹50/kg')
            break;
        case 'orange':
            console.log('₹80/kg');
            break;
        case 'grapes':
            console.log('₹120/kg');
            break;
        default:
            console.log("Fruit Not available")
    }
}
fruitPrice('orange')