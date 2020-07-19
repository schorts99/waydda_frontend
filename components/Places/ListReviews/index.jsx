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

import Review from "../../Review";

export default function ListReviews() {
	return (
		<div className="grid grid-cols-2 bg-background">
			<div className="col-span-2 px-4 sticky top-0 z-20 bg-white border-b mb-6">
				<div className="grid grid-cols-2 items-center py-4">
					<div className="col-span-1">
						<h1 className="text-lg font-bold uppercase">Reseñas</h1>
					</div>
					<div className="col-span-1 text-right">
						<span className="text-sm text-gray-600">
							18 en total
						</span>
					</div>
				</div>
			</div>
			<div className="col-span-2 px-4">
				<Review comment={""} date={""} stars={4} user={{name: "Angel Mendez"}}/>
				<Review comment={""} date={""} stars={4} user={{name: "Angel Mendez"}}/>
				<Review comment={""} date={""} stars={3} user={{name: "Angel Mendez"}}/>
				<Review comment={""} date={""} stars={2} user={{name: "Angel Mendez"}}/>
				<Review comment={""} date={""} stars={1} user={{name: "Angel Mendez"}}/>
				<Review comment={""} date={""} stars={0} user={{name: "Angel Mendez"}}/>
			</div>
		</div>
	)
}