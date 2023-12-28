import img1 from "./1.jpg";
import img2 from "./2.jpg";
import img3 from "./3.jpg";
import img4 from "./4.jpg";
import img5 from "./5.jpg";

const obj = [img1, img2, img3, img4, img5];
const productObj = [
  {
    id: 1,
    name: "French Bread",
    description:
      "French Bread with English ham with a variety of different types of veggies",
    price: 100.0,
    rating: 4,
    img: img1,
  },
  {
    id: 2,
    name: "Ramen",
    description: "Ramen with soft boiled eggs and a veggies and chicken",
    price: 200.0,
    rating: 4.5,
    img: img2,
  },
  {
    id: 3,
    name: "Chicken Strips",
    description:
      "Long chips of deep fried chicken witha tangy  sauce accompainment",
    price: 150.0,
    rating: 4,
    img: img3,
  },
  {
    id: 4,
    name: "Mutton Ramen",
    description: "Ramen with soft boiled eggs and a veggies and mutton",
    price: 200.0,
    rating: 3.5,
    img: img4,
  },
  {
    id: 5,
    name: "Chicken Dum Biryani",
    description: "Succulent chicken with biryani and raitha and a kebab on top",
    price: 300.0,
    rating: 5,
    img: img5,
  },
];
export { obj, productObj };
