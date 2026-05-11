 
    const container = document.querySelector("#container");
    const btnContainer = document.querySelector("#btn-container");

    const button = document.createElement("button");
    button.textContent = "New Canvas";
    const grayBtn = document.createElement("button");
    grayBtn.textContent = "Gray";
    const colorBtn = document.createElement("button");
    colorBtn.textContent = "Color";
    const eraseBtn = document.createElement("button");
    eraseBtn.textContent = "Erase";
    const darkenBtn = document.createElement("button");
    darkenBtn.textContent = "Darken";

    btnContainer.appendChild(button);
    btnContainer.appendChild(grayBtn);
    btnContainer.appendChild(colorBtn);
    btnContainer.appendChild(eraseBtn);
    btnContainer.appendChild(darkenBtn);

    document.body.appendChild(btnContainer);
    document.body.appendChild(container);

    let gridSize = 16;
    let canvasSize = 400;
    
    let grayMode = false;
    let colorMode = false;
    let eraseMode = false;
    let darkMode = false;

    grayBtn.addEventListener("click", () => {
        grayMode = true;
        colorMode = false;
        eraseMode = false;
        darkMode = false;
    });
    colorBtn.addEventListener("click", () => {
        colorMode = true;
        grayMode = false;
        eraseMode = false;
        darkMode = false;
    });
    eraseBtn.addEventListener("click", () => {
        eraseMode = true;
        grayMode = false;
        colorMode = false;
        darkMode = false;
    });
    darkenBtn.addEventListener("click", () => {
        darkMode = true;
        grayMode = false;
        colorMode = false;
        eraseMode = false;
    });
    
    function createCanvas(gridSize) {
        container.innerHTML = "";
        let squareSize = canvasSize / gridSize;
        let totalSize = gridSize * gridSize;

        for (let i = 0; i < totalSize; i++) {
            const square = document.createElement("div");
            square.classList.add("square");
            square.style.width = `${squareSize}px`;
            square.style.height = `${squareSize}px`;
            let opacity = 0.5;
            square.style.opacity = opacity;

            square.addEventListener("mouseover", () => {
                if (grayMode) {
                    square.style.backgroundColor = "black"; 
                } else if (colorMode) {
                    const random = () => Math.floor(Math.random() * 256);
                    square.style.backgroundColor = 
                        `rgb(${random()}, ${random()}, ${random()})`;
                } else if (eraseMode) {
                    square.style.backgroundColor = "white";
                } else if (darkMode) {
                    if (opacity < 1) {
                        opacity += 0.1;
                        square.style.opacity = opacity;
                    }
                }
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


    

    