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

export default function Pricing() {
	return (
		<div className="grid grid-cols-12 mb-12 bg-blue-100" id={"pricing"}>
			<div className="col-span-12 text-center px-6 pt-10">
				<h2 className="font-bold text-4xl font-title">¡Empieza gratis!</h2>
				<h4 className="mt-4 text-gray-700">Pruebe cualquier plan pagado de forma gratuita durante 14 días
					<i className="text-xs font-bold"><br/>No se requiere tarjeta de
						crédito</i></h4>
			</div>
			<div className="col-span-12 px-6 md:mt-10">
				<div className="grid grid-cols-12 md:gap-12">
					{features.map((item, k) => (
						<div key={k} className="col-span-12 md:col-span-4">
							<PricingItem
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
		</div>
	)
}