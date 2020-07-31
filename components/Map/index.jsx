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
import {useEffect, useRef} from "react";
import mapboxgl from 'mapbox-gl'
import Head from "next/head";

mapboxgl.accessToken = 'pk.eyJ1IjoiYW5keXJvaG0iLCJhIjoiY2p6NmRldzJjMGsyMzNpbjJ0YjZjZjV5NSJ9.SeHsvxUe4-pszVk0B4gRAQ';
export default function Map({center, marker}) {
	const mapRef = useRef();
	
	useEffect(() => {
		try {
			let map = new mapboxgl.Map({
				container: mapRef.current,
				style: 'mapbox://styles/andyrohm/ckdaqse6y1fow1jt7kih905pu',
				center: center,
				zoom: 14,
			});
			new mapboxgl.Marker()
			.setLngLat(marker)
			.addTo(map);
		} catch (e) {
			console.log("ERR", e)
		}
	}, [center])
	
	
	return (
		<div className="grid grid-cols-12 relative z-0 h-full">
			<Head>
				<link rel="preconnect" href="https://mapbox.com" crossOrigin="anonymous"/>
				<link rel="dns-prefetch" href="https://mapbox.com"/>
				<link
					href='https://api.mapbox.com/mapbox-gl-js/v1.11.1/mapbox-gl.css'
					rel="stylesheet"
				/>
			</Head>
			
			<div className="col-span-12 h-full m-0 p-0 relative overflow-hidden">
				<div className="h-full bg-gray-400 absolute w-full top-0 left-0 right-0 bottom-0" ref={mapRef}/>
			</div>
		</div>
	)
}

Map.propTypes = {
	center: PropTypes.array.isRequired,
	marker: PropTypes.array.isRequired,
}

