function result() {
    var first = Number(document.getElementById("number").value);
    var result = document.getElementById("result");

    if (first > 0) {
        result.innerHTML = first + " Положительное число";
    } else if (first < 0) {
        result.innerHTML = first + " Отрицательное число";
    } else {
        result.innerHTML = first + " Равно нулю";
    }

}
