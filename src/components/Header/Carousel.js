import React from 'react';
import Slider from "react-slick";

const Carousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 500,
      };

    const slides =["card-1","card-2","card-3","card-4"];
      
    return (
        <div className="carrousel_wrapper"
            style={{
                height:`${window.innerHeight}px`,
                overflow:'hidden'
            }}>

            <Slider {...settings}>
                {
                    slides.map((slide) => {
                        let img = require('../../res/images/'+slide+".jpg");
                        return(
                            <div key = {slide}>
                                <div className="carrousel_image"
                                    style={{
                                        // background:`url(${img})`,
                                        backgroundImage: `linear-gradient(rgba(19, 76, 102, .8), rgba(25, 189, 164, .5)), url(${img})`,
                                        backgroundPosition:'center',
                                        height:`${window.innerHeight}px`
                                    }}>
                                </div>
                            </div>
                        )
                    })
                }
            </Slider>
        </div>
    )
}

export default Carousel
 