const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
btn.addEventListener('click', ()=>{
    const newColor = colors[Math.floor(Math.random()*colors.length)];
    document.body.style.background=newColor;
    colorText.textContent=newColor;
})