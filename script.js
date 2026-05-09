 
    const container = document.querySelector("#container");
    const button = document.createElement("button");
    button.textContent = "New Canvas";
    document.body.appendChild(button);
    document.body.appendChild(container);

    let gridSize = 16;
    let canvasSize = 400;
    
    function createCanvas(gridSize) {
        container.innerHTML = "";
        let squareSize = canvasSize / gridSize;
        let totalSize = gridSize * gridSize;

        for (let i = 0; i < totalSize; i++) {
            const square = document.createElement("div");
            square.classList.add("square");
            square.style.width = `${squareSize}px`;
            square.style.height = `${squareSize}px`;
            square.addEventListener("mouseover", () => {
                square.style.backgroundColor = "black";
            });
            container.appendChild(square);
        }
        
    }
    
    createCanvas(gridSize);

    button.addEventListener("click", () => {
        let newSize = Number(prompt("Enter a size up to 100 for new canvas!"));
        if (newSize > 100) {
            newSize = 100;
        }
        gridSize = newSize;
        createCanvas(gridSize);
    });

    

    