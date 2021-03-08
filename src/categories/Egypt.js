import React from 'react'
import egyjokes from '../data/egyjokes'
import {Link} from "react-router-dom"
import jokeslisitng from '../data/jokes'
import Slider from "react-slick"

const Egypt = () => {
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
                <h1><strong>نكت  مصرية</strong></h1>
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
                {egyjokes.map(jokes => {
                    return(
                        <div key={jokes.j_id}>
                            <Link to={`Egypt/${jokes._id}`}>{jokes.joke}</Link>
                        </div>
                    )
                })}
            </div>   
        </div>
    )
}

export default Egypt
