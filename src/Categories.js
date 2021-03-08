import React from 'react';
import jokeslisitng from './data/jokes';
import {Link, useHistory} from "react-router-dom";

const Categories = () => {
	const history = useHistory(); 
	console.log(history);
		return (
			<div className="row">
				<h1 className="txt-cntr">اضحك وفرفش</h1>

				<div className="row categorytlist">
					{jokeslisitng.map((joke) => {
						return (
						<div key={joke.id}>
							<Link to={`/${joke.link}`}  style={{backgroundImage: `url(${joke.background})`}}>
								<div className="projectitem">
									<img src={joke.icon} alt={`Arabian jokes, ${joke.icon}`} />
									<div className="overlay"><h2>{joke.name}</h2></div>
								</div>
							</Link>
						</div>
						)
					})}
				</div>
	      	</div>
		)
}

export default Categories;