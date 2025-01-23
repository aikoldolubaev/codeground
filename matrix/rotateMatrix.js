/*
    input: 
    [
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ]
    output: rotated 90% degrees clockwise!
    [
        [7,4,1],
        [8,5,2],
        [9,6,3]
    ]
*/

const matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

const turn90 = matrix => {
    const result = [];
    // buid new matrix skeleton
    for(let i=0; i<matrix.length; i++){
        result.push([]);
    }

    for(let i=0; i<matrix.length;  i++){
        for(let j=0; j<matrix[i].length; j++){
        /*  
            1.
            result[0][3-1-0] is undefined=1 is matrix[0][0]
            [[],[],[]] => [[empty, empty, 1],[],[]]
            2.
            result[1][3-1-1] is undefined=2 is matrix[0][1]
            [[empty, empty, 1],[],[]] => [[empty, empty, 1],[empty, empty, 2],[]]
            3.
            result[2][3-1-2] is undefined=3 is matrix[0][2]
            [[empty, empty, 1],[empty, empty, 2],[]] => [[empty, empty, 1],[empty, empty, 2],[empty, empty, 3]]
        */   
            result[j][matrix.length-1-i] = matrix[i][j];
        }
    }
    return result;
}

const turn180 = matrix => {
    // 90 + 90 = 180
    return turn90(turn90(matrix));
}/*[
    [9, 8, 7],
    [6, 5, 4],
    [3, 2, 1],
]*/

const turn270 = matrix => {
    // 90 + 180 = 270
    return turn90(turn180(matrix));
}/*
[
    [3, 6, 9],
    [2, 5, 8],
    [1, 4, 7],
]*/


const turn360 = matrix => {
    // 90 + 180 = 270
    return turn90(turn180(turn90(matrix)));
}/*[
    [1, 2, 3]
    [4, 5, 6]
    [7, 8, 9]
]*/


