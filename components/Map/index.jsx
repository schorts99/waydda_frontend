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
import {useEffect, useRef, useState} from "react";
import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken = 'pk.eyJ1IjoiYW5keXJvaG0iLCJhIjoiY2p6NmRldzJjMGsyMzNpbjJ0YjZjZjV5NSJ9.SeHsvxUe4-pszVk0B4gRAQ';
export default function Map({center, address, city, marker}) {
	const mapRef = useRef();
	const [error, setError] = useState(false);
	
	useEffect(() => {
		try {
			let map = new mapboxgl.Map({
				container: mapRef.current,
				style: 'mapbox://styles/mapbox/streets-v11',
				center: center,
				zoom: 14,
			});
			new mapboxgl.Marker()
			.setLngLat(marker)
			.addTo(map);
			setError(false);
		} catch (e) {
			setError(true);
		}
	}, [center])
	
	if (error) {
		return (
			<h4 className="font-bold text-3xl">Ha ocurrido un error</h4>
		)
	}
	
	return (
		<div className="grid grid-cols-12 my-6 relative z-0">
			<div className="col-span-12 px-3 md:px-0 mb-4">
				<h4 className="text-2xl font-bold">
					Ubicación
				</h4>
				<p className="font-bold my-2">{city}</p>
				<p className="text-sm md:text-base text-gray-700">{address}</p>
			</div>
			<div className="col-span-12 h-56 md:h-xxl m-0 p-0 relative overflow-hidden">
				<div className="h-full bg-gray-400 absolute w-full top-0 left-0 right-0 bottom-0" ref={mapRef}/>
			</div>
		</div>
	)
}

Map.propTypes = {
	center: PropTypes.array.isRequired,
	marker: PropTypes.array.isRequired,
}

