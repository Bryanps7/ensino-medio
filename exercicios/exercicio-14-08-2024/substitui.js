let sub = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
]

for (let i = 0; i < sub.length ; i++) {
    for (let j = 0; j < sub.length ; j++) {
        if (i % 2 == 0) {
            sub[i][j] = 2
        } else {
            sub[i][j] = 3
        }
    }
}

console.table(sub)