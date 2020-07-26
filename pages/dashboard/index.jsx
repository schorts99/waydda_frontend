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
import React from 'react';
import DashboardLayout from "../../components/Layouts/Dashboard";
import {NextSeo} from 'next-seo';
import ListLastActivity from "../../components/Dashboard";

export default function DashboardPage() {
	return (
		<>

			<DashboardLayout>
				<NextSeo
					title={"Panel de control | Waydda"}
					noindex={true}
					nofollow={true}
					canonical={"https://waydda.com/dashboard"}
					descripion={"Administra tu negocio - Waydda"}
				/>
				<ListLastActivity/>
			</DashboardLayout>
			<style jsx global>{`
				body{
					background: #fafafa;
				}
			`}</style>
		</>
	)
}
