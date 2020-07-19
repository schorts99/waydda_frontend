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

import {useRouter} from "next/router";
import {Link} from 'react-scroll';
import {useState} from "react";

export default function PlaceMenu() {
	const router = useRouter();
	const currentRoute = router.pathname.split("/").slice(-1).toString();
	
	return (
		<div className="flex flex-grow overflow-x-scroll no_scrollbar">
			
			<MenuItem
				active={currentRoute}
				keyValue={"index"}
				index
				label={"Sopas"}/>
			<MenuItem
				active={currentRoute}
				keyValue={"products"}
				label={"Carnes"}/>
			<MenuItem
				active={currentRoute}
				keyValue={"reviews"}
				label={"Vegetariana"}/>
			<MenuItem
				active={currentRoute}
				keyValue={"reviews"}
				label={"Italiana"}/>
			<MenuItem
				active={currentRoute}
				keyValue={"reviews"}
				label={"Italiana"}/>
		</div>
	)
}

const MenuItem = ({label, keyValue}) => {
	const [active, setActive] = useState(false);
	return (
		<Link
			className={`py-3 px-5 text-center`}
			activeClass="border-black border-b-2"
			to={keyValue}
			spy={true}
			smooth={true}
			offset={-100}
			onSetInactive={() => {
				setActive(false);
			}}
			onSetActive={() => {
				setActive(true);
			}}
		>
			<span className={`select-none text-sm uppercase ${active ? "text-black" : "text-gray-500"}`}>{label}</span>
		</Link>
	)
}