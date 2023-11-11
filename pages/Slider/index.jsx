import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import allSliders from '../../utils/slider.json'
import { useState } from "react";

const Slider = () => {
    const [slidersData, setSliders] = useState(allSliders.sliders)
    console.log(slidersData);

    const onDisable = (id) => {
        const updatedSliders = slidersData.filter((slider) => slider.id !== id)
        console.log(updatedSliders);
        setSliders((slidersData) => updatedSliders)
        // console.log(sliders)
        ;
    }
   
    return (
        <Carousel>
            {slidersData && slidersData?.map((slider) => (
                <div>
                    <img src={slider.image} />
                    <p className="legend">{slider.caption}<span style={{paddingLeft:'20px', cursor:'pointer'}} 
                    onClick={() => onDisable(slider.id)}> <i class="fa fa-eye" style={{fontSize:'24px'}}></i> </span></p>
                </div>                    
            ))
                
            }
        </Carousel>
    )
}

export default Slider