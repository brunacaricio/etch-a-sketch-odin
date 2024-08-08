const container = document.querySelector('.container');
const resetBtn = document.querySelector('#reset-btn');
const blackBtn = document.querySelector('#black-btn');
const randomBtn = document.querySelector('#random-btn');
const rainbowBtn = document.querySelector('#rainbow-btn');

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


blackBtn.addEventListener('click', () => {
  currentColor = 'black';
});

const randomColors = [
  "#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#FFC300",
  "#DAF7A6", "#581845", "#900C3F", "#C70039", "#FFC0CB",
  "#40E0D0", "#800080", "#FF6347", "#FFD700", "#008080"
];

randomBtn.addEventListener('click', () => {
  const colorPick = Math.floor(Math.random() * randomColors.length)
  currentColor = randomColors[colorPick];
});

rainbowBtn.addEventListener('click', () => {
  rainbowIndex = 0; // Reset the index to start from the beginning
  currentColor = randomColors[rainbowIndex]; // Start with the first color
  container.querySelectorAll('.square').forEach(square => {
    square.addEventListener('mouseover', (event) => {
      changeColor(event);
      rainbowIndex = (rainbowIndex + 1) % randomColors.length; // Move to the next color
      currentColor = randomColors[rainbowIndex]; // Update current color
    });
  });
});

function changeColor(event, color) {
  event.target.style.backgroundColor = color;
}

resetBtn.onclick = () => reset();
function reset() {
  window.location.reload()
}
