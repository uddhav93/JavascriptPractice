function shapeSides(sides)
{
    switch(sides)
    {
        case 3:
            console.log('Triangle');
            break;
        case 4:
            console.log('Quadrilateral');
            break;
        case 5:
            console.log('Pentegon');
            break;
        case 6:
            console.log('Hexagon');
            break;
        default:
            console.log('Unknown Shape')
    }
}
shapeSides(5)