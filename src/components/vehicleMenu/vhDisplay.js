import React, { useState } from "react";
import { useGlobalContext } from "../../context";
import { Link } from "react-router-dom";

const VehicleDisplay = ({ match }) => {
	const { cars } = useGlobalContext();
	const specificVh = cars.filter(
		(item) => item.id === parseInt(match.params.id)
	);
	console.log(specificVh);

	return (
		<div>
			<nav className='vhCar'>
				<Link to='/'>
					<button>Home</button>
				</Link>
			</nav>
			<section>
				{specificVh.map((item) => {
					console.log(item.images);
					return (
						<div key={item.id}>
							<div className='specificCar'>
								{/* {item.images.map((itemTwo) => {
									console.log(itemTwo.img);
									const images = [
										{ original: `${itemTwo.img}`, thumbnail: `${itemTwo.img}` },
									];
									return 
								})} */}
							</div>
							<h2>{(item.make, item.model)}</h2>
						</div>
					);
				})}
			</section>
		</div>
	);
};

export default VehicleDisplay;
