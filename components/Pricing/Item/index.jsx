/*
 * Copyright (c) AzaChii and its affiliates. All Rights Reserved.
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited
 *
 * Proprietary and confidential
 *
 * Written by AzaChii <hello@azachii.dev>, July 2020
 *
 * https://azachii.dev/
 *
 * LICENSE file in the root directory of this source tree.
 */

import PropTypes from 'prop-types'
import {GoCheck} from 'react-icons/go'

export default function PricingItem({name, description, pricing, monthly, button, features, coming, important, handleClickPrice}) {
	return (
		<div className="grid grid-cols-12 my-6 px-6 bg-white py-6 shadow-2xl">
			<div className="col-span-12 text-center">
				<h3 className="font-bold text-2xl">{name}</h3>
				{coming &&
				<p className="mt-2">
					<span className="bg-red-principal py-1 px-2 rounded-full text-xs text-white">¡Próximamente!</span>
				</p>
				}
				<h5
					className={`mt-4 text-sm ${important ? "text-red-principal font-bold" : "text-gray-800"}`}>{pricing.description}</h5>
			</div>
			<div className="col-span-12 text-center mt-4">
				{pricing.before &&
				<h2
					className="text-4xl my-4 font-extrabold line-through text-black">MXN {monthly ? pricing.before : pricing.before * 10}</h2>
				}
				<h3 className="font-extrabold text-2xl">MXN {monthly ? pricing.monthly : pricing.annual * 12} <span
					className="text-sm ml-1 text-gray-700 font-normal">{monthly ? "/ mes" : "/ año"}</span></h3>

			</div>
			<div className="col-span-12 mt-5">
				<button
					onClick={handleClickPrice}
					className="bg-black text-white shadow-2xl px-4 w-full py-4 font-bold text-sm">{button}</button>
			</div>

			<div className="col-span-12 mt-10 py-4 border-b-2 border-t-2">
				<h3 className="font-bold text-xl">Caracteristicas</h3>
			</div>
			{features.map((feature, k) => (
				<Feature
					{...feature}
					key={k}
				/>
			))}
		</div>
	)
}

const Feature = ({title, included, coming}) => (
	<div className="col-span-12 items-center border-b">
		<div className={`grid grid-cols-3 items-center h-16`}>
			<div className="col-span-2 text-left text-gray-800">
				<p>{title}</p>
			</div>
			<div
				className={`${included ? "" : "bg-gray-100"} col-span-1 text-center border-l flex justify-center items-center h-full`}>
				{included && <GoCheck/>}
			</div>
		</div>
	</div>
)

PricingItem.propTypes = {
	button: PropTypes.string.isRequired,
	coming: PropTypes.bool,
	description: PropTypes.string,
	features: PropTypes.any,
	important: PropTypes.bool.isRequired,
	monthly: PropTypes.bool.isRequired,
	name: PropTypes.string.isRequired,
	pricing: PropTypes.object.isRequired
}

PricingItem.defaultProps = {
	important: false
}
