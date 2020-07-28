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

export default function Category({count, label}) {
	if (count <= 0) {
		return null;
	}

	return (
		<div className="grid grid-cols-12 my-8 px-2 md:px-0 items-center md:gap-4">
			<div className="col-span-6 md:col-auto">
				<h3 className="font-bold text-gray-700 md:text-black md:text-2xl">
					{label}
				</h3>
			</div>
			<div className="col-span-6 md:col-auto text-right md:text-left">
				<span className="text-sm text-gray-500">({count})</span>
			</div>
		</div>
	)
}

Category.propTypes = {
	count: PropTypes.number.isRequired,
	label: PropTypes.string.isRequired
}

Category.defaultProps = {
	count: 0,
	label: ""
}
