var temperature = 25;

var result =
    (temperature > 30) ? "Hot" :
    (temperature >= 20 && temperature <= 30) ? "Warm" :
    (temperature >= 10 && temperature <= 19) ? "Cool" :
    "Cold";


console.log("Category:", result);
