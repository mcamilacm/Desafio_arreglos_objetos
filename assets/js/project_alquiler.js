

const propiedades_alquiler = [

 {
        nombre: "Piso luminoso en el centro histórico",
        src: "https://www.engelvoelkers.com/images/cfb1565a-8fe0-4397-98a1-10c7943d3626/villa-mediterránea-con-impresionantes-vistas-al-mar-en-font-de-sa-cala",
        descripcion: "Amplio piso ubicado en el corazón del centro histórico, con vistas a los principales monumentos de la ciudad.",
        ubicacion: "678 Historic Street, Heritage Square, CA 34567",
        habitaciones: "3 Habitaciones",
        costo: "1.800",
        smoke: false, 
        pets: false, 
      },
      
  {
        nombre: "Casa de campo con piscina privada",
        src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
        descripcion: "Encantadora casa de campo rodeada de jardines, con una piscina privada perfecta para disfrutar del verano en familia.",
        ubicacion: "890 Countryside Avenue, Sunny Meadows, CA 45678",
        habitaciones: "4 Habitaciones",
        costo: "2.500",
        smoke: false,
        pets: true, 
      },
      
 {
        nombre: "Ático de lujo con terraza panorámica",
        src: "https://www.360agenciainmobiliaria.com/inmuebles/gal1_20211116201114.jpg",
        ubicacion: "123 Skyhigh Avenue, Prestige Towers, CA 67890",
        habitaciones: "2 Habitaciones",
        costo: "2.300",
        smoke: false, 
        pets: false, 
      },

      {
        nombre: "Villa mediterránea con acceso directo al mar",
        src: "https://www.engelvoelkers.com/images/cfb1565a-8fe0-4397-98a1-10c7943d3626/villa-mediterránea-con-impresionantes-vistas-al-mar-en-font-de-sa-cala",
        descripcion: "Impresionante villa de estilo mediterráneo situada en primera línea de playa, con acceso privado a la arena y al mar.",
        ubicacion: "456 Seaside Boulevard, Mediterranean Paradise, CA 89012",
        habitaciones: "5 Habitaciones",
        costo: "4.500",
        smoke: true,
        pets: false,
      },


    ]


    const section = document.querySelector("#alquiler_section");

    for (let propiedad of propiedades_alquiler){
 
        let smokeIcon = propiedad.smoke ? "🚬" : "🚭";  
    let petsIcon = propiedad.pets ? "🐾" : "🚫"; 

    let smokeMessage = propiedad.smoke ? "Se permite fumar" : "No se permite fumar"; 
    let petsMessage = propiedad.pets ? "Se permiten mascotas" : "No se permiten mascotas";

    const template2 = `
    <div class="template_space">
    <h5> ${propiedad.nombre} </h5>
    <img src=${propiedad.src} width=300px> </img>
    <p> ${propiedad.descripcion}</p>
    <p>${propiedad.ubicacion}</p>
    <p>${propiedad.habitaciones}</p>
    <p>${propiedad.costo}</p>
    <p>${smokeIcon} ${smokeMessage}</p>
    <p>${petsIcon} ${petsMessage}</p>
    </div>
        `;

        section.innerHTML += template2


    }





 