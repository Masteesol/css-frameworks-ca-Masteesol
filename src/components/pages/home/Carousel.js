import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import images from '../../Images.js'

function CreateCarousel(props) {
  return (
      <Carousel variant="light" className="mt-5">
        {CarouselItem}
    </Carousel>
  )
}

const CarouselItem = images.carousel.map((url, index) => {
  const keyName = "card-" + index;
  return (
    <Carousel.Item key={keyName}>
        <img
        className="d-block carousel-image"
        src={url}
        alt={"slide image "+index}
        />
    </Carousel.Item>
  )
})

export default CreateCarousel;