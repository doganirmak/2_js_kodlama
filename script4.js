let kursAdı = "Web Geliştirme";

let sonuc;

sonuc = kursAdı.toLowerCase();
sonuc = kursAdı.toUpperCase();
sonuc = kursAdı.length;
sonuc = kursAdı[1];
sonuc = kursAdı.slice(-10);

sonuc = kursAdı.substring(0, 6);

sonuc = kursAdı.replace("Web", "Mobile");
sonuc = kursAdı.trim();
sonuc = kursAdı.trimEnd();
sonuc = kursAdı.trimStart();

sonuc = kursAdı.indexOf("Geliştirme");
sonuc = kursAdı.split(" ");
sonuc = kursAdı.split(" ")[0];


console.log(sonuc);
