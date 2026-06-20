function restaurantMenu(choice)
{
    switch(choice)
    {
        case 1:
            console.log('pizza');
            break;
        case 2:
            console.log('Burger');
            break;
        case 3:
            console.log('Pasta');
            break;
        case 4:
            console.log('Fried Rice');
            break;
        case 5:
            console.log('Sandwich');
            break;
        default:
            console.log('Item Not Found')
    }
}
restaurantMenu(5)