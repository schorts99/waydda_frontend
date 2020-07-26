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
import Link from 'next/link'

function LinkComponent({label, className, href, isExternal, prefetch}) {
	if (isExternal) {
		return (
			<a data-type={"external"} href={href} className={`${className ? ` ${className}` : ""}`}
			   target="_blank">{label}</a>
		)
	}
	return (
		<Link href={href} prefetch={prefetch}>
			<a data-type={"normal"} className={`${className ? ` ${className}` : ""}`}>{label}</a>
		</Link>
	);
}


LinkComponent.propTypes = {
	label: PropTypes.string.isRequired,
	className: PropTypes.string,
	href: PropTypes.string.isRequired,
	isExternal: PropTypes.bool
}

LinkComponent.defaultProps = {
	label: "",
	className: "",
	href: "/",
	isExternal: false,
	prefetch: true
}

export default LinkComponent;
