let i = 1;
let j = 0;
let k = 0;
for (let count = 1; count <= 20; count++ ){
    document.write(i + "<br>");
    k = i;
    i = i + j;
    j = k;
}