// Simple optional JS for dynamic status or effects

// Example: blinking cursor effect
const statusText = document.getElementById("status-text");

let visible = true;
setInterval(() => {
    if (visible) {
        statusText.innerText = "$ inactive_";
    } else {
        statusText.innerText = "$ inactive";
    }
    visible = !visible;
}, 500);
