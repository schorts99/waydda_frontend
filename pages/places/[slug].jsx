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

import {NextSeo} from "next-seo";
import GetImageUrl from "../../lib";
import {useRouter} from "next/router";
import PlaceLayout from "../../components/Layouts/Place";
import {useQuery} from "@apollo/react-hooks";
import GET_BUSINESS_QUERY from "../../lib/graphql/queries/getBusiness";
import MainPlace from "../../components/Places/Main";


export default function PlacePage({}) {
	const router = useRouter()
	const {data, loading, error} = useQuery(GET_BUSINESS_QUERY, {
		variables: {
			slug: router.query.slug,
		},
		onCompleted: (d) => {
			console.log(d)
		}
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
				<NextSeo
					title={`${data.getBusiness.name} en Waydda`}
					description={`Menú digital de ${data.getBusiness.name} en Waydda`}
					facebook={{
						appId: "641527279645625"
					}}
					canonical={`https://waydda.vercel.app/places/${data.getBusiness.slug}`}
					additionalMetaTags={[
						{
							property: "restaurant:menu",
							content: `https://waydda.vercel.app/places/${data.getBusiness.slug}`
						},
						{
							property: "restaurant:contact_info:website",
							content: `https://waydda.vercel.app/places/${data.getBusiness.slug}`
						},
						{
							property: "restaurant:contact_info:street_address",
							content: data.getBusiness.address
						},
						{
							property: "restaurant:contact_info:locality",
							content: data.getBusiness.addressState
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
						url: `https://waydda.vercel.app/places/${data.getBusiness.slug}`,
						title: `${data.getBusiness.name} en Waydda`,
						description: `Menú digital de ${data.getBusiness.name} en Waydda`,
						site_name: "Waydda",
						images: [
							{
								url: GetImageUrl({publicId: data.getBusiness.cover}),
								alt: `${data.getBusiness.name} cover image`,
							}
						]
					}}
				/>
				<MainPlace
					slug={router.query.slug}
					data={data}
				/>
			</PlaceLayout>
			<style jsx global>{`
				body{
					background-color: #fafaf8;
				}
			`}</style>
		</>
	)
	
}


