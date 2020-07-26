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

import CreatePlaceForm from "./Form";

export default function CreatePlaceComponent() {
	return (
		<div className="grid grid-cols-12">
			<div className="col-span-12 my-4 px-3">
				<h1 className="font-bold text-2xl">Crear nuevo restaurante</h1>
			</div>
			<div className="col-span-12 px-3">
				<CreatePlaceForm/>
			</div>
		</div>
	)
}
