const reducer = (state, action) => {
	if (action.type === "FILTER_ITEM") {
		const makes = action.payload;
		if (state.city === "") {
			if (makes === "All") {
				return {
					...state,
					filterCar: state.cars,
				};
			} else {
				const newCars = state.cars.filter((item) => item.make === makes);
				return {
					...state,
					filterCar: newCars,
				};
			}
		}

		if (makes === "All" && state.city === "All") {
			return {
				...state,
				filterCar: state.cars,
			};
		}
		if (state.city === "Almaty") {
			const newCars = state.cars.filter((item) => item.city === "Almaty");
			const filteredCars = newCars.filter((item) => item.make === makes);
			if (makes === "All") {
				return {
					...state,
					filterCar: newCars,
				};
			}
			return {
				...state,
				filterCar: filteredCars,
			};
		}
		if (state.city === "Nur-Sultan") {
			const newCars = state.cars.filter((item) => item.city === "Nur-Sultan");
			const filteredCars = newCars.filter((item) => item.make === makes);
			if (makes === "All") {
				return {
					...state,
					filterCar: newCars,
				};
			}
			return {
				...state,
				filterCar: filteredCars,
			};
		}
		if (state.city === "All") {
			const newCars = state.cars.filter((item) => item.make === makes);

			return {
				...state,
				filterCar: newCars,
			};
		}
	}
	if (action.type === "CITY_SELECT") {
		if (action.payload.target.value === "All") {
			return {
				...state,
				filterCar: state.cars,
				city: action.payload.target.value,
			};
		}
		if (action.payload.target.value === "Almaty") {
			const newCars = state.cars.filter(
				(item) => item.city === action.payload.target.value
			);
			return {
				...state,
				filterCar: newCars,
				city: action.payload.target.value,
			};
		}
		if (action.payload.target.value === "Nur-Sultan") {
			const newCars = state.cars.filter(
				(item) => item.city === action.payload.target.value
			);
			return {
				...state,
				filterCar: newCars,
				city: action.payload.target.value,
			};
		}
	}
	if (action.type === "SEARCH_BAR") {
		if (state.city === "Almaty") {
			const newCars = state.cars.filter((item) => item.city === "Almaty");

			const filteredCars = newCars.filter((item) =>
				item.model
					.toLowerCase()
					.includes(action.payload.target.value.toLowerCase())
			);
			return {
				...state,
				filterCar: filteredCars,
			};
		}
		if (state.city === "Nur-Sultan") {
			const newCars = state.cars.filter((item) => item.city === "Nur-Sultan");

			const filteredCars = newCars.filter((item) =>
				item.model
					.toLowerCase()
					.includes(action.payload.target.value.toLowerCase())
			);
			return {
				...state,
				filterCar: filteredCars,
			};
		}
		if (state.city === "All") {
			const newCars = state.cars.filter((item) =>
				item.model
					.toLowerCase()
					.includes(action.payload.target.value.toLowerCase())
			);
			return {
				...state,
				filterCar: newCars,
			};
		}
		return {
			...state,
		};
	}
	return state;
};

export default reducer;
