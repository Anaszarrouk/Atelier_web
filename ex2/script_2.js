function updateStyles() {
    var textDisplay = document.getElementById('textDisplay');
    var color = document.getElementById('colorPicker').value;
    var fontSize = document.getElementById('fontSize').value;
    var fontStyle = document.getElementById('fontStyle').value;

    textDisplay.style.color = color;
    textDisplay.style.fontSize = fontSize + 'px';
    textDisplay.style.fontFamily = fontStyle;
}

// Set initial styles
updateStyles();
