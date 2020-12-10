import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import ShowCar from "./components/showCar/ShowCar";
import Header from "./components/header/header";
import "./App.css";
import Modal from "./modal";
import VhDisplay from "./components/vehicleMenu/vhDisplay";

function App() {
	return (
		<React.Fragment>
			<Router>
				<div className='just' id='main-tag'>
					<Header />
					<Route exact path='/'>
						<Modal />
						<ShowCar />
					</Route>
				</div>
				<Route path='/components/vehicleMenu/:id' component={VhDisplay} />
			</Router>
		</React.Fragment>
	);
}
export default App;
