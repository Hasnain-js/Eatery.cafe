import React from "react";
import img1 from "../../../assets/team-image1.jpg";
import img2 from "../../../assets/team-image2.jpg";
import img3 from "../../../assets/team-image3.jpg";
import { Team } from "../../../components/chefteam";
// To add a name members just pass an info on array
const Chef = () => {
  const bodycontent = [
    {
      image: img3,
      name: "New Catherine",
      description: "KITCHEN OFFICER",
    },
    {
      image: img2,
      name: "Lindsay Perlen",
      description: "OWNER & MANAGER",
    },
    {
      image: img1,
      name: "Isabella Grace",
      description: "PIZZA SPECIALIST",
    },
  ];
  return (
    <div id="team">
      {bodycontent.map((data, i) => (
        <Team key={i} {...data} />
      ))}
    </div>
  );
};
export default Chef;
