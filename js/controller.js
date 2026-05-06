var mainContainer = document.getElementById("mainContainer");
var navLinks = document.querySelectorAll(".navLink");

// var preloadView = document.getElementById("preloadView");

var content = {
  home: `<h1>Asignatura</h1><h2>Home</h2>`,
  about: `<h2>Acerca de nosotros</h2>`,
  contact: `<h2>Página de Contacto</h2>`
}
// var url = window.location.href
// http://127.0.0.1:3000/?section=section1
// console.log(url);
// Obtener la section
var params = new URLSearchParams(window.location.search);
// console.log(params.getAll("vs"));
var page = params.get("page");
console.log(page);
// loadSection(page);

// var section1 = params.get("section1");

function loadSection(pageName) {
  // Cambiar contenido
  mainContainer.innerHTML = content[pageName] || content['home'];

  // Pintar el menú: Quitamos la clase 'active' de todos y se la damos al clicado
  navLinks.forEach(link => {
    link.classList.remove("active");
    if(link.getAttribute("page") === pageName) {
      link.classList.add("active");
      console.log(link);
    }
  });
}

// 3. Escuchar los clics para evitar la recarga
navLinks.forEach(link => {
  link.addEventListener("click", function(event) {
    event.preventDefault(); // <--- AQUÍ evitamos que la página se recargue
    
    // var section = this.getAttribute("data-section");
    var page = this.getAttribute("page");
    var href = this.getAttribute("href");
    console.log(href);

    // Cambiamos la URL visualmente sin recargar
    // history.pushState(null, "", "?section=" + section);
    history.pushState(null, "",href);
    
    // Cargamos la sección
    // section = section.substring(6);
    console.log(page);
    loadSection(page);
  });
});