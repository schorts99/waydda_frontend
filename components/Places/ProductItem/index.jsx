/*
 *  Copyright (c) AzaChii and its affiliates. All Rights Reserved.
 *
 *  Unauthorized copying of this file, via any medium is strictly prohibited
 *
 *  Proprietary and confidential
 *
 *  Written by AzaChii <hello@azachii.dev>, July 2020
 *
 *  https://azachii.dev/
 *
 *  LICENSE file in the root directory of this source tree.
 */

import PropTypes from 'prop-types'
import ResponsiveImage from "../../ResponsiveImage";

export default function ProductItem({
	                                    views,
	                                    name,
	                                    description,
	                                    price,
	                                    id,
	                                    aggregates,
	                                    photo,
	                                    scrollPosition,
	                                    setModalData,
	                                    total_quantity
                                    }) {
	return (
		<div
			className="flex pb-6 border-b flex-wrap items-start md:px-0 cursor-pointer"
			onClick={() => setModalData({id, name, description, price, photo, aggregates, total_quantity})}
		>
			<div className="w-4/12 ">
				<ResponsiveImage
					scrollPosition={scrollPosition}
					publicId={photo}
					height={500}
					bgColor="#fafafa"
					fit={"cover"}
					className="rounded shadow h-24 w-24 md:w-32 md:h-32 max-w-full max-h-full"
					wrapperClass="h-full rounded bg-orange-100 max-w-full max-h-full"
					srcsetSizes={{
						w_480: {
							height: 300,
							width: 300,
						},
						w_1082: {
							width: 300,
							height: 300
						},
						w_1523: {
							width: 300,
							height: 300
						},
						w_1920: {
							width: 300,
							height: 550
						}
					}}
				/>
			</div>
			<div className="w-8/12 h-24 md:h-32 md:pl-4">
				<div className="flex flex-wrap content-between h-full">
					<div className="w-full">
						<h4 className="font-bold text-lg">{name}</h4>
						{description &&
						<h5 className="text-xs md:text-sm text-gray-700 mt-2 t_truncate">{description}</h5>
						}
						{total_quantity &&
						<h4 className="text-xs font-bold mt-2">{total_quantity}</h4>
						}
					</div>
					{!views &&
					<div className="w-full">
						<h6
							className={`text-xs md:text-sm mt-2 ${views ? "" : "font-bold"}`}>{views ? `${views} ${views > 1 ? "visitas" : "visita"}` : `MXN ${price.toFixed(2)}`}</h6>
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
