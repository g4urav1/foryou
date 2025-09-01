function showLove() {
    const surprise = document.getElementById('surprise');
    surprise.style.display = 'block';
    const buttons = document.querySelector('.button-container');
    buttons.style.display = 'none';
}

function playful() {
    const noButton = document.getElementById('noButton');
    noButton.style.position = 'absolute';
    noButton.style.top = Math.random() * 50 + '%';
    noButton.style.left = Math.random() * 50 + '%';
}
