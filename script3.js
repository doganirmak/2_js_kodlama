let ad = "Doğan";
let soyad = "Irmak";
let yas = 66;
let sehir = "Londra";

let mesaj =
  "Benim adım " +
  ad +
  " ve soyadım " +
  soyad +
  ". " +
  sehir +
  "'da yaşıyorum." +
  " Emekliliğe " +
  (65 - yas) +
  " yılım kaldı.";

//bactick
let mesaj2 = `Benim adım ${ad} ve soyadım ${soyad}. ${sehir} da yaşıyorum. Emekliliğe ${
  65 - yas
} yılım kaldı.`;

let emeklilik =
  65 - yas > 0
    ? "Emekliliğe " + (65 - yas) + " yıl kaldı."
    : "Zaten emekli oldunuz.";

let mesaj3 = `Benim adım ${ad} ve soyadım ${soyad}. ${sehir} da yaşıyorum. ${emeklilik}`;

console.log(mesaj3);
