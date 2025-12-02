for (let i = 0; i < 15; i++) {
    let fh = document.createElement("div");
    fh.classList.add("floating-heart");
    fh.textContent = "❤️";
    fh.style.left = Math.random() * 100 + "vw";
    fh.style.animationDuration = 5 + Math.random() * 6 + "s";
    fh.style.fontSize = 18 + Math.random() * 14 + "px";
    document.body.appendChild(fh);
}


function showLove() {
    document.querySelector(".button-container").style.display = "none";
    document.getElementById("surprise").style.display = "block";

    
 
}


function moveButton() {
    const btn = document.getElementById("noButton");
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);
    btn.style.position = "absolute";
    btn.style.left = x + "px";
    btn.style.top = y + "px";

}
