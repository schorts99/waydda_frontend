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

import HamburgerMenu from "react-hamburger-menu";
import Link from "next/link";

export default function AuthHeader() {
	return (
		<div className="grid relative grid-cols-12 gap-4 px-4 py-4 items-center z-20 shadow"
		     style={{
			     backgroundColor: "#24292e"
		     }}
		>
			<div className="col-span-6 ml-3 absolute left-0">
				<HamburgerMenu
					isOpen={false}
					menuClicked={() => {
					}}
					color={"#fff"}
					width={20}
					height={14}
				/>
			</div>
			<div className="col-span-12 text-center">
				<h2 className="font-title text-2xl text-white">
					<Link href={"/dashboard"}>
						<a>Waydda</a>
					</Link>
				</h2>
			</div>
		</div>
	)
}