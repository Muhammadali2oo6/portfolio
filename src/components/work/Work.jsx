import React from "react";
import "../navbar/navbar.css";
import SimpleImageSlider from "react-simple-image-slider";

function Work() {
  const sliderImages = [
    {
      url: "https://www.shutterstock.com/image-vector/create-your-own-website-flat-260nw-1202647258.jpg"
    },
    {
      url: "https://qodeinteractive.com/wp-content/uploads/revslider/slider-1/landing-rev-1-img-4.png"
    },
    {
      url: "https://www.pixflex.com/web-designer/images/portfolio/website-garrison-inv.jpg"
    }
    
  ];
  return (
    <div>
      <h1 className="bosh">My WORK</h1>
    <div className="slider">
      <SimpleImageSlider
        width={1000}
        height={450}
        images={sliderImages}
        showNavs={true}
      />
    </div></div>
  );
}

export default Work;
