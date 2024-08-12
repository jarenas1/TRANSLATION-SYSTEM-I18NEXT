import i18next from "i18next";
import Backend from "i18next-http-backend";

let languaje
if(localStorage.getItem("favoriteLanguage")){ //miramos si hay algo en el localstorage
  languaje = localStorage.getItem("favoriteLanguage")  //lo asignamos a la variable
}else{
  languaje = "es" //si no hay nada lo pone en español
}
i18next
  .use(Backend)
  .init({
    lng: languaje, // PONEMOS EL DATO QUE ESTA GUARDADO EN EL LOCAL STORAGE
    debug: false,
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
    ns: ["translations"],
    defaultNS: "translations",
  })
  .then(() => updateContent());

function updateContent() {
  const htmlElements = document.querySelectorAll("[data-i18n]");

  htmlElements.forEach((element) => {
    const value = element.getAttribute("data-i18n");
    element.innerHTML = i18next.t(value);
  });
}

window.changeLanguage = function (lng) {
  i18next.changeLanguage(lng).then(() => updateContent());
  localStorage.setItem("favoriteLanguage",lng) //GUARDAMOS EL LNG EN LENGUAJE FAVORITO
};

//
