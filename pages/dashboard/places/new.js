/*
 * Copyright (c) AzaChii and its affiliates. All Rights Reserved.
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited
 *
 * Proprietary and confidential
 *
 * Written by AzaChii <hello@azachii.dev>, July 2020
 *
 * https://azachii.dev/
 *
 * LICENSE file in the root directory of this source tree.
 */


import DashboardLayout from "../../../components/Layouts/Dashboard";
import CreatePlaceComponent from "../../../components/Dashboard/Places/Create";
import Head from "next/head";

export default function CreatePlacePage() {
	return (
		<DashboardLayout>
			<Head>
				<link href='https://api.mapbox.com/mapbox-gl-js/v1.11.1/mapbox-gl.css' rel='stylesheet'/>
			</Head>
			<CreatePlaceComponent/>
		</DashboardLayout>
	)
}
