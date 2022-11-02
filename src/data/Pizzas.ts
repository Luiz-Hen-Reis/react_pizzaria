import pizza1 from "../assets/images/pizza.png";
import pizza2 from "../assets/images/pizza2.png";
import pizza3 from "../assets/images/pizza3.png";
import pizza4 from "../assets/images/pizza4.png";
import pizza5 from "../assets/images/pizza5.png";
import pizza6 from "../assets/images/pizza6.png";
import sweetPizza from "../assets/images/pizza7.png";
import { Pizza } from "../types/Pizza";

export const pizzas: Pizza[] = [
  {
    flavor: "Mussarela",
    priceNormal: 42.99,
    priceLarge: 49.99,
    image: pizza1,
    description: "Mussarela",
  },
  {
    flavor: "Marguerita",
    priceNormal: 44.99,
    priceLarge: 52.99,
    image: pizza2,
    description: "Mussarela, tomate, ricota e manjericão",
  },
  {
    flavor: "Lombo",
    priceNormal: 41.99,
    priceLarge: 50.0,
    image: pizza3,
    description: "Lombo, mussarela, cebola e tomate",
  },
  {
    flavor: "Brócolis",
    priceNormal: 43.99,
    priceLarge: 51.99,
    image: pizza4,
    description: "Mussarela, brócolis e bacon",
  },
  {
    flavor: "Portuguesa",
    priceNormal: 43.99,
    priceLarge: 41.99,
    image: pizza5,
    description: "Presunto, ervilha, ovo, cebola e mussarela",
  },
  {
    flavor: "Do Chefe",
    priceNormal: 42.99,
    priceLarge: 49.99,
    image: pizza6,
    description: "Presunto, ovo, azeitona sem caroço, ervilha e mussarela",
  },
  {
    flavor: "Escarola",
    priceNormal: 45.99,
    priceLarge: 50.99,
    image: pizza1,
    description: "Escarola, mussarela e bacon",
  },
  {
    flavor: "Hot Dog",
    priceNormal: 39.99,
    priceLarge: 45.99,
    image: pizza2,
    description: "Mussarela, salsicha, vinagrete, catchup, mostarda, maionese e batata palha",
  },
  {
    flavor: "Milho",
    priceNormal: 39.99,
    priceLarge: 45.99,
    image: pizza3,
    description: "Mussarela e milho",
  },
  {
    flavor: "Mexicana",
    priceNormal: 40.99,
    priceLarge: 46.99,
    image: pizza4,
    description: "Mussarela, frango e milho",
  },
  {
    flavor: "Atum",
    priceNormal: 42.99,
    priceLarge: 48.99,
    image: pizza5,
    description: "Atum, cebola e tomate",
  },
  {
    flavor: "Americana",
    priceNormal: 41.99,
    priceLarge: 46.99,
    image: pizza6,
    description: "Frango e mussarela",
  },
  {
    flavor: "Chocolate",
    priceNormal: 42.99,
    priceLarge: 49.99,
    image: sweetPizza,
    description: "Chocolate e granulado",
  },
  {
    flavor: "Romeu e Julieta",
    priceNormal: 42.99,
    priceLarge: 49.99,
    image: sweetPizza,
    description: "Mussarela e goiabada",
  },
  {
    flavor: "Chocopizza",
    priceNormal: 42.99,
    priceLarge: 49.99,
    image: sweetPizza,
    description: "Chocolate, morango e kiwi",
  },
  {
    flavor: "Prestígio",
    priceNormal: 42.99,
    priceLarge: 49.99,
    image: sweetPizza,
    description: "Chocolate, coco e leite condensado",
  },
];
