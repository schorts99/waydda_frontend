/*
 * Copyright (c) AzaChii and its affiliates. All Rights Reserved.
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited
 *
 * Proprietary and confidential
 *
 * Written by Angel Mendez <hello@azachii.dev>, Jun 2020
 *
 * https://azachii.dev
 *
 * LICENSE file in the root directory of this source tree.
 */
import {FaWhatsapp} from 'react-icons/fa'
import {useState} from "react";

export default function WhatsAppButton({data: {number, message, style}}) {
	
	
	const [rounded, setRounded] = useState(false);
	
	
	if (style) {
		return (
			<div className="fixed bottom-0 z-20 right-0 mb-6 mr-6">
				<button
					// onClick={handleClick}
					style={{background: "#075E54"}}
					className="grid grid-cols-1 py-3 shadow-2xl w-16 h-16 items-center rounded-full">
					<div className="col-span-1 text-center flex justify-center items-center">
						<FaWhatsapp
							size={30}
							color={"white"}
						/>
					</div>
				</button>
			</div>
		)
	}
	
	return (
		<a
			target={"_blank"}
			href={`https://wa.me/${number}?text=${message}`}
			// onClick={handleClick}
			className="grid grid-cols-1 z-20 py-3 items-center rounded shadow-2xl fixed bottom-0 w-11/12 right-0 mb-5 mx-auto left-0"
			style={{
				background: "#075E54"
			}}
		>
			<div className="col-span-1 text-center relative">
				<div className="col-span-2 absolute left-0 ml-5 text-center flex justify-center items-center">
					<FaWhatsapp
						size={20}
						color={"white"}
					/>
				</div>
				<p className="text-white font-bold">Contactar por whatsapp</p>
			</div>
		</a>
	)
}