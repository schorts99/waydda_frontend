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

import SimpleInput from "../../../../Input";

export default function NewCategoryForm() {
	return (
		<form className="grid grid-cols-12">
			<div className="col-span-12">
				<SimpleInput
					label={"Nombre del restaurante"}
					placeholder="Ej. Los Panchos"
					type={"text"}
					maxLength={20}
					minLength={20}
				/>
				<SimpleInput
					label={"Nombre del restaurante"}
					placeholder="Ej. Los Panchos"
					type={"text"}
					maxLength={20}
					minLength={20}
				/>
			</div>
		</form>
	)
}

