//****** 1 ******
function ucFirst(str) {
    if(typeof str !== "string" || str.length === 0) return str;
    return str.charAt(0).toUpperCase() + str.substring(1);
}
//****** 2 ******
function checkSpam(str) {
    if (str.toLowerCase().includes("росі")||str.toLowerCase().includes("XXX")) return true;
    return false;
}
//****** 3 ******
function truncate(str, maxlength) {
    if(str.length > maxlength) return str.substring(0, maxlength-1)+"...";
    return str;
}
//****** 4 ******
function strikeStr(str) {
    if(typeof str !== "string" || str.length === 0) return str;
    const words = str.split(' ');
    let newstring = "";
    for(let i= 0; i < words.length; i++)
    {
        newstring = newstring + words[i];
        if((i+1)%3===0)
        {
            newstring = newstring + '\n';
        } else newstring = newstring + ' ';
    }
    newstring = newstring.substring(0, newstring.length-1);
    return newstring;
}