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
import Head from "next/head";
import AuthHeader from "../../Headers/AuthHeader";

export default function DashboardLayout({children}) {
	return (
		<>
			<Head>
				<title>Panel de control | Waydda</title>
				<meta name="theme-color" content="#1d2226"/>
			</Head>
			<AuthHeader/>
			<main>
				{children}
			</main>
		</>
	)
}

DashboardLayout.propTypes = {
	children: PropTypes.any.isRequired,
}
