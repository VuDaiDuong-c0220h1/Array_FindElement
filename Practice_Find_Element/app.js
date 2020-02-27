let value = parseInt(prompt("Enter a number: "));
let x = [-3, 5, 1, 3, 2, 10];
for (i = 0; i < x.length; i++) {
    if (value === x[i]) {
        alert("Giá trị " + x[i] + "vị trí thứ: " + i);
    }
}