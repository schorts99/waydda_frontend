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

import PropTypes from 'prop-types'
import {Link} from 'react-scroll';
import {useState} from "react";

export default function PlaceMenu({handleSendItem, items, size}) {
	const onHandleChange = (e) => {
		handleSendItem(e);
	}
	
	if (size === "desktop") {
		return (
			<div className="grid grid-cols-12 bg-dark rounded sticky top-4">
				<div className="col-span-12 px-3 py-4 rounded-t border-b border-white border-opacity-25">
					<h3 className="font-semibold text-white text-lg">Menú</h3>
				</div>
				{items.map((item, i) => {
					if (item.products.length > 0) {
						return (
							<div className="col-span-12" key={i}>
								<MenuItem
									size={size}
									key={i}
									handleChange={onHandleChange}
									keyValue={encodeURI(item.name.toLowerCase())}
									label={item.name}
								/>
							</div>
						)
					} else {
						return null;
					}
				})}
			</div>
		)
	}
	
	return (
		<div className="flex flex-grow overflow-x-scroll no_scrollbar border-b border-gray-400">
			{items.map((item, i) => {
				if (item.products.length > 0) {
					return (
						<MenuItem
							key={i}
							handleChange={onHandleChange}
							keyValue={encodeURI(item.name.toLowerCase())}
							label={item.name}
						/>
					)
				} else {
					return null;
				}
			})}
		</div>
	)
}

const MenuItem = ({label, keyValue, handleChange, size}) => {
	const [active, setActive] = useState(false);
	
	return (
		<Link
			style={{
				flex: "0 0 auto"
			}}
			className={`
				md:mr-0 md:p-3 flex mr-5 text-center
				z-20 bg-secondary-dark border-b border-white
				border-opacity-25 cursor-pointer
				hover:text-red-600 tracking-wide
				hover:opacity-100
				${active ? "text-red-500" : "text-white opacity-50"}
			`}
			// activeClass="border-black border-b-2 z-20"
			to={keyValue}
			spy={true}
			smooth={true}
			offset={-50}
			onSetInactive={() => {
				handleChange("")
				setActive(false);
			}}
			onSetActive={() => {
				handleChange(keyValue)
				setActive(true);
			}}
		>
			<span className={`select-none capitalize `}>
				{label}
			</span>
		</Link>
	)
}

PlaceMenu.propTypes = {
	handleSendItem: PropTypes.func.isRequired,
	items: PropTypes.array.isRequired,
	size: PropTypes.string.isRequired
}

PlaceMenu.defaultProps = {
	size: "mobile"
}

MenuItem.propTypes = {
	handleChange: PropTypes.func.isRequired,
	keyValue: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	size: PropTypes.string.isRequired
}

MenuItem.defaultProps = {
	size: "mobile"
}