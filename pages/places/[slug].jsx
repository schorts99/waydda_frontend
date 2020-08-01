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
import dynamic from 'next/dynamic'
// import {NextSeo} from "next-seo";
// import GetImageUrl from "../../lib";
import {useRouter} from "next/router";
import {useQuery} from "@apollo/client";
import GET_BUSINESS_QUERY from "../../lib/graphql/queries/getBusiness";
import PlacePresentation from "../../components/Places/Presentation";

const GetPlaceData = dynamic(() => import('../../components/Places/GetPlaceData'), {
	ssr: false,
	loading: () => (<p>Cargando...</p>)
})
const ContactPlace = dynamic(() => import('../../components/Places/Contact'), {
	ssr: false,
	loading: () => (<p>Cargando...</p>)
})
import {initializeApollo} from "../../lib/apolloClient";

export default function PlacePage({business}) {
	if (!business) { // Esto debe estar antes de cualquier cosa - de lo contrario se harán 2 queries
		return <h1>HA OCURRIDO UN ERROR</h1>
	}
	const router = useRouter();
	const {data, loading, error} = useQuery(GET_BUSINESS_QUERY, {
		variables: {
			slug: router.query.slug,
		},
		onCompleted: (d) => {
			console.log(d)
		}
		// skip: router.query.slug === 'demo',
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
		<>
			<LayoutUnAuthenticated
				pixel={"1404734746583052"}
				moreSpaceInFooter={!!data.getBusiness.social}
				withHeader={false}
				head={{theme: "#000"}}
			>
				{/*<NextSeo*/}
				{/*	title={`${name} en Waydda`}*/}
				{/*	description={`Menú digital de ${name} en Waydda`}*/}
				{/*	facebook={{*/}
				{/*		appId: "641527279645625"*/}
				{/*	}}*/}
				{/*	canonical={`https://waydda.vercel.app/places/${slug}`}*/}
				{/*	additionalMetaTags={[*/}
				{/*		{*/}
				{/*			property: "restaurant:menu",*/}
				{/*			content: `https://waydda.vercel.app/places/${slug}`*/}
				{/*		},*/}
				{/*		{*/}
				{/*			property: "restaurant:contact_info:website",*/}
				{/*			content: `https://waydda.vercel.app/places/${slug}`*/}
				{/*		},*/}
				{/*		{*/}
				{/*			property: "restaurant:contact_info:street_address",*/}
				{/*			content: address*/}
				{/*		},*/}
				{/*		{*/}
				{/*			property: "restaurant:contact_info:locality",*/}
				{/*			content: addressState*/}
				{/*		},*/}
				{/*		{*/}
				{/*			property: "restaurant:contact_info:region",*/}
				{/*			content: "mexico"*/}
				{/*		},*/}
				{/*		{*/}
				{/*			property: "restaurant:contact_info:postal_code",*/}
				{/*			content: "00810"*/}
				{/*		},*/}
				{/*		{*/}
				{/*			property: "restaurant:contact_info:country_name",*/}
				{/*			content: "Mexico"*/}
				{/*		}*/}
				{/*	]}*/}
				{/*	openGraph={{*/}
				{/*		type: 'restaurant.restaurant',*/}
				{/*		url: `https://waydda.vercel.app/places/${slug}`,*/}
				{/*		title: `${name} en Waydda`,*/}
				{/*		description: `Menú digital de ${name} en Waydda`,*/}
				{/*		site_name: "Waydda",*/}
				{/*		images: [*/}
				{/*			{*/}
				{/*				url: GetImageUrl({publicId: cover}),*/}
				{/*				alt: `${name} cover image`,*/}
				{/*			}*/}
				{/*		]*/}
				{/*	}}*/}
				{/*/>*/}
				<PlacePresentation data={data.getBusiness}>
					<GetPlaceData data={data.getBusiness}/>
				</PlacePresentation>
				<ContactPlace
					data={data.getBusiness}
				/>
			</LayoutUnAuthenticated>
			<style jsx global>{`
				body{
					background-color: #000000;
				}
			`}</style>
		</>
	)
	
}


// const Main = ({data}) => {
// 	// const {address, name, slug, addressState, cover} = data;
//
// 	return (

// 	)
// }

// export async function getStaticPaths() {
// 	return {
// 		paths: [
// 			{params: {slug: 'aroma-383ee35182'}},
// 		],
// 		fallback: true,
// 	}
// }

export async function getServerSideProps({query}) {
	const apolloClient = initializeApollo()
	let business;
	try {
		business = await apolloClient.query({
			query: GET_BUSINESS_QUERY,
			variables: {
				slug: query.slug
			},
		})
	} catch (e) {
		business = null;
	}
	return {
		props: {
			initialApolloState: apolloClient.cache.extract(),
			business
		},
	}
}