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

import LayoutUnAuthenticated from "../../components/Layouts/Unauthenticated";
import PlacePresentation from "../../components/Places/Presentation";
import dynamic from 'next/dynamic'
import {NextSeo} from "next-seo";
import GetImageUrl from "../../lib";
import Head from "next/head";
import {useQuery} from "@apollo/react-hooks";
import {useRouter} from "next/router";
import GET_BUSINESS_QUERY from "../../lib/graphql/queries/getBusiness";
import demoData from '../../demo/index.json';

const ListAllProducts = dynamic(() => import('../../components/Places/ListAllProducts'))
const ContactForm = dynamic(() => import('../../components/Places/ContactForm'))
const Map = dynamic(() => import('../../components/Map'), {
	ssr: false
})

export default function PlacePage() {
	const router = useRouter();
	const {data, loading, error} = useQuery(GET_BUSINESS_QUERY, {
		variables: {
			slug: router.query.slug,
		},
		skip: router.query.slug === 'demo',
	})
	
	if (loading) {
		return (
			<h1>Cargando...</h1>
		)
	}
	
	if (error) {
		return (<h1>Ha ocurrido un error</h1>)
	}
	
	return (
		<LayoutUnAuthenticated
			pixel={"1404734746583052"}
			moreSpaceInFooter
			withHeader={false}
			head={{theme: "#000"}}
		>
			<Main
				data={router.query.slug === 'demo' ? demoData : data.getBusiness}
			/>
		</LayoutUnAuthenticated>
	)
}


const Main = ({data}) => {
	const {address, name, slug, addressState, coordinates, cover} = data;
	
	return (
		<>
			<Head>
				<link href="https://api.mapbox.com/mapbox-gl-js/v1.11.1/mapbox-gl.css" rel="stylesheet"/>
			</Head>
			<NextSeo
				title={`${name} en Waydda`}
				description={`Menú digital de ${name} en Waydda`}
				facebook={{
					appId: "641527279645625"
				}}
				canonical={`https://waydda.vercel.app/places/${slug}`}
				additionalMetaTags={[
					{
						property: "restaurant:menu",
						content: `https://waydda.vercel.app/places/${slug}`
					},
					{
						property: "restaurant:contact_info:website",
						content: `https://waydda.vercel.app/places/${slug}`
					},
					{
						property: "restaurant:contact_info:street_address",
						content: address
					},
					{
						property: "restaurant:contact_info:locality",
						content: addressState
					},
					{
						property: "restaurant:contact_info:region",
						content: "mexico"
					},
					{
						property: "restaurant:contact_info:postal_code",
						content: "00810"
					},
					{
						property: "restaurant:contact_info:country_name",
						content: "Mexico"
					}
				]}
				openGraph={{
					type: 'restaurant.restaurant',
					url: `https://waydda.vercel.app/places/${slug}`,
					title: `${name} en Waydda`,
					description: `Menú digital de ${name} en Waydda`,
					site_name: "Waydda",
					images: [
						{
							url: GetImageUrl({publicId: cover}),
							alt: `${name} cover image`,
						}
					]
				}}
			/>
			<PlacePresentation data={data}>
				<ListAllProducts data={data}/>
				{coordinates && (
					<Map
						marker={[parseFloat(coordinates.split(',')[0]), parseFloat(coordinates.split(',')[1])]}
						center={[parseFloat(coordinates.split(',')[0]), parseFloat(coordinates.split(',')[1])]}
						address={address}
						city={addressState}
					/>
				)}
				<ContactForm/>
			</PlacePresentation>
		</>
	)
}
