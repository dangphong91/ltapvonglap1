let i = 1;
let j = 0;
let k = 0;
let sum = 1;
for (let count = 1; count <= 20; count++ ){
    document.write("<pre>" + i + "  sum : " + sum + "</pre>");
    k = i;
    i = i + j;
    j = k;
    sum += i;
}