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
import demo from '../../demo/index.json'
import dynamic from 'next/dynamic'

const ListAllProducts = dynamic(() => import('../../components/Places/ListAllProducts'))
const ContactForm = dynamic(() => import('../../components/Places/ContactForm'))

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
				<ContactForm/>
			</PlacePresentation>
		</LayoutUnAuthenticated>
	)
}