import { useState } from 'react';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';

const ImageSlider = ({slides}) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;
    const prevSlide = ()=>{
        setCurrent(current === 0 ? length-1 : current-1)
    }
    const nextSlide = ()=>{
        setCurrent(current === length -1 ? 0: current+1 )
    }
    if(!Array.isArray(slides) || slides.length <=0){
        return null
    }
    return (
        <section className="slider">
            <FaArrowAltCircleLeft className="left" onClick={prevSlide} />
            <FaArrowAltCircleRight className="right" onClick={nextSlide} />
            {
                slides.map((slide,i)=>(
                    <div className={i === current ? 'slide active' : 'slide'} key={i}>
                        {i === current && (<img className="image" src={slide.image} alt='Sliders' />)}
                    </div>
                ))
            }
            {/* <img className="image" src={slides[current].image} alt='Sliders' /> */}
        </section>
    )
}

export default ImageSlider
