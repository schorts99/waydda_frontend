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
import Head from "next/head";
import es from '../../../locales/layouts/es.json'
import UnAuthenticatedHeader from "../../Headers/UnAuthenticaed";
import {useEffect, useState} from "react";
import ReactPixel from 'react-facebook-pixel';
import ReactGA from 'react-ga';
import dynamic from "next/dynamic";
const Sidebar = dynamic(() => import('../../SideBar'), {
	ssr: false
});

const Footer = dynamic(() => import('../../Footer'), {
	ssr: false
});

// TODO: Create place layout

export default function LayoutUnAuthenticated({children, head, withHeader, moreSpaceInFooter, pixel}) {
	const [openSidebar, setOpenSidebar] = useState(false);
	
	useEffect(() => {
		if (pixel) {
			ReactPixel.init(pixel);
			ReactPixel.pageView();
		}
		
		ReactGA.initialize('UA-173429948-1');
		ReactGA.pageview(window.location.pathname + window.location.search);
		
		if (withHeader) {
			const element = document.getElementById("sidebar");
			
			if (element) {
				if (element.firstChild) {
					document.getElementById("sidebar").firstChild.addEventListener("click", handleClick)
				}
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
				<link rel="icon" href="/favicon.ico"/>
				<meta name={"theme-color"} content={head.theme || "#fff"}/>
				<meta name="abstract" content={head.description || es.head.description}/>
				<meta name="keywords" content={`${es.keywords}${head.keywords && `, ${head.keywords}`}`}/>
				<meta name="facebook-domain-verification" content="p8zbzkp4c30r8bldnbatw2tvtpfslx"/>
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
			<Footer moreSpaceInFooter={moreSpaceInFooter} locales={es.footer}/>
		</>
	)
}

LayoutUnAuthenticated.propTypes = {
	children: PropTypes.any.isRequired,
	head: PropTypes.object,
	withHeader: PropTypes.bool,
	moreSpaceInFooter: PropTypes.bool
}

LayoutUnAuthenticated.defaultProps = {
	withHeader: true,
	moreSpaceInFooter: false
}
