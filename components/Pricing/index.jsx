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

import PricingItem from "./Item";
import features from '../../lib/features.json'
import Switch from '@bit/mui-org.material-ui.switch';
import {useState} from "react";
import {Element} from 'react-scroll'

export default function Pricing({onHandleClickPrice}) {
	
	const [monthly, setmonthly] = useState(false);
	
	return (
		<Element
			name={"pricing"}
			className="grid grid-cols-12 py-10 bg-red-100 justify-center items-center"
			id={"pricing"}
		>
			<div className="col-span-12 text-center px-6 ">
				<h2 className="font-bold text-4xl font-title">¡Empieza gratis!</h2>
				<h4 className="mt-4 text-gray-700">Pruebe cualquier plan pagado de forma gratuita durante 14 días
					<i className="text-xs font-bold"><br/>No se requiere tarjeta de
						crédito</i></h4>
			</div>
			
			<div className="col-span-6 col-start-4 md:col-span-2 md:col-start-6 mt-12">
				<div className="grid grid-cols-3 items-center">
					<div className="col-span-1">
						<p className={`${monthly ? "font-bold" : ""}`}>MES</p>
					</div>
					<div className="col-span-1 text-center">
						<Switch
							color={"primary"}
							onChange={(e) => {
								setmonthly(!e.target.checked)
							}}
							checked={!monthly}
							disableRipple
						/>
					</div>
					<div className="col-span-1 text-center">
						<p className={`${monthly ? "" : "font-bold"}`}>AÑO</p>
					</div>
				</div>
			</div>
			
			<div className="col-span-12 px-6 md:mt-10">
				<div className="flex flex-wrap justify-center">
					{features.slice(0, 1).map((item, k) => (
						<div key={k} className="md:w-4/12 w-full">
							<PricingItem
								handleClickPrice={onHandleClickPrice}
								monthly={monthly}
								{...item}
								// pricing={{monthly: 0, annual: 0, before: 49, description: "Gratis por apertura"}}
								// description={"Todo lo que necesitas para empezar"}
								// monthly={true}
								// name={"Free"}
								// button={"INICIAR GRATIS"}
							/>
						</div>
					))}
				</div>
			</div>
		</Element>
	)
}