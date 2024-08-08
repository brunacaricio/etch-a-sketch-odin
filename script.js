const container = document.querySelector('.container');
const resetBtn = document.querySelector('#reset-btn');
const blackBtn = document.querySelector('#black-btn');
const randomBtn = document.querySelector('#random-btn');
const rainbowBtn = document.querySelector('#rainbow-btn');

let rainbowMode = false;
const randomColors = [
  "#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#FFC300",
  "#DAF7A6", "#581845", "#900C3F", "#C70039", "#FFC0CB",
  "#40E0D0", "#800080", "#FF6347", "#FFD700", "#008080"
];


let currentColor = 'yellow';

for (let i = 0; i < 16; i++) {
  const row = document.createElement('div');
  row.classList.add('row');

  for (let j = 0; j < 16; j++) {
    const div = document.createElement('div');
    div.classList.add('square');

    div.addEventListener('mouseover', (event) => changeColor(event, currentColor));

    row.appendChild(div);
  }

  container.appendChild(row);
}

function setActiveButton(activeBtn) {
  const buttons = [blackBtn, randomBtn, rainbowBtn];
  buttons.forEach((button) => {
    button.classList.remove('active'); // Remove active class from all buttons
  });
  activeBtn.classList.add('active'); // Add active class to the clicked button
}

blackBtn.addEventListener('click', () => {
  currentColor = 'black';
  rainbowMode = false;
  setActiveButton(blackBtn);
});

randomBtn.addEventListener('click', () => {
  const colorPick = Math.floor(Math.random() * randomColors.length)
  currentColor = randomColors[colorPick];
  rainbowMode = false;
  setActiveButton(randomBtn);
});

rainbowBtn.addEventListener('click', () => {
  rainbowMode = true; // Enable rainbow mode
  setActiveButton(rainbowBtn);
});

function changeColor(event, color) {
  if (rainbowMode) {
    const colorIndex = Math.floor(Math.random() * randomColors.length);
    currentColor = randomColors[colorIndex];
  }

  event.target.style.backgroundColor = color;
}

resetBtn.onclick = () => reset();
function reset() {
  window.location.reload()
}
