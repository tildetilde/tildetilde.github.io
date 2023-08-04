console.log("hej")
//this is a note about what we want to do. vi ska singla slant i rundor, utfallet är krona eller klave. rundorna är x långa och y många.
let roundCount=100000
const roundLength=30

function flipCoin(){
    return Math.floor(Math.random() * 2)
}

function generate(){
    const results=Array(roundLength+1).fill(0)
    const resultLabels=Array.from({length: roundLength+1}, (v, i) => i)

    for(let round=0; round<roundCount; round++) {
        let roundResult=0
        for(let i=0; i<roundLength; i++) {
            roundResult+=flipCoin()
        } 
        results[roundResult]++
    }
    console.log(results)
    const ctx = document.getElementById('myChart');
            
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

const value = document.querySelector("#roundCountValue");
const input = document.querySelector("#roundCountInput");
input.value=roundCount
generate()
value.textContent = input.value;
input.addEventListener("input", (event) => {
  value.textContent = event.target.value;
  roundCount=event.target.value
    generate()
});