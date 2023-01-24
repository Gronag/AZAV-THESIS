import "./Home.css";
import React, { useState, useEffect } from 'react';



export const Home = () => {
    const [myIndex, setMyIndex] = useState(0);
    const images = [
      'https://64.media.tumblr.com/0df2a9f2d25f7538f0aef91b3874c730/afd2a0db56b9988f-f8/s540x810/6feac5068d03667f18262d425846f36c39f9549e.jpg',
      'https://64.media.tumblr.com/0d4cc9de067e04b62c757f56578cf8ca/afd2a0db56b9988f-85/s540x810/01e37f8361dc32a5eccaab23bea2e801b46d6588.jpg',
      'https://64.media.tumblr.com/4b23a576793f4bc42023d3302afbebb1/afd2a0db56b9988f-4f/s540x810/60abeba2696aba839ffe681eded3d9197b6a0a2d.jpg'
    ];
  
    // useEffect(() => {
    //   function slideshow() {
    //     setMyIndex(myIndex + 1);
    //     if (myIndex >= images.length) {
    //       setMyIndex(0);
    //     }
    //     setTimeout(slideshow, 30000); // Change image every 3 seconds
    //   }
    //   slideshow();
    // }, [myIndex]);
  return (
    <div className="home">
      <div className="intro">
        <h1>Wilkommen auf der Website</h1>
        <p>Review Lorem, ipsum dolor sit amet consectetur adipisicing elit.
           Aut est ipsam eius necessitatibus quod, molestiae, architecto 
           asperiores facere debitis impedit maiores qui labore modi unde maxime, 
           excepturi doloremque! Eligendi, similique?</p>
      </div>
      <div>
        {
          images.map((image, index) => (
            <img key={index} src={image} className="homeimg" 
            style={{ display: index === myIndex ? 'block' : 'none' }}
            />
          ))
        }
        {/* <img className="homeimg" src" alt="Titelbild" /> */}
      </div>
    </div>
  );
};
