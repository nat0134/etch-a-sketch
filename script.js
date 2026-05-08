    const container = document.querySelector("#container");

    let gridSize = 16;
    let totalSize = gridSize * gridSize;
    const width = window.innerWidth;
    const height = window.innerHeight;

    for (let i = 1; i < width * height; i++) {
        const grid = document.createElement("div");
        grid.style.width = `${gridSize}px`;
        grid.style.height = `${gridSize}px`;
        grid.style.border = `.1px solid #808080`;
        grid.addEventListener("mouseover", () => {
            grid.style.backgroundColor = "gold";
        });
        container.appendChild(grid);
    }

    
  