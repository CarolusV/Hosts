// Crear un nuevo elemento <link> en la página
var linkElement = document.createElement("link");

// Establecer el atributo "rel" del elemento en "stylesheet"
linkElement.rel = "stylesheet";

// Establecer el atributo "href" del elemento en la URL del archivo CSS que se desea aplicar
linkElement.href = "https://example.com/styles.css";

// Agregar el elemento <link> al documento
document.head.appendChild(linkElement);
