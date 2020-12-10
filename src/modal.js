import React from "react";
import { VscChromeClose } from "react-icons/vsc";
const Modal = () => {
	return (
		<div className='modal-background' id='modal-off'>
			<div className='modal-content'>
				<span>
					<VscChromeClose
						className='close-modal'
						onClick={(e) => {
							document.getElementById("modal-off").style.display = "none";
							document.getElementById("main-tag").style.overflow = "auto";
						}}
					/>
					<h3>COVID-19 Update</h3>
					<p>
						Dear customers, due to pandemic we have to take extra precautions
						and allow no more than 2 customers on our lot. We apologise for the
						inconvinience this may cause.
					</p>
				</span>
			</div>
		</div>
	);
};

export default Modal;
