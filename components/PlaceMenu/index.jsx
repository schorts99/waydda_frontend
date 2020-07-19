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
import Link from 'next/link';

export default function PlaceMenu() {
	const router = useRouter();
	const currentRoute = router.pathname.split("/").slice(-1).toString();
	
	return (
		<div className="flex flex-grow overflow-x-scroll no_scrollbar">
			<MenuItem
				active={currentRoute}
				keyValue={"[slug]"}
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

const MenuItem = ({label, index, active, keyValue}) => {
	const isActive = active === keyValue;
	return (
		<Link href={`/places/[slug]${index ? "" : `/${keyValue}`}`} as={`/places/demo${index ? "" : `/${keyValue}`}`}>
			<a
				className={`py-3 px-5 text-center ${isActive ? "border-black border-b-2" : ""}`}
			>
				<span className={`select-none text-sm uppercase ${isActive ? "text-black" : "text-gray-500"}`}>{label}</span>
			</a>
		</Link>
	)
}