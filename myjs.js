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
const noButton = document.getElementById('noButton');
const container = document.querySelector('.button-container');

container.addEventListener('mousemove', (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  const buttonRect = noButton.getBoundingClientRect();
  const containerRect = container.getBoundingClientRect();

  const buttonCenterX = buttonRect.left + buttonRect.width / 2;
  const buttonCenterY = buttonRect.top + buttonRect.height / 2;

  const offsetX = buttonCenterX - mouseX;
  const offsetY = buttonCenterY - mouseY;

  const distance = Math.sqrt(offsetX ** 2 + offsetY ** 2);

  // Only move if mouse is within 100px
  if (distance < 100) {
    const moveFactor = 100 / distance;

    let newX = parseFloat(noButton.style.left || 0) + offsetX * moveFactor;
    let newY = parseFloat(noButton.style.top || 0) + offsetY * moveFactor;

    // Clamp within container bounds
    const maxX = containerRect.width - buttonRect.width;
    const maxY = containerRect.height - buttonRect.height;

    newX = Math.min(Math.max(0, newX), maxX);
    newY = Math.min(Math.max(0, newY), maxY);

    noButton.style.position = 'absolute';
    noButton.style.left = `${newX}px`;
    noButton.style.top = `${newY}px`;
  }
});
