// Orbit speeds (arbitrary values)
const speeds = {
  mercury: 2,
  venus: 1.5,
  earth: 1,
  mars: 0.8
  // Add speeds for other planets
};

// Function to rotate planets
function rotatePlanets() {
  for (const planet in speeds) {
    const element = document.getElementById(planet);
    const speed = speeds[planet];
    const angle = parseFloat(element.dataset.angle) || 0;
    const newAngle = angle + speed;
    element.style.transform = `rotate(${newAngle}deg)`;
    element.dataset.angle = newAngle;
  }
}

// Rotate planets every 100ms
setInterval(rotatePlanets, 100);
