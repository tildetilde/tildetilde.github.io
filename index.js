console.log("hej")
//this is a note about what we want to do. vi ska singla slant i rundor, utfallet är krona eller klave. rundorna är x långa och y många.
const roundCount=1000
const roundLength=100
const results=Array(roundLength+1).fill(0)

function flipCoin(){
    return Math.floor(Math.random() * 2)
}

for(let round=0; round<roundCount; round++) {
    let roundResult=0
    for(let i=0; i<roundLength; i++) {
        roundResult+=flipCoin()
    } 
    results[roundResult]++
}
console.log(results)