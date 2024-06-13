function updateValue(ch)
{
    value.textContent = parseInt(value.textContent)+ch;
    if(value.textContent>0)
    {
        value.style.color = "green";
    }else if(value.textContent<0) {
        value.style.color = "red";
    } else value.style.color = "#222";
}
document.querySelectorAll('.btn').forEach(button=>{
    button.addEventListener('click', function (){
        if(this.classList.contains('decrease')){
            updateValue(-1);
        }else if(this.classList.contains('increase')){
            updateValue(1);
        }else if(this.classList.contains('reset')){
            value.textContent=0;
            updateValue(0);
        }
    });
});