// setup
let roundCount = 10000
let roundLength = 30
let results = [];
let resultLabels = [];
// dom elements
const ctx = document.getElementById('chart');
const roundCountLabel = document.querySelector("#roundCountLabel");
const roundCountInput = document.querySelector("#roundCountInput");
const roundLengthLabel = document.querySelector("#roundLengthLabel");
const roundLengthInput = document.querySelector("#roundLengthInput");

function flipCoin() {
  return Math.floor(Math.random() * 2)
}

function generateData() {
  results = Array(roundLength+1).fill(0)
  resultLabels = Array.from({length: roundLength+1}, (v, i) => i)

  for(let round = 0; round < roundCount; round++) {
    let roundResult = 0
    for(let i = 0; i < roundLength; i++) {
      roundResult+=flipCoin()
    }

    results[roundResult]++
  }
}

// Initial setup
roundCountInput.value = roundCount;
roundCountLabel.textContent = roundCountInput.value;
roundLengthInput.value = roundLength;
roundLengthLabel.textContent = roundLengthInput.value;
generateData();

const chart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: resultLabels,
    datasets: [{
      label: 'Antal klave',
      data: results,
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
          beginAtZero: true
      }
    }
  }
});

// Regenerate when data is updated
roundCountInput.addEventListener("input", (event) => {
  roundCount = parseInt(event.currentTarget.value);
  roundCountLabel.textContent = roundCount

  generateData()
  chart.data.datasets[0].data = results;
  chart.update();
});

roundLengthInput.addEventListener("input", (event) => {
  roundLength = parseInt(event.currentTarget.value);
  roundLengthLabel.textContent = roundLength
  console.log({roundLength})

  generateData()
  chart.data.datasets[0].data = results;
  chart.data.labels = resultLabels
  chart.update();
});
