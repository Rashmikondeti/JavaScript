var age = 45;

var ageGroup =
    (age >= 0 && age <= 12) ? "Child" :
    (age >= 13 && age <= 19) ? "Teen" :
    (age >= 20 && age <= 64) ? "Adult" :
    "Senior";

console.log("Age Group:", ageGroup);
