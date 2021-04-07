export const isVictory = (arr) => arr.flat().reduce((acc, el) => el === 0 ? acc + 1 : acc, 0);

export const returnXY = (xy) => [+xy.slice(0, xy.indexOf(':')), +xy.slice(xy.indexOf(':') + 1)];

export const openNearBlock = (x, y, game, control) => {
    control[x][y] = true;
    for (let i = x - 1; i <= x + 1; i++) {
        for (let j = y - 1; j <= y + 1; j++) {
            try {
                if (game[i][j] !== undefined)
                    if (game[i][j] === '' && control[i][j] !== true) {
                        openNearBlock(i, j, game, control);
                    } else {
                        control[i][j] = true;
                    }
            } catch { }
        }
    }
    return;
}

export const bombAmount = (x, y) => Math.round((x * y) / 10 + (x + y) / 4);

export const matrix = (x, y) => {
    const arr = Array(y).fill(null).map(() => Array(x).fill(''));
    const bomb = bombAmount(x, y);
    let n = 0;
    while (n < bomb) {
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