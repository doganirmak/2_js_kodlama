let x = 20;

if (10 < x < 50) {
  console.log(x + ": 10 ile 50 arasında");
}

/*********/

let x1 = -13;

if (Math.abs(x1) % 2 == 0 && x1 > 0) {
  console.log(x1 + ": pozitif çift bir sayıdır");
} else {
  console.log(x1 + ": pozitif tek bir sayıdır");
}

/*********/

let a = 12;
let b = 23;
let c = 35;

if (a < b && a < c) {
  console.log("En küçük sayı: " + a);
}

/*********/

let vize1 = 50;
let vize2 = 50;
let final = 20;
let ort = (((vize1 + vize2) / 2) * 0.4) + final * 0.6;

if (ort > 50) {
  if (final > 50) {
    console.log("Geçti");
  }
} else {
  if (final > 70) {
    console.log("Geçti");
  } else {
    console.log("Kaldı");
  }
}