let m1 = [
    [4, 4, 4],
    [5, 5, 5],
    [3, 3, 3]
]

let m2 = [
    [1, 2, 3],
    [4, 3, 2],
    [2, 2, 2]
]

let m3 = [
    [],
    [],
    []
]

for (let i = 0; i < m1.length; i++) {
    for (let j = 0; j < m1.length; j++) {
        m3[i][j] = m1[i][j] - m2[i][j]
    }
}

console.table(m1)
console.table(m2)
console.log('----------------------------')
console.table(m3)