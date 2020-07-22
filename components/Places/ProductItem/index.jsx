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

import PropTypes from 'prop-types'
import ResponsiveImage from "../../ResponsiveImage";

export default function ProductItem({views}) {
	return (
		<div className={`grid grid-cols-12 gap-4 mx-2 pb-6 mb-6 border-b ${views ? "items-center" : "items-center"}`}>
			<div className="col-span-4 items-center flex">
				<ResponsiveImage
					publicId={"fresh-and-delicious.jpg"}
					height={500}
					className="rounded shadow"
					wrapperClass="h-full"
				/>
			</div>
			<div className="col-span-8">
				<h4 className="font-bold">Carne sabrosa sin sangre</h4>
				{!views &&
				<h5 className="text-xs text-gray-700 my-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit</h5>
				}
				<h6
					className={`text-sm mt-1 ${views ? "" : "font-bold"}`}>{views ? `${views} ${views > 1 ? "visitas" : "visita"}` : "MXN 45.00"}</h6>
				{views &&
				<h5 className="text-gray-700 text-xs my-1">Última actualización: <span className="font-bold">Hace 5 horas</span>
				</h5>
				}
			</div>
		</div>
	)
}

ProductItem.propTypes = {
	views: PropTypes.number
}