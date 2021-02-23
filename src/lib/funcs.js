export const openNearBlock = (x, y, game, control) => {
    control[x][y] = true;
    for (let i = x - 1; i <= x + 1; i++) {
        for (let j = y - 1; j <= y + 1; j++) {
            let d = Math.abs((x + y) - (i + j));
            try {
                if (d !== 2 && d !== 0 && game[i][j] !== undefined)
                    if (game[i][j] === '' && control[i][j] !== true) {
                        console.log(i, j);
                        openNearBlock(i, j, game, control);
                    } else {
                        control[i][j] = true;
                    }
            } catch { }
        }
    }
    return;
}


export const matrix = (x, y) => {
    const arr = Array(y).fill(null).map(() => Array(x).fill(''));

    let n = 0;
    while (n < (x + y) / 2) {
        let tempX = Math.round(Math.random() * (x - 1));
        let tempY = Math.round(Math.random() * (y - 1));
        if (arr[tempX][tempY] === '') {
            arr[tempX][tempY] = '💣';
            n += 1;
        }
    }
    arr.forEach((line, i) => {
        line.forEach((x, j) => {
            for (let k = i - 1; k <= i + 1; k += 1) {
                for (let l = j - 1; l <= j + 1; l += 1) {
                    // debugger
                    if (!(k === i && l === j) && arr[i][j] !== '💣') {
                        try {
                            if (arr[k][l] === '💣') arr[i][j] = Number(arr[i][j]) + 1;
                        } catch { }
                    }
                }
            }
        })
    })

    return arr;
}