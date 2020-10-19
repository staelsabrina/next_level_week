const Database = require('./db.js');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {
    //inserir dados na tabela
    /*
    await saveOrphanage(db, {

        lat: "-29.8191791",
        lng: "-51.1403251",
        name: "ACAPASS",
        whatsapp: "985121245",
        about: "A Associação Casa de Passagem de Sapucaia do Sul - ACAPASS é uma organização não governamental (ONG) de caráter filantrópico que acolhe crianças de 0 à 16 anos de forma provisória. Estas crianças passam a viver no abrigo a partir de uma medida protetiva de acolhimento institucional, devido ao abandono ou a casos em que as famílias encontram-se impossibilitadas de cumprir sua função de cuidado e proteção, conforme rege o Estatuto da Criança e Adolescente – ECA (ECA, Art. 101).",
        images: [
            "https://images.pexels.com/photos/3075061/pexels-photo-3075061.jpeg",
            "https://images.pexels.com/photos/4546136/pexels-photo-4546136.jpeg",
            "https://images.pexels.com/photos/3965547/pexels-photo-3965547.jpeg",
            "https://images.pexels.com/photos/3494565/pexels-photo-3494565.jpeg",
            "https://images.pexels.com/photos/5142195/pexels-photo-5142195.jpeg",
            "https://images.pexels.com/photos/1068205/pexels-photo-1068205.jpeg"
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de Visitas: Das 8h até 18h",
        open_on_weekends: "0"
    })

    //consultar dados da tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)
    
    //Consultar somente 1 orphanage, pelo id
    //const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "1"')
    //console.log(orphanage)

    //deletar um dado da tabela
    //await db.run("DELETE FROM orphanages WHERE id='5'")

    */
})