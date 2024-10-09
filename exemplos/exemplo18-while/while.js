let num = [1, 2, 3, 4, 5, 6, 7]
let counter = 6

function average() {
    let average = 0, sum = 0

    while (counter >= 0) {
        sum += num[counter]
        console.log(`soma = ${sum}`)

        counter--
    }
}

average()