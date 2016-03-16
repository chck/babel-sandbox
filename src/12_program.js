let args = process.argv[2].split(",")
args = args.map((arg) => +arg)

let avg = (...args) => args.reduce((a,b) => a+b) / args.length

console.log(avg(...args))
