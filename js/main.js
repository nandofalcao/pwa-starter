var body = document.getElementById("page");

window.addEventListener('online',  updateOnlineStatus);
window.addEventListener('offline', updateOnlineStatus);

updateOnlineStatus();

function updateOnlineStatus() {
  body.classList.remove(navigator.onLine ? "offline" : "online");
  body.classList.add(navigator.onLine ? "online" : "offline");
  console.log(navigator.onLine ? "offline" : "online");
}