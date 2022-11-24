
let tanla = prompt ("siz bu yerdan tesla va lamborghinini tanlay olasz. Agar tesla xohlasayiz 1ni yoki lambarghini kerak bo'lsa 0ni yozing ");

let cars = {
    tesla: {
        Creator: "Creator Elon mask",
        Vebsayt: "Vebsayt tesla.com",
        Created_company: "Created_company 2003",
        model:{
            model1: "Tesla Cybertruck",
            model2: "Model S",
            model3: "Model Y",
            model4: "Model 3",
            model5: "Roadster",    
        },
        modelS: {
            price: "modelningprice 80000$",
            tezlanish: "modelSning tezlanish 2.4 sekundda 100km/soat",
            zaryad: "modelSning zaryad 600km/soat",
        },
        modelY: {
            price: "modelYnning price 85000$",
            tezlanish: "modelYning tezlanish 2.7 sekundda 100km/soat",
            zaryad: "modelYning zaryad 500km/soat",
        },
    
        model3: {
            price: "model3ning price 39000$",
            tezlanish: "model3ning tezlanish 3.2 sekundda 100km/soat",
            zaryad: "model3ning zaryad 500km/soat",
        },
        modelX: {
            price: "modelXning price 45000$",
        },
    },
    lombarghini: {
        turi : "Sho'ba korxonasi",
        xizmatlari: "Avtomobilsozlik",
        asos_solingan: 1963,
        joylashuvi: "Italiya",
        asoschisi: "Ferruccio Lamborghini",
        brendi: "ducati motorholding SpA",
        vebsayt: "lamborghini.com",
    
        modellari: {
            model1: "Lombarghini aventador S",
            model2: "Lombarghini huracan LP 610-4 Spayder",
            model3: "Lombarghini Urus",
        },
    
        lombarghiniaventadrS: {
            sanasi: "LombarghiniaventadrSning sanasi 2018",
            dvigatel: "LombarghiniaventadrSning dvigatel V12",
            tugash_sanasi: "LombarghiniaventadrSning tugash_sanasi 2022",
        },
    
        Huracan: {
            dvigatel: "Huracanni dvigateli V10",
            gildirak: "Huracan gildirak LP 580-2 va Spyder",
        },
    
        Urus: {
            dvigatel: "Urusning dvigateli V8",
        },
    },
   
}




if ( tanla == true) { 
    document.write(cars.tesla.Creator + "<br>" + cars.tesla.Vebsayt + "<br>" + cars.tesla.Created_company + "<br>" + `Bu yerda tesla modellari berilgan`+ "<br>" + cars.tesla.model.model1 + "<br>" + cars.tesla.model.model2  + "<br>" + cars.tesla.model.model3 + "<br>" + cars.tesla.model.model4 
    + "<br>" +  cars.tesla.model.model5 + "<br>" + cars.tesla.modelS.price + "<br>" + cars.tesla.modelS.tezlanish+ "<br>" + cars.tesla.modelS.zaryad 
   + "<br>" + cars.tesla.modelY.price+ "<br>" + cars.tesla.modelY.tezlanish+ "<br>" + cars.tesla.modelS.zaryad
    + "<br>" + cars.tesla.model3.price + "<br>" + cars.tesla.model3.tezlanish + "<br>" + cars.tesla.model3.zaryad)
}


else {
    document.write(cars.lombarghini.turi + "<br>" + cars.lombarghini.xizmatlari + "<br>" + cars.lombarghini.asos_solingan + "<br>" + cars.lombarghini.joylashuvi + "<br>" + cars.lombarghini.asoschisi + "<br>" + cars.lombarghini.brendi + "<br>" + cars.lombarghini.vebsayt + "<br>" + 
    `Bu yerda lamborghini modellari bor` + "<br>" + cars.lombarghini.modellari.model1 + "<br>" + cars.lombarghini.modellari.model1 + "<br>" +cars.lombarghini.modellari.model2 + "<br>" +cars.lombarghini.modellari.model3 + "<br>" + 
    `va bu yer lamborghini modellari haqida` + "<br>" + cars.lombarghini.lombarghiniaventadrS.sanasi + "<br>" + cars.lombarghini.lombarghiniaventadrS.dvigatel  + "<br>" + cars.lombarghini.lombarghiniaventadrS.tugash_sanasi  + "<br>" + 
    cars.lombarghini.Huracan.dvigatel  + "<br>" + cars.lombarghini.Huracan.gildirak  )
}






