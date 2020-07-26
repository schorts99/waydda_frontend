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

import NewCategoryForm from "./Form";

export default function NewCategoryComponent() {
	return (
		<div className="grid grid-cols-12 px-3">
			<div className="col-span-12 my-3 font-bold">
				<h1 className="text-2xl">Crear nueva categoría</h1>
			</div>
			<div className="col-span-12">
				<NewCategoryForm/>
			</div>
		</div>
	)
}
