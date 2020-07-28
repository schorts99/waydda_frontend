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

export default function AggregateItem({name, price, description}) {
	return (
		<div className="grid grid-cols-12 gap-4 px-4 my-3 items-center">
			<div className="col-span-8">
				<h5 className="md:text-lg">
					{name}
				</h5>
				<p className="text-xs md:text-sm text-gray-700">
					{description}
				</p>
			</div>
			<div className="col-span-4 text-right">
				<p className="text-gray-700 text-xs font-bold">
					+ ${price}
				</p>
			</div>
		</div>
	
	);
}
