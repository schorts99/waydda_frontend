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


import Item from './Item';
import {FaFacebookF, FaTwitter, FaLinkedinIn} from 'react-icons/fa';
import {IoLogoInstagram} from 'react-icons/io';

function FooterSocial({alignItemsCenter}) {
	return (
		<div
			className={`grid grid-cols-12 mx-0 mt-3 justify-center${alignItemsCenter ? ' h-full align-items-center' : ''}`}>
			<div className="md:col-span-8 col-span-12 p-0">
				<div className="grid grid-cols-12 flex justify-center items-center m-0">
					<Item Icon={FaFacebookF} href="https://www.facebook.com/az4chii"/>
					<Item Icon={IoLogoInstagram} href="https://www.instagram.com/az4chii/"/>
					<Item Icon={FaTwitter} href="https://twitter.com/az4chii"/>
					<Item Icon={FaLinkedinIn} href="https://www.linkedin.com/company/azachii"/>
				</div>
			</div>
		</div>
	);
}

export default FooterSocial;
