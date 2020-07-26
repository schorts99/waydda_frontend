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

export default function FooterSocialItem({Icon, href}) {
	return (
		<div className="md:col-span-3 col-span-3 p-0 flex justify-center md:justify-start">
			<a href={href} target="_blank">
				<Icon size={20}/>
			</a>
		</div>
	)
}
