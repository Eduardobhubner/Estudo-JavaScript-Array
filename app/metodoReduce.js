const numbers = [10 ,80 , 40]

const sumNumber = numbers.reduce((acc, cv) =>
    acc + cv , 0//start acc with value 0
)

console.log(sumNumber)