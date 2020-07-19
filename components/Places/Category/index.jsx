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
import Container from "../../Container";

export default function Category({count, label}) {
	if (count <= 0) {
		return null;
	}
	return (
		<div className="grid grid-cols-2 mb-6 border-b pb-4 px-2">
			<div className="col-span-1">
				<h3 className="font-bold text-gray-700">{label}</h3>
			</div>
			<div className="col-span-1 text-right">
				<span className="text-sm text-gray-500">({count})</span>
			</div>
		</div>
	)
}

Category.propTypes = {
	count: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired
}

Category.defaultProps = {
	count: 0,
	label: ""
}