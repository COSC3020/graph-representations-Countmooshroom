function convertToAdjMatrix(lst) {
    var matrix = [];
    for (let i = 0; i < lst.length; i++) {
        matrix.push([]);
        for (let j = 0; j < lst.length; j++) {
            if (lst[i].includes(j)) {
                matrix[i][j] = 1;
            }
            else {
                matrix[i][j] = 0;
            }
        }
    }
    return matrix;
}
