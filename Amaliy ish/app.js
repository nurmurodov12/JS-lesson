// const ism = prompt("ismingizni kiriting");
// const yosh = +prompt("yoshingizni kiriting");

// let tugilganYil = 2025 - yosh;
// let oy = yosh * 12;
// let hafta = ((yosh * 365) / 7).toFixed(0);
// let kun = yosh * 365;
// let soat = yosh * 365 * 24;
// let daqiqa = yosh * 365 * 24 * 60;
// let soniya = yosh * 365 * 24 * 60 * 60;

// const result = `qadrli ${ism}. Siz ${tugilganYil} yilda tigilgansz . Va siz ${oy} oy, ${hafta} hafta, ${kun} kun, ${soat} soat, ${daqiqa } daqiqa, ${soniya} soniya yashagansiz. 😊`
// alert(result)

// const ism = prompt("ism kiriting")


const ismlar = ["Temur", "Diyor", "Ahad", ];


// if(ismlar.includes(ism)) {
//     alert(`ha bor ${ism } bor`)
// } else {
//     alert(`afsus ${ism} yoq
//         `)
// }

// for (let i = 0; i < ismlar.length; i++) {
//     let result = ismlar[i] + "bek"
//     console.log(result);
    
// }
// let i = 0
// while (i < ismlar.length) {
//     let result = ismlar[i] + "bek"
//     console.log(result);
    
//     i++
// }

// const viloyatNomi = prompt("qaysi viloyat kerak sizga ?");


// switch (viloyatNomi) {
//     case "Fargona":
//         alert("Fargona viloyatida 2 mln aholi bor")
//         break
//     case "Samarqand":
//         alert("Samarqand viloyatida 3mln aholi bor")
//         break
//     case "Toshkent":
//         alert("Toshkentda  viloyatida 10 mln aholi bor")
//         break
//     case "Qashqadaryo":
//         alert("Qashqadaryoda  viloyatida 14 mln aholi bor")
//         break


//         default:
//             alert(`hozircha bazada ${viloyatNomi} nomli viloyat mavjud emas`)
// }


const belgilar = prompt("Nimadir yozing 😊")

let meyor = 20;

if (belgilar.length > meyor) {
    alert(`Siz ${meyor} ta belgi kirithisngiz mumkin, lekin hozirda siz ${belgilar.length} ta belgi kiritdiz.Bu meyordidan ${belgilar.length - meyor} ta  kop.`)
}else {
    alert(`Siz ${meyor} ta belgi kirithisngiz mumkin, va hozirda siz ${belgilar.length} ta belgi kiritdiz.Bu meyordidan ${meyor - belgilar.length} ta  kiritishingiz mumkin.`)
}

