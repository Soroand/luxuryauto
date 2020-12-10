import React from "react";
import logo from "../../img/logo.jpg";
import { AiOutlinePhone } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { GoLocation } from "react-icons/go";
const Header = () => {
	return (
		<>
			<header className='header'>
				<div>
					<img src={logo} alt='' />
				</div>
				<div className='contacts'>
					<div className='contact'>
						<AiOutlinePhone className='icon' />
						<a href='tel:+77479256058' type='phone'>
							Sales: +7(747)-925-6058
						</a>
					</div>
					<div className='contact'>
						<HiOutlineMail className='icon' />
						<a href='mailto:shadow198rus@gmail.com'>Email Us</a>
					</div>
					<div className='contact'>
						<GoLocation className='icon' />
						<a href='https://yandex.com/maps/-/CCUAURSocD' target='_blank'>
							26 Republic Ave. Nur-Sultan
						</a>
					</div>
				</div>
			</header>
			<div className='hrRule'></div>
		</>
	);
};

export default Header;
