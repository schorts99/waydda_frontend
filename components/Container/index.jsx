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

export default function Container({children, size}) {
	return (
		<div className={`grid grid-cols-12 ${size === "small" ? "" : "px-6 md:px-12"}`}>
			<div className={`${size === "small" ? "col-span-10 col-start-2" : "col-span-12"}`}>
				{children}
			</div>
		</div>
	)
}

Container.propTypes = {
	children: PropTypes.any.isRequired,
	size: PropTypes.any
}

Container.defaultProps = {
	size: ""
}