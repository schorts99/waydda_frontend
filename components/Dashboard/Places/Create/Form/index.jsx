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

import SimpleInput from "../../../../Input";
import dynamic from 'next/dynamic';
import {useState} from "react";

const MapNoSsr = dynamic(() => import('../../../../Map'), {
	ssr: false
});


const MAP_BOX_ACCESS_KEY = "pk.eyJ1Ijoic2VhcmNoLW1hY2hpbmUtdXNlci0xIiwiYSI6ImNrN2Y1Nmp4YjB3aG4zZ253YnJoY21kbzkifQ.JM5ZeqwEEm-Tonrk5wOOMw";

export default function CreatePlaceForm() {

	const [address, setAddress] = useState([])
	const [inputValue, setInputValue] = useState("")
	let timeout;

	const searchAddress = (link) => {
		clearTimeout(timeout);
		timeout = setTimeout(() => {
			fetch(link)
			.then(r => r.json())
			.then((response) => {
				if (response.features) {
					console.log(response.features)
					// setAddress(["hIOLA", "ajsnaj"])
					// setAddress(response.features);
				}
			}).catch((err) => {
				console.log(err)
			})
		}, 300)

	}

	const handleSearch = (e) => {
		if (e.length > 0) {
			const link = `https://api.mapbox.com/geocoding/v5/mapbox.places/${e}.json?access_token=${MAP_BOX_ACCESS_KEY}&cachebuster=1595220768286&autocomplete=true&country=mx&types=address`;
			searchAddress(link)
		}
	}


	return (
		<>

			<div className="grid grid-cols-12">
				<div className="col-span-12">
					<SimpleInput
						label={"Nombre del restaurante"}
						placeholder={"Ej. Tacos el Pancho"}
					/>
					{/*<Autocomplete*/}
					{/*	title="Fruits"*/}
					{/*	onChange={(changedItem) => console.log(changedItem)}*/}
					{/*	items={['Apple', 'Apricot', 'Banana', 'Cherry', 'Cucumber']}*/}
					{/*>*/}
					{/*	{(props) => {*/}
					{/*		const {getInputProps, getRef, inputValue} = props*/}
					{/*		return (*/}
					{/*			<SimpleInput*/}
					{/*				label={"Dirección"}*/}
					{/*				innerRef={getRef}*/}
					{/*			/>*/}
					{/*			// <TextInput*/}
					{/*			// 	placeholder="Fruits"*/}
					{/*			// 	value={inputValue}*/}
					{/*			// 	innerRef={getRef}*/}
					{/*			// 	{...getInputProps()}*/}
					{/*			// />*/}
					{/*		)*/}
					{/*	}}*/}
					{/*</Autocomplete>*/}

				</div>
				<div className="col-span-12 z-0">
					<MapNoSsr/>
				</div>
			</div>
		</>
	)
}

