import Head from 'next/head'
import LayoutUnAuthenticated from "../components/Layouts/Unauthenticated";
import {head} from '../locales/pages/index.json'
import Container from "../components/Container";
import BannerWelcome from "../components/BannerWelcome";
import SimpleRegister from "../components/SimpleRegister";
import dynamic from 'next/dynamic'
const RetailBanner = dynamic(() => import('../components/RetailBanner'))
const HowItWork = dynamic(() => import('../components/HowItWork'))

export default function Home() {
	return (
		<LayoutUnAuthenticated
			head={head}
		>
			<BannerWelcome title={"El camino a la nueva normalidad"}/>
			<SimpleRegister/>
			<Container>
				<HowItWork/>
			</Container>
			<Container>
				<RetailBanner/>
			</Container>
		</LayoutUnAuthenticated>
	)
}
