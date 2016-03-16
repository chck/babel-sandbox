const max = process.argv[2]
let FizzBuzz = function*() {
  let num = 1
  while(max >= num) {
    let value = num
    if (value % 15 == 0) {
      value = "FizzBuzz"
    } else if (value % 5 == 0) {
      value = "Buzz"
    } else if (value % 3 == 0) {
      value = "Fizz"
    }
    num += 1
    yield value
  }
}()

for (let x of FizzBuzz) {
  console.log(x)
}
