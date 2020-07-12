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
export default function Container({children}) {
	return (
		<div className="grid grid-cols-12">
			<div className="col-span-10 col-start-2">
				{children}
			</div>
		</div>
	)
}

Container.propTypes = {
  children: PropTypes.any.isRequired
}