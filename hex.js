const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
btn.addEventListener('click', ()=>{
    const newColor = (array) => {
        let result = [];
        for(let i = 0; i<6;i++)
        {
            result.push(array[Math.floor(Math.random()*array.length)]);
        }
        return result.join('');
    }
    const finalcolor= '#'+newColor(hex);
    document.body.style.background=finalcolor;
    colorHex.textContent=finalcolor;
})