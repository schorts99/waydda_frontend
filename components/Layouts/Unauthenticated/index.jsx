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
import {useRouter} from 'next/router';
import GetImageUrl from "../../../lib";
import ReactPixel from 'react-facebook-pixel';
import ReactGA from 'react-ga';

const domain = "https://waydaa.vercel.app/";


export default function LayoutUnAuthenticated({children, head, withHeader, moreSpaceInFooter, pixel}) {
	const router = useRouter();
	const [openSidebar, setOpenSidebar] = useState(false);
	
	useEffect(() => {
		if (pixel) {
			ReactPixel.init(pixel);
			ReactPixel.pageView();
		}
		
		ReactGA.initialize('AW-740799893');
		ReactGA.pageview(window.location.pathname + window.location.search);
		
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
				<link rel="icon" href="/favicon.ico"/>
				<meta name={"theme-color"} content={head.theme || "#fff"}/>
				<title>{head.title ? `${head.title} | ${es.head.title}` : es.head.title}</title>
				<meta name="description" content={head.description || es.head.description}/>
				<meta name="abstract" content={head.description || es.head.description}/>
				<meta name="keywords" content={`${es.keywords}${head.keywords && `, ${head.keywords}`}`}/>
				<meta name="author" content={head.author || 'Azachii'}/>
				<meta property="og:title" content={head.title ? `${head.title} | ${es.title}` : es.title}/>
				<meta property="og:description" content={head.description || es.description}/>
				<meta property="og:url"
				      content={`${domain}${router.asPath === "/" ? "" : router.asPath}`}/>
				<meta property="og:image" content={head.image || GetImageUrl({publicId: es.image})}/>
				<meta name="twitter:description" content={head.description || es.description}/>
				<meta name="twitter:url" content={`${domain}${router.asPath === "/" ? "" : router.asPath}`}/>
				<meta name="twitter:title" content={head.title ? `${head.title} | ${es.title}` : es.title}/>
				<meta name="theme-color" content={head.theme || "#603eff"}/>
				<meta name="twitter:description" content={head.description || es.description}/>
				<meta name="twitter:image" content={head.image || GetImageUrl({publicId: es.image})}/>
				<meta property={"fb:app_id"} content={"641527279645625"}/>
				<link rel="canonical" content={`${domain}${router.asPath === "/" ? "" : router.asPath}`}/>
				<meta name="facebook-domain-verification" content="p8zbzkp4c30r8bldnbatw2tvtpfslx" />
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