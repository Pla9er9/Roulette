let colors = ["Green","Black","Red"];
let quantityGeneratingColors = 0;

for (let i = 0; i <= 16; i++){
   colors.push("Red");
   colors.push("Black");
}

const randomColorsGenerating = () => {
    if (quantityGeneratingColors == 6){
        let select = document.getElementById("colors");
        let valueOfSelect = select.options[select.selectedIndex].value;
        clearInterval(generating);
        if (valueOfSelect == document.getElementById("box3").style.backgroundColor){
            alert("You Win!")
        }
    }
    else {
        for (let x =0; x<= 4; x++){
            const randomNumber = Math.floor(Math.random() * 37);  
            const color = colors[randomNumber];
            document.getElementById("box" + (x +1)).style.backgroundColor = color;
        }
        quantityGeneratingColors += 1;
    }
}

document.getElementById("spinButton").onclick = () => { 
    quantityGeneratingColors = 0;
    generating = window.setInterval(randomColorsGenerating, 500); 
}