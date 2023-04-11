// DOM Elements
const boxs = document.querySelectorAll(".box"),
    image = document.querySelector(".image");

// console.log(boxs, image);

//Loop through each boxs element
boxs.forEach((box) => {
    //When a draggable element dragged over abox element
    box.addEventListener("dragover", (e) => {
        e.preventDefault(); //Prevent default begaviour
        // console.log("dragging");
        box.classList.add("hovered");
    });

    //When a draggable element leaves box element
    box.addEventListener("dragleave", () => {
        box.classList.remove("hovered");
    });

    //When a draggable element is dropped on abox element
    box.addEventListener("drop", () => {
        box.appendChild(image);
        box.classList.remove("hovered");
    });
});