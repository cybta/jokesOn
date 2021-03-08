import React from 'react'
import ksajokes from '../data/ksajokes'
import {Link} from "react-router-dom"
import jokeslisitng from '../data/jokes'
import Slider from "react-slick"

const KSA = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };
    return (
        <div>
            <div className="flex ai-c jc-sb">
                <h1><strong>نكت  سعودية</strong></h1>
                <Link to="/" className="back-btn">Back</Link>
            </div>
            <div className="row">
                <Slider {...settings}>
                    {jokeslisitng.map((joke) => {
                        return (
                        <div key={joke.id} className="jokecarousselitem">
                            <Link to={`/${joke.link}`} >
                                <div>
                                    <div className="iconcat">
                                        <img src={joke.icon} alt={`Arabian jokes, ${joke.icon}`} />
                                    </div>
                                    <div className="joketitle">{joke.name}</div>
                                </div>
                            </Link>
                        </div>
                        )
                    })}
                </Slider>
            </div>
            <div className="jokelist"> 
                {ksajokes.map(jokes => {
                    return(
                        <div key={jokes.j_id}>
                            <Link to={`KSA/${jokes._id}`}>{jokes.joke}</Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default KSA
