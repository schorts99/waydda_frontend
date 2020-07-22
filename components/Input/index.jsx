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

export default function SimpleInput({label, type, placeholder, maxLength, minLength, handleChange, value, name}) {
	return (
		<div className="grid grid-cols-1 mb-5">
			<div className="col-span-1 mb-2">
				<label className="text-xs text-gray-600 uppercase font-bold">{label}</label>
			</div>
			<div className="col-span-1">
				{type === "textarea" ?
					<textarea
						onChange={handleChange}
						value={value}
						placeholder={placeholder}
						rows={4}
						name={name}
						className="rounded px-3 py-4 font-bold border-black text-lg border-2 w-full"
					/>
					:
					<input type={type}
					       value={value}
					       name={name}
					       onChange={handleChange}
					       maxLength={maxLength}
					       minLength={minLength}
					       className="rounded px-3 py-4 font-bold border-black text-lg border-2 w-full"
					       placeholder={placeholder}/>
				}
			
			</div>
		</div>
	)
}

SimpleInput.propTypes = {
	label: PropTypes.any.isRequired,
	maxLength: PropTypes.any,
	minLength: PropTypes.any,
	placeholder: PropTypes.any.isRequired,
	type: PropTypes.any.isRequired,
	value: PropTypes.string
}

SimpleInput.defaultProps = {
	label: "",
	maxLength: 20,
	minLength: 5,
	placeholder: "",
	type: "text",
	value: ""
}