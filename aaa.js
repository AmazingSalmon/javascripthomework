//****** 1 ******
//1
let user = {};
//2
user.name = "Mark";
//3
user.surname = "Smith";
//4
user.name = "Taras";
//5
delete user.name;
//****** 2 ******
function isEmpty(aObject)
{
    return Object.keys(aObject).length === 0;
}
//****** 3 ******
let salaries = {
    Jarik: 1000,
    Anna: 1600,
    Miko: 1300
}
let sum = 0;
function getSum(obj) {
    let sum = 0;
    for(const key in obj)
    {
        if(typeof(obj[key])==="number") sum += obj[key];
    }
    return sum;
}
sum = getSum(salaries);
//****** 4 ******
function multiplyNumeric(obj) {
    for(const key in obj)
    {
        if(typeof(obj[key])==="number") obj[key] = obj[key]*2;
    }
}
