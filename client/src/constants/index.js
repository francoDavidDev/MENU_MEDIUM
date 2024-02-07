export const LINKS = [
  {
    name: "Inicio",
    path: "/home",
  },
  {
    name: "Cafes",
    path: "/coffees",
  },

  /* {
        name: 'Servicios',
        path:'/services'
    },*/
  {
    name: "Dulces",
    path: "/sugars",
  },
  {
    name: "Salados",
    path: "/saltys",
  },
  {
    name: "Nuestro Instagram",
    path: "#",
  },

  {
    name: "Contacto",
    path: "#",
  },
];

import cafe from "../assets/img/cafe-expreso.jpg";
import medialunas from "../assets/img/medialunas-de-grasa.jpg";
import tostado from "../assets/img/tostado-jamon-&-queso.jpg";

export const CARDS_MENU = [
  {
    title: "CAFES",
    path: "/coffees",
    img: cafe,
    delay: 0.3,
    tag:'coffees'
  },
  {
    title: "DULCES",
    path: "/sugars",
    img: medialunas,
    delay: 0.4,
    tag:'sugars'
  },
  {
    title: "SALADOS",
    path: "/saltys",
    img: tostado,
    delay: 0.5,
    tag:'saltys'
  },
];



