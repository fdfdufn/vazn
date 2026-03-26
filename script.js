// Optional small interaction (edit or remove)

// Example: blinking cursor effect for status
const status = document.getElementById("status-text");

let visible = true;
setInterval(() => {
  if (visible) {
    status.textContent = status.textContent.replace("|", "");
  } else {
    status.textContent = status.textContent + " |";
  }
  visible = !visible;
}, 500);
