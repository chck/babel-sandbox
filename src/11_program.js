const inputs = process.argv.slice(2)
//console.log(inputs)
const result = inputs.map((x) => x[0]).reduce((a, b) => a + b)
console.log(result)
