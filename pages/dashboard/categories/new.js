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

import NewCategoryComponent from "../../../components/Dashboard/Categories/Create";
import DashboardLayout from "../../../components/Layouts/Dashboard";

export default function NewPlacePage() {
	return (
		<DashboardLayout>
			<NewCategoryComponent/>
		</DashboardLayout>
	)
}

