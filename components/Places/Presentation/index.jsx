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
import {useState} from "react";
import PlaceMenu from "../../PlaceMenu";
import ListAllProducts from "../ListAllProducts";

export default function PlacePresentation({data}) {
	const [activeItem, setActiveItem] = useState("");
	// const onHandleReceive = (e) => {
	// 	setActiveItem(e);
	// };
	const {
		// cover,
		// name,
		// addressState,
		// address,
		// reviews,
		items,
		// profile,
		// slug,
	} = data
	return (
		<div className="grid grid-cols-12">
			<div className="col-span-12 z-10 md:z-40 w-full md:mt-6">
				<div className="flex">
					<div className="md:w-11/12 w-full mx-auto md:gap-6 md:flex">
						<div className="md:w-3/12 w-full sticky top-0 z-40 md:relative">
							<PlaceMenu items={items}
							           handleSendItem={() => {
							           }}
							           size={"desktop"}
							/>
						</div>
						<div className="md:w-9/12">
							<ListAllProducts data={data}/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

PlacePresentation.propTypes = {
	children: PropTypes.any.isRequired,
	withSticky: PropTypes.bool.isRequired
}

PlacePresentation.defaultProps = {
	withSticky: true
}
