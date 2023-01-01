// yas >= 18
// mezuniyet == "lise" ya da mezuniyet == "üniversite"

let mezuniyet = "üniversite";
yas = 20;

if (yas >= 18 && (mezuniyet == "lise" || mezuniyet == "üniversite")) {
    console.log("ehliyet alabilir");
}
else {
    console.log("ehliyet şartlarına uymuyor");
}