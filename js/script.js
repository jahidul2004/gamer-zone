let toggleCount = 0;
document.getElementById("menu").addEventListener("click", function () {
    if (toggleCount === 0) {
        document.getElementById("toggle-bar").classList.add("hidden");
        toggleCount++;
    } else if (toggleCount === 1) {
        document.getElementById("toggle-bar").classList.remove("hidden");
        document.getElementById("toggle-bar").classList.add("flex");
        toggleCount = 0;
    }
});
