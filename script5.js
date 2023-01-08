let url = "https://www.gigapine.com/";
let firmaAdi = "Gigapine Teknoloji Bilgi Sistemleri";

// 1
console.log(url.length);

//2
countWord = firmaAdi.split(" ").length;
console.log(countWord);

//3
urlInclude = url.startsWith("https");
console.log(urlInclude);

//4
firmaAdiInclude = firmaAdi.includes("Eğitimi");
console.log(firmaAdiInclude);

//5
firmaAdiLower = firmaAdi.toLowerCase();
console.log(firmaAdiLower);

firmaAdiReplace = firmaAdiLower.replace(/ /g, "-");
console.log(firmaAdiReplace);

urlExtended = url + firmaAdiReplace;
console.log(urlExtended);

sonuc = `${url}/${firmaAdiReplace}`;
console.log(sonuc);