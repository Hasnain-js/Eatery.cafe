import React from "react";
import { Menucard } from "../../../components/menucard";
import img1 from "../../../assets/menu-image1.jpg";
import img2 from "../../../assets/menu-image2.jpg";
import img3 from "../../../assets/menu-image3.jpg";
import img4 from "../../../assets/menu-image4.jpg";
import img5 from "../../../assets/menu-image5.jpg";
import img6 from "../../../assets/menu-image6.jpg";
const Menu = () => {
  const bodycontent = [
    {
      image: img1,
      name: "American Breakfast",
      items: "Tomato / Eggs / Sausage",
      price: "25",
    },
    {
      image: img2,
      name: "American Breakfast",
      items: "Tomato / Eggs / Sausage",
      price: "25",
    },
    {
      image: img3,
      name: "American Breakfast",
      items: "Tomato / Eggs / Sausage",
      price: "25",
    },
    {
      image: img4,
      name: "American Breakfast",
      items: "Tomato / Eggs / Sausage",
      price: "25",
    },
    {
      image: img5,
      name: "American Breakfast",
      items: "Tomato / Eggs / Sausage",
      price: "25",
    },
    {
      image: img6,
      name: "American Breakfast",
      items: "Tomato / Eggs / Sausage",
      price: "25",
    },
  ];
  return (
    <div id="menu">
      <div className="section-tittle">
        <h2>Our Menus</h2>
        <h4>Tea Time &amp; Dining</h4>
      </div>
      {/* image container are a row */}
      <div id="image-container">
        {/* add menu card content */}
        {bodycontent.map((data, i) => (
          <Menucard key={i} {...data} />
        ))}
      </div>
    </div>
  );
};
export default Menu;
