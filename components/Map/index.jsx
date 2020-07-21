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

import {useEffect, useState} from "react";
import mapboxgl from 'mapbox-gl';

export default function Map() {

	useEffect(() => {
		mapboxgl.accessToken = 'pk.eyJ1IjoiYW5keXJvaG0iLCJhIjoiY2p6NmRldzJjMGsyMzNpbjJ0YjZjZjV5NSJ9.SeHsvxUe4-pszVk0B4gRAQ';
		var map = new mapboxgl.Map({
			container: 'map_id',
			style: 'mapbox://styles/mapbox/streets-v11',
			center: [-99.212036, 19.456583],
			zoom: 14
		});
		var marker = new mapboxgl.Marker({draggable: true})
		.setLngLat([-99.212036, 19.456583])
		.addTo(map);
		map.on("click", (e) => {
			if(e.lngLat){
			marker.setLngLat([e.lngLat.lng,e.lngLat.lat])
			}
		})
	}, [])
	
	return (
		<div className="grid grid-cols-12 z-0">
			<div className="col-span-12 h-64" id={"map_id"}>
			</div>
		</div>
	)
}