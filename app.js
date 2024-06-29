// 1. sodda kalkulyator yarating prompt dan foydalaning 

// let a = +prompt("Birinchi sonni kiriting");
// let b = +prompt("Ikkinchi sonni kiriting");
// let action = +prompt("Ushbu kiritilgan sonlarni bir biriga qo'shish uchun 1, ayirish uchun 2, ko'paytirish uchun 3, bo'lish uchun 4 sonini kiriting");

// function doAction(a, b, action) {
//     if (isNaN(a) || isNaN(b) || isNaN(action)) {
//         return `"String" ma'lumot turida ma'lumot kiritildi, iltimos son kiriting!`;
//     } else if (action == 1) {
//         return a + b;
//     } else if (action == 2) {
//         return a - b;
//     } else if (action == 3) {
//         return a * b;
//     } else if (action == 4) {
//         if (b == 0) {
//             return `Son 0 ga bo'linmaydi. Iltimos, bo'luvchi ya'ni ikkinchi kiritgan qiymatingizga "0" dan boshqa qiymat kiriting!`;
//         } else {
//             return a / b;
//         }
//     } else {
//         return `No'tog'ri qiymat kiritildi. Iltimos, amalni bajarish uchun 1, 2 , 3 yoki 4 sonini kiriting!`;
//     }
// }

// alert((doAction(a, b, action)));








// 2. prompt da kiritilgan son musbat bo’lsa unga qiymatini 1ga kamaytirsin manfiy bo’lsa 1 ga oshirsin 

// let a = +prompt("Son kiriting");

// function getNumber(a){
//     if (isNaN(a)){
//         return `"String" ma'lumot turida ma'lumot kiritdingiz. Iltimos, son kiriting!`;
//     } else {
//         if (a == 0){
//             return a;
//         } else if (a > 0){
//             return --a;
//         } else if (a < 0){
//             return ++a;
//         } else {}
//     }
// }

// alert(getNumber(a));










// 3. argument sifatida qabul qilgan sonni teskari qiluvchi arrow function yarating kiritilgan sonni 2 xonaligini tekshiring va bu function faqat 2 xonali son uchun ishlasin 



// 1-USUL

// let number = +prompt("Ikki xonali son kiriting");

// const changeNumber = (number) => {
//    if (isNaN(number)){
//     return `"String" ma'lumot turida ma'lumot kiritdingiz. Iltimos, son kiriting!`
//    } else {
//     if (number >= 10 && number <= 99){
//         let numt = (parseInt(number / 10));
//         let numo = number % 10;
//         let reversedNumber = (numo * 10) + numt;
//         return reversedNumber;
//     } else {
//         return `Ikki xonali bo'lmagan son kiritdingiz. Iltimos ikki xonali son kiriting!`
//     }
//    }
// }

// alert(changeNumber(number));



// 2-USUL

// const reverseTwoDigitNumber = (number) =>{
//     if(isNaN(number)){
//         return `"String" ma'lumot turida ma'lumot kiritildi. Iltimos, 2 xonali son kiriting!`;
//     } else if (number >= 10 && number <= 99){
//         let reversedNumber = (String(number).split('').reverse().join(''));
//         return reversedNumber;
//     } else {
//         return `Ikki xonali bo'lmagan son kiritdingiz. Iltimos faqat ikki xonali son kiriting!`;
//     }
// }
// alert(reverseTwoDigitNumber(12));










// 4. 3-savolni 3 xonali son uchun ham bajaring 

// const reverseTwoDigitNumber = (number) => {
//     if (isNaN(number)) {
//         return `"String" ma'lumot turidagi ma'lumot kiritildi. Iltimos, son kiriting!`
//     } else {
//         if ( number >= 100 && number <= 999){
//             let reversedNumber = (String(number).split('').reverse().join(''));
//             return reversedNumber;
//         } else {
//             return `Uch xonali bo'lmagan son kiritdingiz. Iltimos, faqat uch xonali son kiriting!`
//         }
//     }
// }

// alert(reverseTwoDigitNumber(123));











// 5. student baliga qarab o’qishga kirgan mavqeini aniqlang 100% - 70% bo’lsa budjet 70% - 50% contract 50% dan past bo’lsa yiqildi bu savolni function decloration dan foydalanib
// bajaring student balini function ga argument sifatida kiritilsin


// function  getExamResults(score){
//     if(isNaN(score)){
//         return `"String" ma'lumot turidagi ma'lumot kiritidingiz. Iltimos, son kiriting!`;
//     } else {
//         if (score >= 70 && score <= 100){
//             return `Byudjet`;
//         } else if (score >= 50 && score < 70){
//             return `Contract`;
//         } else if (score < 50){
//             return `Yiqildi`;
//         } else {
//             return `No'to'g'ri imtixon bali kiritildi`;
//         }
//     }
// }

// alert(getExamResults(30));