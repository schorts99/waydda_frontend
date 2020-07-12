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

import LinkComponent from "../../Link";

function SidebarItem({label, href, isExternal, featured}) {
	return (
		<div className="col-span-12 py-2 px-0 my-2">
			<div className="grid grid-cols-12 m-0 justify-content-center">
				<div className="col-span-10 col-start-2 p-0">
					<LinkComponent
						label={label}
						href={href}
						className={`${featured ? "font-bold" : ""}`}
						isExternal={isExternal}
					/>
				</div>
			</div>
		</div>
	)
}

export default SidebarItem;