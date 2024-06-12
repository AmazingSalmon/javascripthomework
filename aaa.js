//****** 1 ******
let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
function getMedium(array) {
    return Math.floor(array.length / 2);
}
styles[getMedium(styles)] = "Classics";
styles.shift(); console.log(styles);
styles.splice(0, 0, "Rap", "Reggae");
//****** 2 ******
function sumInput() {
    let numbers = [];
    while(1)
    {
        let newnumber = parseInt(window.prompt("input number"));
        if(isNaN(newnumber)) break;
        numbers.push(newnumber);
    }
    const sum = numbers.reduce((acc, currentValue)=>acc+currentValue);
    window.alert("sum is " + sum);
}
//****** 3 ******
function getMaxSubSum(arr)
{
    let maxSum = -Infinity;
    let currentSum = 0;
    for(let i = 0; i < arr.length; i++)
    {
        currentSum = Math.max(arr[i], currentSum + arr[i]);
        maxSum = Math.max(currentSum, maxSum);
    }
    if(maxSum<0) maxSum=0;
    return maxSum;
}
