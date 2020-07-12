import Head from 'next/head'
import LayoutUnAuthenticated from "../components/Layouts/Unauthenticated";
import {head} from '../locales/pages/index.json'
import Container from "../components/Container";
import BannerWelcome from "../components/BannerWelcome";

export default function Home() {
	return (
		<LayoutUnAuthenticated
			head={head}
		>
			<Container>
				<BannerWelcome title={"Un camino hacía la nueva normalidad"}/>
			</Container>
		</LayoutUnAuthenticated>
	)
}
