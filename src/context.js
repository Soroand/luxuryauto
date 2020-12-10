import React, { useReducer, useContext, useEffect } from "react";
import data from "./data";
import reducer from "./reducer";
const AppContext = React.createContext();

const initialState = {
	cars: data,
	filterCar: data,
	allMakes: ["All", ...new Set(data.map((item) => item.make))],
	city: "",
};

const AppProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const filterItem = (item) => {
		dispatch({ type: "FILTER_ITEM", payload: item });
	};
	const citySelect = (e) => {
		dispatch({ type: "CITY_SELECT", payload: e });
	};
	const searchBar = (e) => {
		dispatch({ type: "SEARCH_BAR", payload: e });
	};

	return (
		<AppContext.Provider
			value={{
				...state,
				filterItem,
				citySelect,
				searchBar,
			}}>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};

export default AppProvider;
