

document.getElementById("su").addEventListener("click", function () {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) document.body.classList.toggle("light-mode");
    else document.body.classList.toggle("dark-mode");
    
  });