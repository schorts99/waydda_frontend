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
import Head from "next/head";
import es from '../../../locales/layouts/es.json'
import UnAuthenticatedHeader from "../../Headers/UnAuthenticaed";
import Footer from "../../Footer";
import {useEffect, useState} from "react";
import Sidebar from "../../SideBar";

export default function LayoutUnAuthenticated({children, head, withHeader}) {
	
	const [openSidebar, setOpenSidebar] = useState(false);
	
	useEffect(() => {
		if (withHeader) {
			const element = document.getElementById("sidebar");
			if (element.firstChild) {
				document.getElementById("sidebar").firstChild.addEventListener("click", handleClick)
			}
			return () => document.removeEventListener("click", handleClick)
		}
	}, [withHeader])
	
	const handleClick = () => {
		setOpenSidebar(false)
	}
	
	return (
		<>
			<Head>
				<title>{head.title ? `${head.title} | ${es.head.title}` : es.head.title}</title>
				<link rel="icon" href="/favicon.ico"/>
			</Head>
			<main>
				{withHeader &&
				<>
					<Sidebar locales={es.sidebar} isOpen={openSidebar}/>
					<UnAuthenticatedHeader
						toggleSidebar={() => {
							setOpenSidebar(!openSidebar)
						}}
						isSidebarOpen={openSidebar}
						elements={es.header.elements}
					/>
				</>
				}
				{children}
			</main>
			<Footer locales={es.footer}/>
		</>
	)
}

LayoutUnAuthenticated.propTypes = {
	children: PropTypes.any.isRequired,
	head: PropTypes.object,
	withHeader: PropTypes.bool
}

LayoutUnAuthenticated.defaultProps = {
	withHeader: true
}