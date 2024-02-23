const propiedades_venta = [
  

    {
    nombre: "Apartamento acogedor en la montaña",
    src: "assets/img/img1.jpeg",
    descripcion: "Encantador apartamento situado en lo alto de una montaña, perfecto para disfrutar de la naturaleza y la tranquilidad.",
    ubicacion: "789 Mountain Road, Summit Peaks, CA 23456",
    habitaciones: "2 Habitaciones",
    costo: "1.200",
    smoke: true,
    pets: false,
  },
  
 {
    nombre: "Cabaña rústica junto al lago",
    src: "https://img.freepik.com/fotos-premium/tranquilo-refugio-junto-al-lago-cabana-rustica-luz-sol_961965-142.jpg",
    descripcion: "Encantadora cabaña de madera ubicada en las orillas de un pintoresco lago, ideal para relajarse y desconectar.",
    ubicacion: "456 Lakefront Drive, Serenity Bay, CA 34567",
    habitaciones: "3 Habitaciones",
    costo: "1.500",
    smoke: true,
    pets: true,
  },
  
 {
    nombre: "Loft moderno en el centro de la ciudad",
    src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/504065981.jpg?k=8f3eb8b21be884c2c605e13901d72a556896cba7c10d112cd3d2b9e7c26edf97&o=&hp=1",
    descripcion: "Elegante loft situado en el corazón de la ciudad, con acceso a todas las comodidades urbanas y vistas impresionantes.",
    ubicacion: "123 City Center Avenue, Metroville, CA 45678",
    habitaciones:"1 Habitación",
    costo: "900",
    smoke: false,
    pets: true, 
  },
  
{
    nombre: "Villa de lujo en la playa",
    src: "https://www.eltiempo.com/files/article_multimedia/uploads/2019/09/11/5d7973dc1645d.jpeg",
    descripcion: "Espectacular villa ubicada frente al mar, con acceso privado a la playa y todas las comodidades de un resort de cinco estrellas.",
    ubicacion: "789 Beachfront Boulevard, Paradise Cove, CA 56789",
    habitaciones: "4 Habitaciones",
    costo: "3.000",
    smoke: false, 
    pets: false, 
},

    ]


    const section = document.querySelector("#venta_section");

    for (let propiedad of propiedades_venta){
 
        let smokeIcon = propiedad.smoke ? "🚬" : "🚭";  
    let petsIcon = propiedad.pets ? "🐾" : "🚫"; 

    let smokeMessage = propiedad.smoke ? "Se permite fumar" : "No se permite fumar"; 
    let petsMessage = propiedad.pets ? "Se permiten mascotas" : "No se permiten mascotas";

    const template = `
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

        section.innerHTML += template


    }







