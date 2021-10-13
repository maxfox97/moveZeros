moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]);

function moveZeros(arr) {
    const arrValues = [];
    const arrZero = [];
    let merged = [];
    arr.forEach(element => { element !== 0 ? arrValues.push(element) : arrZero.push(element); });
    merged = [...arrValues, ...arrZero];
    console.log(merged);
};