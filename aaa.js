//****** 1 ******
function random(min, max) {
    let num = Math.random()*(max - min);
    num = num + min;
    return num;
}
//****** 2 ******
function isPrime(num) {
    if((num%2 === 0 && num !== 2) || num <= 1) return false;
    for(let i = 3; i <= Math.floor(Math.sqrt(num)); i+=2)
    {
        if(num%i === 0) return false;
    }
    return true;
}
//****** 3 ******
function recursiveSum(num) {
    if(num>=0)
    {
        return num*(num + 1)/2;
    } else return -((-num)*((-num) + 1)/2);
}