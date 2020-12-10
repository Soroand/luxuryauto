import React from "react";
import DisplayCar from "../displayCar/DiplayCar";
import Make from "../make/make";

import { useGlobalContext } from "../../context";

function ShowCar() {
	const { filterCar, citySelect, city, searchBar } = useGlobalContext();
	return (
		<React.Fragment>
			<div className='cityAndSearch'>
				<div className='top-search'>
					<span>
						<h3>Choose your city:</h3>
						<select name='city' onChange={(e) => citySelect(e)}>
							<option value=''>--- Choose Your City ---</option>
							<option value='All'>All</option>
							<option value='Almaty'>Almaty</option>
							<option value='Nur-Sultan'>Nur-Sultan</option>
						</select>
					</span>
					<h3>Search by:</h3>
					<input
						type='text'
						placeholder='ex. Bmw 328i'
						onChange={(e) => searchBar(e)}
					/>
				</div>
				<div className='inventory_header'>
					<h2>Vehicles for sale in {city}</h2>
					<h4>{filterCar.length} available</h4>
				</div>
			</div>
			<Make />
			{filterCar.map((item) => {
				return <DisplayCar key={item.id} {...item} />;
			})}
		</React.Fragment>
	);
}

export default ShowCar;
