/*
    input: 
    [
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ]
    output: rotated 90% degrees clockwise! And used to rotate in place without creating any array,
    required to use swap in place!
    [
        [7,4,1],
        [8,5,2],
        [9,6,3]
    ]
*/
const matrix =     [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

const turn90InPlace = matrix => {

    for(let i = 0; i<Math.floor(matrix.length / 2); i++){

        const last = matrix.length - 1 - i;

        for( let j = i +1; j<matrix.length - i; j++){
            
            const reverse = last - j + i;
            let temp1 = matrix[j][last];
            matrix[j][last] = matrix[i][j];

            let temp2 = matrix[last][reverse];
            matrix[last][reverse] = temp1;

            temp1 = matrix[reverse][i];
            matrix[reverse][i] = temp2;
            matrix[i][j] = temp1;

        }
    }

    return matrix;
}

console.log(turn90InPlace(matrix));