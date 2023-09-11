import React from 'react'
import Carousel from "react-bootstrap/Carousel";
import { carouselList } from '../../Functions/Carousel';
import './Slider.css'

const ImageSlider = () => {
  return (
        <div>
      <Carousel>
        {carouselList.map((ele,idx) => {
          return (
            <Carousel.Item key={idx}>
              <img
                className="d-block w-100"
                src={ele.src}
                alt="slide"
              />
              <Carousel.Caption>
                <h3>{ele.name}</h3>
                <p>
                  {ele.disc}
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  )
}

export default ImageSlider