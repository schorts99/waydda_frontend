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

import LayoutUnAuthenticated from "../components/Layouts/Unauthenticated";
import {head} from '../locales/pages/index.json'
import Container from "../components/Container";
import BannerWelcome from "../components/BannerWelcome";
import SimpleRegister from "../components/SimpleRegister";
import dynamic from 'next/dynamic'
import {useState} from "react";
import {NextSeo} from 'next-seo'
import GetImageUrl from "../lib";

const RetailBanner = dynamic(() => import('../components/RetailBanner'))
const HowItWork = dynamic(() => import('../components/HowItWork'))
const Pricing = dynamic(() => import('../components/Pricing'))
const FromAzaChii = dynamic(() => import('../components/FromAzaChii'))
const PreRegisterModal = dynamic(() => import('../components/PreRegisterModal'))

export default function Home() {
	const [openRegister, setOpenRegister] = useState(false)
	const [defaultEmail, setDefaultEmail] = useState("")
	return (
		<LayoutUnAuthenticated
			head={{...head}}
			pixel={"1404734746583052"}
		>
			<NextSeo
				title={"Waydda QR"}
				facebook={{
					appId: "641527279645625"
				}}
				canonical={"https://waydda.vercel.app"}
				openGraph={{
					type: 'website',
					url: 'https://waydda.vercel.app/',
					title: "Waydda QR - Menú Digital",
					description: "Crea gratis un menú digital para tu restaurante.",
					site_name: "Waydda",
					images: [
						{
							url: GetImageUrl({publicId: "waydda.png"}),
							alt: "Waydda Logo",
						}
					]
				}}
			/>
			<PreRegisterModal
				isOpen={openRegister}
				handleClose={() => {
					setDefaultEmail("");
					setOpenRegister(false);
				}}
				defaultEmail={defaultEmail}
			/>
			<BannerWelcome title={"El camino a la nueva normalidad"}/>
			<SimpleRegister
				handleSubmit={(email) => {
					setDefaultEmail(email);
					setOpenRegister(true);
				}}
			/>
			<Container>
				<HowItWork/>
			</Container>
			<Container>
				<RetailBanner/>
			</Container>
			<Pricing
				onHandleClickPrice={() => {
					setOpenRegister(true);
				}}
			/>
			<FromAzaChii/>
		</LayoutUnAuthenticated>
	)
}
