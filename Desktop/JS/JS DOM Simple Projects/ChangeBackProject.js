/* let button = document.createElement("BUTTON");   // Create a <button> element
button.innerHTML = "Click me and change background color";       // Insert text
document.body.appendChild(button);               // Append <button> to <body>
 */
const changeBackground = document.getElementsByName('button');

changeBackground.addEventListener("click", modifyBackground, button);
function modifyBackground() { // code for random color, but not for color that I have to put
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    console.log(bgColor);

    document.body.style.background = bgColor;
}

button.modifyBackground();//call function

//colors doesn't change, button doesn't work realy