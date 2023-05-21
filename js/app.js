window.addEventListener('DOMContentLoaded', IniciarApp);

function IniciarApp() {
    HeaderScroll();
    Navegacion();
    SlideTestimonials();
    Testimonials();
    // MenusLinks();
}

function HeaderScroll() {
    const header = document.querySelector('.header');

    window.addEventListener('scroll', function(){
        if(this.scrollY > 0){
            header.classList.add('header-scroll');
        }
        else{
            header.classList.remove('header-scroll');
        }
    });
}

function SlideTestimonials(){
    let swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          575: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          992: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        },
    });
}

function Testimonials(){

   //CON ARREGLO
   const testimoniales = [
     {id: 1, nombre: 'Messi', profesion: 'Ing. Software', mensaje: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. In dolores fugit reiciendis quos accusantium consequatur unde cum praesentium minima vel expedita inventore, vitae a commodi.', valoracion: 5, foto: 1},
     {id: 2, nombre: 'Cristiano', profesion: 'Ing. Empresarial', mensaje: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. In dolores fugit reiciendis quos accusantium consequatur unde cum praesentium minima vel expedita inventore, vitae a commodi.', valoracion: 5, foto: 2},
     {id: 3, nombre: 'Neymar Jr.', profesion: 'Profesora', mensaje: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. In dolores fugit reiciendis quos accusantium consequatur unde cum praesentium minima vel expedita inventore, vitae a commodi.', valoracion: 5, foto: 3},
     {id: 4, nombre: 'Kaká', profesion: 'Telecomunicaciones', mensaje: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. In dolores fugit reiciendis quos accusantium consequatur unde cum praesentium minima vel expedita inventore, vitae a commodi.', valoracion: 5, foto: 4},
     {id: 5, nombre: 'Iniesta', profesion: 'Ing. Industrial', mensaje: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. In dolores fugit reiciendis quos accusantium consequatur unde cum praesentium minima vel expedita inventore, vitae a commodi.', valoracion: 5, foto: 5},
     {id: 6, nombre: 'Xavi', profesion: 'Marketing', mensaje: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. In dolores fugit reiciendis quos accusantium consequatur unde cum praesentium minima vel expedita inventore, vitae a commodi.', valoracion: 5, foto: 6},
     {id: 7, nombre: 'Casillas', profesion: 'Profesor', mensaje: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. In dolores fugit reiciendis quos accusantium consequatur unde cum praesentium minima vel expedita inventore, vitae a commodi.', valoracion: 3, foto: 7},
     {id: 8, nombre: 'Suárez', profesion: 'Ing. Ambiental', mensaje: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. In dolores fugit reiciendis quos accusantium consequatur unde cum praesentium minima vel expedita inventore, vitae a commodi.', valoracion: 5, foto: 8},
     {id: 9, nombre: 'De Bruyne', profesion: 'Ing. Civil', mensaje: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. In dolores fugit reiciendis quos accusantium consequatur unde cum praesentium minima vel expedita inventore, vitae a commodi.', valoracion: 3, foto: 9},
     {id: 10, nombre: 'Villa', profesion: 'Ing. Sistemas', mensaje: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. In dolores fugit reiciendis quos accusantium consequatur unde cum praesentium minima vel expedita inventore, vitae a commodi.', valoracion: 4, foto: 10}
   ]

  // CON JSON
  // const ruta = "json/testimoniales.json";
  // fetch(ruta)
  //  .then(response => response.json())
  //  .then(datos =>{
  //     // console.log(datos);
  //     getTestimoniales(datos);
  //  });

  // CON ARREGLO
  const cardTestimoniales = document.querySelector('#testimonialesCards');
  cardTestimoniales.innerHTML = '';

  testimoniales.forEach(testimonial => {
      const { id, nombre, profesion, valoracion, mensaje, foto } = testimonial;
      const swipeSlideTestimonial = document.createElement('div');
      swipeSlideTestimonial.classList.add('swiper-slide')
      swipeSlideTestimonial.innerHTML = `
          <div class="testimonials__card">
            <div class="info">
              <div class="comillas">
                  <i class="fa-solid fa-quote-right"></i>
              </div>
              <div class="mensaje">
                  <p>${mensaje}</p>
              </div>
              <div class="valoracion">
                  ${valoracionTestimoniales(valoracion)}
              </div>
            </div>
            <div class="persona">
              <div class="foto">
                  <img src="img/testimonials/${foto}.jpg" alt="Testimonial ${id}">
              </div>
              <div class="nombre">
                  <h4>${nombre}</h4>
                  <p>${profesion}</p>
              </div>
            </div>
          </div> <!--Testimonials card-->
      `
      cardTestimoniales.appendChild(swipeSlideTestimonial);
    });

  // CON FETCH
  // function getTestimoniales(datos){
  //   const cardTestimoniales = document.querySelector('#testimonialesCards');
  //   cardTestimoniales.innerHTML = '';
    
  //   datos.forEach(testimonial => {
  //     const { id, nombre, profesion, valoracion, mensaje, foto } = testimonial;
  //     const swipeSlideTestimonial = document.createElement('div');
  //     swipeSlideTestimonial.classList.add('swiper-slide')
  //     swipeSlideTestimonial.innerHTML = `
  //         <div class="testimonials__card">
  //           <div class="info">
  //             <div class="comillas">
  //                 <i class="fa-solid fa-quote-right"></i>
  //             </div>
  //             <div class="mensaje">
  //                 <p>${mensaje}</p>
  //             </div>
  //             <div class="valoracion">
  //                 ${valoracionTestimoniales(valoracion)}
  //             </div>
  //           </div>
  //           <div class="persona">
  //             <div class="foto">
  //                 <img src="img/testimonials/${foto}.jpg" alt="Testimonial ${id}">
  //             </div>
  //             <div class="nombre">
  //                 <h4>${nombre}</h4>
  //                 <p>${profesion}</p>
  //             </div>
  //           </div>
  //         </div> <!--Testimonials card-->
  //     `
  //     cardTestimoniales.appendChild(swipeSlideTestimonial);
  //   });
  // }

  function valoracionTestimoniales(valoracion){
    if(valoracion == 5){
      let estrellas = `
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        `;
      return estrellas;
    }
    else if(valoracion == 4){
      let estrellas = `
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-regular fa-star"></i>
        `;
      return estrellas;
    }
    else if(valoracion == 3){
      let estrellas = `
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-regular fa-star"></i>
        <i class="fa-regular fa-star"></i>
        `;
      return estrellas;
    }
    else if(valoracion == 2){
      let estrellas = `
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-regular fa-star"></i>
        <i class="fa-regular fa-star"></i>
        <i class="fa-regular fa-star"></i>
        `;
      return estrellas;
    }
    else if(valoracion == 1){
      let estrellas = `
        <i class="fa-solid fa-star"></i>
        <i class="fa-regular fa-star"></i>
        <i class="fa-regular fa-star"></i>
        <i class="fa-regular fa-star"></i>
        <i class="fa-regular fa-star"></i>
        `;
      return estrellas;
    }
    else{
      let estrellas = `
      <i class="fa-regular fa-star"></i>
      <i class="fa-regular fa-star"></i>
      <i class="fa-regular fa-star"></i>
      <i class="fa-regular fa-star"></i>
      <i class="fa-regular fa-star"></i>
      `;
      return estrellas;
    }
  }
}

// function MenusLinks(){

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      //Using jQuery's animate() method to add smooth page scroll
      //The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

function Navegacion() {

  const burger = document.querySelector('.header .burger');
  const navegacion = document.querySelector('.header nav');

  // Mostrar navegacion
  burger.addEventListener('click', function(){
    burger.classList.toggle('burger-toggle');
    navegacion.classList.toggle('show-navegacion');
  });

  // Click en enlaces
  const navLinks = document.querySelectorAll('.navegacion .nav__link');
  navLinks.forEach(link=>{
    link.addEventListener('click', function(){
      burger.classList.toggle('burger-toggle');
      navegacion.classList.toggle('show-navegacion');
    });
  });

}