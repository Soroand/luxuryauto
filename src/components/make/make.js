import React from "react";
import { useGlobalContext } from "../../context";

const Make = () => {
	const { filterItem, allMakes } = useGlobalContext();
	return (
		<div className='make'>
			{allMakes.map((item, index) => {
				return (
					<button
						className='makeBtn'
						key={index}
						onClick={() => filterItem(item)}>
						{item}
					</button>
				);
			})}
		</div>
	);
};

export default Make;
