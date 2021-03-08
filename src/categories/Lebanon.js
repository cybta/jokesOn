import React from 'react'
import lebjokes from '../data/lebjokes'
import {Link} from "react-router-dom"
import SingleJoke from './SingleJoke'
import jokeslisitng from '../data/jokes'
import Slider from "react-slick"


const Lebanon = () => {
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
                <h1><strong>نكت  لبنانية</strong></h1>
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
                {lebjokes.map(jokes => {
                    return(
                        <SingleJoke jokes={jokes}  key={jokes._id} />
                    )
                })}
            </div>
        </div>
    )
}

export default Lebanon
