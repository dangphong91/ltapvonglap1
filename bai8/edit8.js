function doanso() {
    let number = parseInt(prompt("Bạn muốn đoán trong khoảng từ 0 đến bao nhiêu ?"));
    let maychon = parseInt(Math.random() * number);
    let nguoichon = parseInt(prompt("Bạn đoán máy tính chọn số bao nhiêu ?"));
    if (nguoichon != maychon) {
        while (nguoichon < maychon) {
            alert("Hãy nhập số lớn hơn !");
            nguoichon = parseInt(prompt("Mời bạn đoán lại :"));
        }
        while (nguoichon > maychon) {
            alert("Hãy nhập số nhỏ hơn !");
            nguoichon = parseInt(prompt("Mời bạn đoán lại :"));
        }
        alert("Chúc mừng bạn đã đoán đúng !");
    }
}