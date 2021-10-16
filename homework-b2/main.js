// 1. Viết hàm với tham số đầu vào là 1 số bất kỳ, kiểm tra và in ra màn hình là số chẵn hay lẽ. Ví dụ: Số 3 là số lẽ.
// 1.2 Dựa vào hàm ở bài 1, kiểm tra thêm số đó là số âm hay dương. Ví dụ: Số 3 là số âm và lẽ.
// 2. Viết hàm với tham số đầu vào là 1 số trong tháng (1 tới 12), kiểm tra và in ra tháng đó có bao nhiều ngày? Ví dụ Tháng 1 có 31 ngày
// 2. Viết hàm với đầu vào là 1 số bất kỳ, kiểm tra số đó và in ra là số nguyên dương hay số nguyên âm, nếu không phải cả 2 thì in ra không phải số cần kiểm tra.
// 3. Viết hàm tính tổng 2 số với tất cả các phép tính (+ - * / %) thông qua tham số truyền vào
// Yêu cầu của bài 2: a muốn có 1 hàm mà truyền vào 3 tham số a, b là 2 số muốn tính, tham số thứ 3 (+ - * / %) sẽ quyết định kết quả. Kiểm tra kỹ đầu vào của 2 số muốn tính, nếu không phải số thì exit và thông báo số nhập không đúng.

function ktraDK(n) {
  if (typeof n === "number") {
    if (n % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }
}
console.log("BÀI 1");
function ktraChanLe(n) {
  if (ktraDK(n) === true) {
    console.log("Số " + n + " là số chẵn");
  } else if (ktraDK(n) === false) {
    console.log("Số " + n + " là số lẻ");
  } else {
    console.log("Đây không phải là số!!!");
  }
}
ktraChanLe("Sỹ Dũng");
ktraChanLe(1);
ktraChanLe(12);
ktraChanLe(215);
console.log("---------------------------------------");
console.log("BÀI 1.2");
function ktraAmDuong2(n) {
  if (n > 0 && ktraDK(n) === true) {
    console.log("Số " + n + " là số dương và chẵn");
  } else if (n > 0 && ktraDK(n) === false) {
    console.log("Số " + n + " là số dương và lẻ");
  } else if (n < 0 && ktraDK(n) === true) {
    console.log("Số " + n + " là số âm và chẵn");
  } else if (n < 0 && ktraDK(n) === false) {
    console.log("Số " + n + " là số âm và lẻ");
  } else if (n === 0) {
    console.log("Số " + n + " không phải là số dương và số âm nhưng là số chẵn");
  } else {
    console.log("Đây không phải là số!!! ");
  }
}
ktraAmDuong2(-2);
ktraAmDuong2(-5);
ktraAmDuong2(0);
ktraAmDuong2(6);
ktraAmDuong2(9);
ktraAmDuong2("Sỹ Dũng");

console.log("---------------------------------------");
console.log("BÀI 2");
function ktraNgayThang(nam, thang) {
  if (typeof nam !== "number" || typeof thang !== "number") {
    console.log("Nhập sai cú pháp!!!");
  } else {
    switch (thang) {
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        console.log("Tháng " + thang + " của năm " + nam + " có 31 ngày");
        break;
      case 4:
      case 6:
      case 9:
      case 11:
        console.log("Tháng " + thang + " của năm " + nam + " có 30 ngày");
        break;
      case 2:
        if (nam % 4 === 0 || (nam % 400 === 0 && nam % 100 !== 0)) {
          console.log("Tháng " + thang + " của năm " + nam + " có 29 ngày");
        } else {
          console.log("Tháng " + thang + " của năm " + nam + " có 28 ngày");
        }
        break;
      default:
        console.log("Nhập sai cú pháp!!!");
    }
  }
}
ktraNgayThang("Sỹ Dũng", 5);
ktraNgayThang(2020, 1);
ktraNgayThang(2020, 2);
ktraNgayThang(2020, 4);
ktraNgayThang(2021, 2);
console.log("---------------------------------------");
console.log("BÀI 2.2");
function ktraSo(n) {
  if (typeof n === "number") {
    return true;
  } else {
    return false;
  }
}
function ktraNAND(n) {
  if (ktraSo(n) === true && n % 1 == 0) {
    if (n > 0) {
      console.log("Số " + n + " là số nguyên dương");
    } else if (n < 0) {
      console.log("Số " + n + " là số nguyên âm");
    } else {
      console.log("Số " + n + " không phải nguyên dương cũng không phải nguyên âm");
    }
  } else {
    console.log("Đây không phải số cần kiểm tra!!!");
  }
}
ktraNAND("Sỹ Dũng");
ktraNAND(0);
ktraNAND(-10);
ktraNAND(10);
ktraNAND(5.2);

console.log("---------------------------------------");
console.log("BÀI 3");
function ktraPhepTinh2(a, b, c) {
  if (typeof a !== "number" || typeof b !== "number") {
    console.log("Số nhập không đúng!!!");
  } else {
    switch (c) {
      case "+":
        console.log(a + b);
        break;
      case "-":
        console.log(a - b);
        break;
      case "*":
        console.log(a * b);
        break;
      case "/":
        console.log(a / b);
        break;
      case "%":
        console.log(a % b);
        break;
      default:
        console.log("Sai phép tính!!!");
    }
  }
}
ktraPhepTinh2("Sỹ Dũng", 12, "*");
ktraPhepTinh2(12, 12, "Sỹ Dũng");
ktraPhepTinh2(12, 12, "+");
ktraPhepTinh2(12, 5, "-");
ktraPhepTinh2(12, 12, "*");
ktraPhepTinh2(12, 3, "/");
ktraPhepTinh2(12, 5, "%");

console.log("---------------------------------------");
