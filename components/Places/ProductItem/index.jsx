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

export default function ProductItem({views, name, description, price, image}) {
	return (
		<div className="flex pb-6 mt-6 border-b items-start px-3">
			<div className="w-4/12">
				<ResponsiveImage
					publicId={image}
					height={500}
					bgColor="#fafafa"
					fit={"cover"}
					className="rounded shadow h-24 w-24"
					wrapperClass="h-full rounded bg-orange-100"
				/>
			</div>
			<div className="w-9/12 h-24">
				<div className="flex flex-wrap content-between h-full">
					<div className="w-full">
						<h4 className="font-bold text-lg">{name}</h4>
						{description &&
						<h5 className="text-xs text-gray-700 mt-1">{description}</h5>
						}
					</div>
					{!views &&
					<div className="w-full">
						<h6
							className={`text-xs mt-1 ${views ? "" : "font-bold"}`}>{views ? `${views} ${views > 1 ? "visitas" : "visita"}` : `MXN ${price.toFixed(2)}`}</h6>
					</div>
					}
					{views &&
					<div className="w-full">
						<h5 className="text-gray-700 text-xs my-1">Última actualización: <span
							className="font-bold">Hace 5 horas</span>
						</h5>
					</div>
					}
				</div>
			</div>
		</div>
	)
}

ProductItem.propTypes = {
	views: PropTypes.number
}