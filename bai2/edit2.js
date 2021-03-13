let nhietdo = Number(prompt("Nhập nhiệt độ :"));
if (nhietdo >=0 && nhietdo <= 100) {
    document.write(nhietdo);
} else {
while (nhietdo > 100) {
    alert("Giảm nhiệt độ xuống dưới 100 !");
    break;
}
while (nhietdo < 0) {
    alert("Tăng nhiệt độ lên trên 0 !");
    break;
}
}