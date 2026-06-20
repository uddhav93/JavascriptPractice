function weatherAdvice(weather)
{
    switch(weather)
    {
        case "sunny":
            console.log("Wear Sunglasses");
            break;
        case "rainy":
            console.log("Take an Umbrella");
            break;
        case "snowy":
            console.log("Wear a Jacket");
            break;
        case "cloudy":
            console.log("Carry a Light Coat");
            break;
        default:
            console.log("unknown Weather")
    }
}
weatherAdvice("sunny")