import React from "react";
import { useGlobalContext } from "../../context";
import { Link } from "react-router-dom";

const DisplayCar = ({ odo, imgUrl, year, price, model, id }) => {
	const { vhDisplay } = useGlobalContext();
	return (
		<div className='card' key={id}>
			<div className='car_img'>
				<Link to={`/components/vehicleMenu/${id}`}>
					<img src={imgUrl}></img>
				</Link>
			</div>
			<div className='info_container'>
				<div className='info_car'>
					<h4>{model}</h4>
					<h5>Year: {year}</h5>
					<h5>Odometer: {odo} kms</h5>
					<a href='/'>
						<i className='fas fa-video'> Watch Video</i>
					</a>
					<div className='price_devider'>
						<div className='separator'>
							<p>Est. Finance Payment</p>
							<h5>
								$195/bw
								<i className='fas fa-question-circle fa-xs'></i>
							</h5>
							<p> 5.99% for 60 Months</p>
						</div>
						<div className='price'>
							<p>Dealer Price</p>
							<h5>
								{price}
								<i className='fas fa-exclamation-circle fa-xs'></i>
							</h5>
							<p className='tax'>+ Tax</p>
						</div>
					</div>
				</div>
				<div className='partners'>
					<img
						src='https://www.luxuryautoimports.ca/wp-content/themes/convertus-achilles/achilles/assets/images/car-fax-badge-view-report-en.svg'
						alt='partners'
					/>

					<Link to={`/components/vehicleMenu/${id}`} className='linkComponent'>
						<button className='detailLink'>Details</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default DisplayCar;
