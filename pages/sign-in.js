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

import LayoutUnAuthenticated from "../components/Layouts/Unauthenticated";
import {head} from '../locales/pages/sign-in.json'
import SignInForm from "../components/SignInForm";

export default function SignInPage() {
	return (
		<LayoutUnAuthenticated
			head={head}
		>
			<div className="grid grid-cols-12">
				<div className="col-start-2 col-span-10 md:col-span-4 md:col-start-5">
					<SignInForm/>
				</div>
			</div>
		</LayoutUnAuthenticated>
	)
}
