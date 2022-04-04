import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Carousel from 'react-bootstrap/Carousel'
import mobile from './mobile.jpg'
import home from './home.jpg'
import fashion from './fashion.jpg'

const Carousal = () =>{
    return(
        <Carousel className="App-carousel">
            <Carousel.Item interval={1000} className="citem">
                <img 
                className="d-block w-100"
                src={mobile}
                alt="mobile"
                />
            </Carousel.Item>
            <Carousel.Item interval={1000} className="citem">
                <img 
                className="d-block w-100"
                src={home}
                alt="home appliances"
                />
            </Carousel.Item>
            <Carousel.Item interval={1000} className="citem">
                <img 
                className="d-block w-100"
                src={fashion}
                alt="fashion accessories"
                />
            </Carousel.Item>
        </Carousel>
    )
}

export default Carousal;