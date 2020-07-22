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


import LayoutUnAuthenticated from "../../components/Layouts/Unauthenticated";
import PlacePresentation from "../../components/Places/Presentation";
import ListAllProducts from "../../components/Places/ListAllProducts";
import demo from '../../demo/index.json'
import ContactForm from "../../components/Places/ContactForm";

export default function PlacePage() {
	return (
		<LayoutUnAuthenticated
			moreSpaceInFooter
			withHeader={false}
			head={{title: "Demo", description: "Conoce el menú de Demo en Waydda", theme: "#000"}}>
			<PlacePresentation
				data={{...demo}}
			>
				<ListAllProducts data={demo.food}/>
			</PlacePresentation>
			<ContactForm />
		</LayoutUnAuthenticated>
	)
}