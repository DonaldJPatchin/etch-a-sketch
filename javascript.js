const container = document.getElementById("container");
const button = document.getElementById("button");


function makeGrid(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (i = 0; i < (rows * cols); i++) {
        let box = document.createElement("div");
        container.appendChild(box).className = "grid-item";
        box.addEventListener("mouseover", paint);
        
    };
};
// color
function paint(e) {
   e.target.style.backgroundColor = "black";
}

// function gridSize(e) {
//     if (e.target.dataset.pixel == "16px") {
//         makeGrid(4, 4); 
//      } else if (e.target.dataset.pixel == "36px") {
//         makeGrid(6, 6);   
//      } else if (e.target.dataset.pixel == "121px"){
//         makeGrid(11, 11);
//      }
//     }

// function gridSize()
makeGrid(16,16);


button.addEventListener("click", function resize(size) {
    size = prompt("Enter a new grid size. (1-100)");
    container.innerHTML = "";
        if (0 < size && size <= 100) {
            makeGrid(size, size);
        } else {
            makeGrid(16,16);
            alert("1-100 PLEASE");
        }
    
});




// const color = document.querySelectorAll('.rows', '.cols');
    
    



