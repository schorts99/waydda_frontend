import LayoutUnAuthenticated from "../components/Layouts/Unauthenticated";
import {head} from '../locales/pages/index.json'
import Container from "../components/Container";
import BannerWelcome from "../components/BannerWelcome";
import SimpleRegister from "../components/SimpleRegister";
import dynamic from 'next/dynamic'
import {useState} from "react";

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
			head={head}
			pixel={"689265355254424"}
		>
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
