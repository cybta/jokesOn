import React from 'react'
import {Link} from "react-router-dom"

const SingleJoke = ({jokes}) => {
    return (
        <div>
            <Link to={`Lebanon/${jokes._id}`}><div id={jokes.joke}>{jokes.joke}</div></Link>
        </div>
    )
}

export default SingleJoke
