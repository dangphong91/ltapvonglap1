let i = 1;
let j = 0;
let k = 0;
for (let count = 1;; count++ ){
    if (i % 5 == 0) {
        document.write(i);
        break;
    }
    k = i;
    i = i + j;
    j = k;
}