const colorWrap = document.querySelector(".color_wrap");
const refreshBtn = document.querySelector(".refresh_btn");

const maxPaletteBox = 12;

const generatePalette = () => {
    colorWrap.innerHTML = ""; //clearing the colorBox
    for (let i = 0; i < maxPaletteBox; i++) {
        // generating a rendom hex color code
        let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
        randomHex = `#${randomHex.padStart(6, "0")}`;

        // creating a new 'li' element and inserting it to the color_wrap
        const colorBox = document.createElement("li");
        colorBox.classList.add("color_box");
        colorBox.innerHTML = `<div class="rect_box" style="background-color:${randomHex}"></div>
        <span class="hex_value">${randomHex}</span>`;
        // adding click event to current li element to copy the color
        colorBox.addEventListener('click', () => copyColor(colorBox, randomHex));
        colorWrap.appendChild(colorBox);
    }
        
    }

generatePalette();
const copyColor = (elem, hexVal) => {
    const colorElement = elem.querySelector(".hex_value");
    // copying the hex value, updating the text to copied,
    // and changing text back to original hex value after 0.3 second
    navigator.clipboard.writeText(hexVal).then(() => {
        colorElement.innerText = "Copied";
        setTimeout(() => colorElement.innerText = hexVal, 300);
    }).catch(() => alert("Failed to copy the color code!"));// dhowing alert if color can't be copined
}
refreshBtn.addEventListener("click", generatePalette);