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

// import dynamic from 'next/dynamic'
// import {NextSeo} from "next-seo";
// import GetImageUrl from "../../lib";
import {useRouter} from "next/router";
import PlaceLayout from "../../components/Layouts/Place";

import {useQuery} from "@apollo/react-hooks";
import GET_BUSINESS_QUERY from "../../lib/graphql/queries/getBusiness";
import dynamic from "next/dynamic";

const PlaceCover = dynamic(() => import('../../components/Places/Cover'), {
	ssr: false,
	loading:()=>(<p>CARGANDOOOOOO.....</p>)
});
const PlacePresentation = dynamic(() => import('../../components/Places/Presentation'), {
	ssr: false,
	loading:()=>(<p>CARGANDOOOOOO.....</p>)
});
// import PlaceCover from "../../components/Places/Cover";
// import PlacePresentation from "../../components/Places/Presentation";
export default function PlacePage({}) {
	const router = useRouter()
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
			<PlaceLayout
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
				<div className={"grid grid-cols-12"}>
					<div className="col-span-12 top-0 h-64 md:h-large w-full">
						<PlaceCover
							name={data.getBusiness.name}
							addressState={data.getBusiness.addressState}
							reviews={data.getBusiness.reviews}
							address={data.getBusiness.address}
							image={{src: data.getBusiness.cover}}
							slug={router.query.slug}
							logo={data.getBusiness.profile}
						/>
					</div>
				</div>
				<PlacePresentation data={data.getBusiness}/>
				{/*<ContactPlace*/}
				{/*	data={data.getBusiness}*/}
				{/*/>*/}
			</PlaceLayout>
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

// export async function getServerSideProps({query}) {
// 	const apolloClient = initializeApollo()
// 	let business;
// 	try {
// 		business = await apolloClient.query({
// 			query: GET_BUSINESS_QUERY,
// 			variables: {
// 				slug: query.slug
// 			},
// 		})
// 	} catch (e) {
// 		business = null;
// 	}
// 	return {
// 		props: {
// 			initialApolloState: apolloClient.cache.extract(),
// 			business,
// 			slug: query.slug
// 		},
// 	}
// }