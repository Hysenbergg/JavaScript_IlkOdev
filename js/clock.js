// Prompt ile kullanıcıdan isim istiyoruz ve bu ismi HTML sayfası içerisine yazdırıyoruz.
let araIslem = prompt("Bir isim giriniz: ");

// Saniye, dakika, saat ve gün bildilerini alarak bunları html içerisinde göstermek istediğimiz için zaman fonksiyonu yazdık.
function showTime(){
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    let d = today.getDay();
    m = checkTime(m);
    s = checkTime(s);
    day = checkDay(d);
    document.querySelector("#myClock").innerHTML =  h + ":" + m + ":" + s + "  " + day;
    setTimeout(showTime, 1000);
}

// saniye ve dakikanın 10luk diliminin kontrolünu gerçekleştirdik.
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

// Gün bilgisi sayı olarak geliyor ve bu bilgiyi Türkçe bir şekilde göstermek istediğimiz için if ile kontrol işlemi yaptık.
function checkDay(d){
    if (d == "0"){
        d = "Pazar";
    } else if(d == "1"){
        d = "Pazartesi"
    } else if(d == "2"){
        d = "Salı"
    } else if(d == "3"){
        d = "Çarşamba"
    } else if(d == "4"){
        d = "Perşembe"
    } else if(d == "5"){
        d = "Cuma"
    } else if(d == "6"){
        d = "Cumartesi"
    }
    return d;
}

let isim = document.querySelector("#myName");
let isim2 = document.querySelector("#myNamee");
isim.innerHTML = `${araIslem}`;
isim2.innerHTML = `${araIslem}`;