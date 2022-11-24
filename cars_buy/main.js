alert("Siz bu yerda o'zingiz xohlagan mashinani tuza olasz. Buning uchun siz so'rovnomani to'ldiring")

let Nomi = prompt("Mashinangizga qanaqa nom qo'yasiz");
let Rangi = prompt("Rangini kiriting");
let Maqsadi = prompt("Nima uchun ishlatasiz(poyga,taksi,yuk tashish, o'zim uchun...)?");
let IshlabChiqarilganSanasi = prompt("Nechanchi yil ishlab chiqarilgan bo'lishi kerak");
let Holati = prompt("holati Haydalgan yoki Haydalmagan");
let Markasi = prompt("markasi qanday? Masalan chevrolet");
let Modifatsiya = prompt("Qanaqa Modifatsiya bo'lsin. Masalan: 4-pozitsiya");
let Narxi = prompt("Qancha pul berolasz");
let Dvigateli = prompt("Benszinda yursinmi yoki gazda?");




let cars = {
    Nomi: `Mashina nomi: ${Nomi}`,
    Rangi: `Mashina rangi: ${Rangi}`,
    Maqsadi: `Mashinaning maqsadi: ${Maqsadi}`,
    Yili: `Yili: ${IshlabChiqarilganSanasi}`,
    Holati: `Holati: ${Holati}`,
    Markasi: `Markasi: ${Markasi}`,
    Modifatsiya: `Modifatsiya: ${Modifatsiya}`,
    Narxi: `Narxi: ${Narxi}`,
    Dvigateli: `Dvigateli: ${Dvigateli}`,
}

document.write(cars.Nomi + "<br>" + cars.Rangi + "<br>" + cars.Maqsadi + "<br>" + cars.Yili + "<br>" + cars.Holati + "<br>" + 
cars.Markasi + "<br>" + cars.Modifatsiya + "<br>" + cars.Narxi+ + "<br>" + cars.Dvigateli);







