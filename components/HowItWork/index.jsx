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
import styles from './style.module.css'
import {Link} from 'react-scroll'

export default function HowItWork() {
	return (
		<div className="grid grid-cols-12 mt-6">
			<div className="col-span-12 text-center mb-20">
				<h2 className="font-title text-3xl md:text-4xl font-bold">¿Cómo funciona?</h2>
			</div>
			<div className="col-span-12">
				<div className="grid grid-cols-12 gap-0 md:gap-12">
					<Item
						title="Registrate en Waydda QR"
						step={1}
						description="Selecciona el paquete que más se adapte a tus necesidades y registrate."
						action={() => (
							<Link
								smooth={true}
								to={"pricing"}
								className={"bg-red-principal uppercase text-white px-5 py-4 font-bold text-sm rounded shadow-xl"}>
								VER PRECIOS
							</Link>
							
							// <button className="">VER PRECIOS</button>
						)}
					/>
					<Item
						title="Empieza a crear 😎"
						step={2}
						description="¡Añade tu logo, horarios, categorías, platillos, botón de whatsapp y hasta facebook pixel!"/>
					<Item
						title="Difunde tu menú"
						step={3}
						description="Ahora que tienes tu menú, ya puedes mostrarlo a tus comensales"/>
				</div>
			</div>
		</div>
	)
}


const Item = ({title, step, description, action}) => (
	<div
		className={`col-span-12 mb-16 relative border-black border-4 bg-white md:col-span-4 px-8 py-12 ${styles.shadow_box}`}>
		<div
			className={`${styles.box_shadow} absolute top-0 -mt-8 h-12 w-12 items-center justify-center flex text-white bg-black`}>
			<span className="text-xl font-bold">{step}</span>
		</div>
		<h3 className="text-2xl font-bold">{title}</h3>
		<h4 className="mt-6 text-gray-600">{description}</h4>
		{action &&
		<div className="mt-6">
			{action()}
		</div>
		}
	</div>
)