function convertToAdjMatrix(lst) {
    var matrix = [];
    for (let i = 0; i < lst.length; i++) {
        matrix.push([]);
        let index = 0;
        for (let j = 0; j < lst.length; j++) {
            if (lst[i].length > index && lst[i][index] == j) {
                matrix[i][j] = 1;
                index++;
            }
            else {
                matrix[i][j] = 0;
            }
        }
    }
    return matrix;
}
