import Head from 'next/head'
import LayoutUnAuthenticated from "../components/Layouts/Unauthenticated";
import {head} from '../locales/pages/index.json'

export default function Home() {
	return (
		<LayoutUnAuthenticated
			head={head}
		>
			<div className="grid grid-cols-12">
				<div className="col-span-12">
					<h1 className="text-4xl">Hola</h1>
				</div>
			</div>
		</LayoutUnAuthenticated>
	)
}
