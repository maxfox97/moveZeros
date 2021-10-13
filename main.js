moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]);

function moveZeros(arr) {
    let arrValues = [];
    let arrZero = [];
    arr.forEach(element => {
        if (element !== 0) {
            arrValues.push(element);
        } else {
            arrZero.push(element);
        }
    });
    let merged = [...arrValues, ...arrZero];
    alert(merged);
};