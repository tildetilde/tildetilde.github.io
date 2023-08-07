// setup
let roundCount = 100000
const roundLength = 30
// dom elements
const ctx = document.getElementById('chart');
const value = document.querySelector("#roundCountValue");
const input = document.querySelector("#roundCountInput");

function flipCoin(){
  return Math.floor(Math.random() * 2)
}

function generate(){
  const results = Array(roundLength+1).fill(0)
  const resultLabels = Array.from({length: roundLength+1}, (v, i) => i)

  for(let round = 0; round < roundCount; round++) {
    let roundResult = 0
    for(let i = 0; i < roundLength; i++) {
      roundResult+=flipCoin()
    }

    results[roundResult]++
  }
          
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: resultLabels,
      datasets: [{
        label: 'Klave per runda',
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
}

input.value=roundCount
generate()
value.textContent = input.value;
input.addEventListener("input", (event) => {
  value.textContent = event.target.value;
  roundCount=event.target.value
    generate()
});
