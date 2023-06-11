import menu_entrada_chicharron from "../images/menu-entrada-chicharron.jpg";
import menu_entrada_mix from "../images/menu-entrada-mix.jpg";
export const menuCarrousel = [
  {
    image: menu_entrada_chicharron,
  },
  {
    image: menu_entrada_mix,
  },
  {
    image: menu_entrada_chicharron,
  },
  {
    image: menu_entrada_mix,
  },
  {
    image: menu_entrada_chicharron,
  },
  {
    image: menu_entrada_mix,
  },
];

export const menu = [
  {
    type: "Entradas",
    dishes: [
      {
        title: "Carantanta con hogao",
        description: "Porción de carantanta con hogao para 3 personas",
        price: 7000,
        section: "start",
        image: menu_entrada_chicharron,
        available: true,
      },
      {
        title: "Arepa frita con hogao",
        description: "Porción de arepitas fritas con hogao para 2 personas",
        price: 6000,
        section: "start",
        image: menu_entrada_chicharron,
        available: true,
      },
      {
        title: "Patacon con hogao o salsa de ajo",
        description: "Porción de patacón crocante para 3 personas",
        price: 6000,
        section: "start",
        image: menu_entrada_chicharron,
        available: true,
      },
      {
        title: "Chicharrón carnudo",
        description:
          "Porción de chicharrón carnudo y crocante acompañado de patacones y arepa para 2 personas",
        price: 7000,
        section: "start",
        image: menu_entrada_chicharron,
        available: true,
      },
      {
        title: "Chorizo de la casa",
        description:
          "Porción de chorizo de la casa acompañado de patacones y arepa para 2 personas",
        price: 8000,
        section: "start",
        image: menu_entrada_chicharron,
        available: true,
      },
    ],
  },
  {
    type: "Platos fuertes",
    dishes: [
      {
        title: "Bandeja paisa",
        description:
          "Generosa bandeja paisa con porción de frijoles, arroz, aguacate, chorizo, carne asada, carne molida, huevo, chicharrón y patacón",
        price: 30000,
        section: "main",
        image: menu_entrada_chicharron,
        available: true,
      },
    ],
  },
  {
    type: "Adicionales",
    dishes: [
      {
        title: "Porción de papas a la francesa",
        description: "Papas a la francesa",
        price: 6000,
        section: "side",
        image: menu_entrada_chicharron,
        available: true,
      },
    ],
  },
  {
    type: "Bebidas",
    dishes: [
      {
        title: "Gaseosa personal",
        description: "Gaseosa Postobón",
        price: 5000,
        section: "drink",
        image: menu_entrada_chicharron,
        available: true,
      },
    ],
  },
];
