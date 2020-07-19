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

import {Link} from 'react-scroll';
import {useState} from "react";

export default function PlaceMenu({handleSendItem}) {
	const onHandleChange = (e) => {
		handleSendItem(e);
	}
	return (
		<div className="flex flex-grow overflow-x-scroll no_scrollbar">
			
			<MenuItem
				handleChange={onHandleChange}
				keyValue={"index"}
				index
				label={"Sopas"}/>
			<MenuItem
				handleChange={onHandleChange}
				keyValue={"products"}
				label={"Carnes"}/>
			<MenuItem
				handleChange={onHandleChange}
				keyValue={"reviews"}
				label={"Vegetariana"}/>
			<MenuItem
				handleChange={onHandleChange}
				keyValue={"reviews"}
				label={"Italiana"}/>
			<MenuItem
				handleChange={onHandleChange}
				keyValue={"reviews"}
				label={"Italiana"}/>
		</div>
	)
}

const MenuItem = ({label, keyValue,handleChange}) => {
	const [active, setActive] = useState(false);
	return (
		<Link
			className={`py-3 px-5 text-center z-20`}
			activeClass="border-black border-b-2 z-20"
			to={keyValue}
			spy={true}
			smooth={true}
			offset={-100}
			onSetInactive={() => {
				handleChange("")
				setActive(false);
			}}
			onSetActive={() => {
				handleChange(keyValue)
				setActive(true);
			}}
		>
			<span className={`select-none text-sm uppercase ${active ? "text-black" : "text-gray-500"}`}>{label}</span>
		</Link>
	)
}