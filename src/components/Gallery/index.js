import React from "react";
import "./Gallery.css";

import HotDog from "../../assets/hot-dog.jpg";

// TODO: implement logic to load in image to categorize
const Gallery = () => (
  <img className="image" src={HotDog} alt="item to categorize" />
);

export default Gallery;
