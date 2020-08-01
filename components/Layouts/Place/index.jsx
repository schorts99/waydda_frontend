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

import Head from "next/head";
import es from "../../../locales/layouts/es.json";
import {useEffect} from "react";
import ReactPixel from "react-facebook-pixel";
import ReactGA from "react-ga";
import PlaceHeader from "../../Headers/PlaceHeader";
// TODO: Add theme-color metatag

// const Footer = dynamic(() => import('../../Footer'), {
// 	ssr: false
// });

export default function PlaceLayout({children, head, pixel}) {
	
	
	useEffect(() => {
		if (pixel) {
			ReactPixel.init(pixel);
			ReactPixel.pageView();
		}
		
		ReactGA.initialize('UA-173429948-1');
		ReactGA.pageview(window.location.pathname + window.location.search);
	}, [])
	
	return (
		<>
			<Head>
				<link rel="icon" href="/favicon.ico"/>
				<meta name={"theme-color"} content={head.theme || "#fff"}/>
				<meta name="abstract" content={head.description || es.head.description}/>
				<meta name="keywords" content={`${es.keywords}${head.keywords && `, ${head.keywords}`}`}/>
				<meta name="facebook-domain-verification" content="p8zbzkp4c30r8bldnbatw2tvtpfslx"/>
			</Head>
			<div className="grid grid-cols-1">
				<div className="col-span-1 z-40">
					<PlaceHeader/>
				</div>
				<main className="col-span-1" >
					{children}
					{/*<Footer moreSpaceInFooter={moreSpaceInFooter} locales={es.footer}/>*/}
				</main>
			</div>
		</>
	)
}
