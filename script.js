// Simple optional JS for dynamic status or effects

// Example: blinking cursor effect
const statusText = document.getElementById("status-text");

let visible = true;
setInterval(() => {
    if (visible) {
        statusText.innerText = "$ edit here_";
    } else {
        statusText.innerText = "$ edit here";
    }
    visible = !visible;
}, 500);
