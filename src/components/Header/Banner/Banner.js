import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Banner() {
  return (
    <div className="relative">
      <div className="absolute w-full bg-gradient-to-t from-white to-transparent bottom-0 z-20 h-32" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <img src="https://links.papareact.com/gi1" alt="" loading="lazy" />
        </div>
        <div>
          <img src="https://links.papareact.com/6ff" alt="" loading="lazy" />
        </div>
        <div>
          <img src="https://links.papareact.com/7ma" alt="" loading="lazy" />
        </div>
      </Carousel>
    </div>
  );
}
