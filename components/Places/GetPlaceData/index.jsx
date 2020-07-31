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

import ListAllProducts from "../ListAllProducts";
import dynamic from 'next/dynamic'
const ContactPlace = dynamic(() => import('../Contact'), {
	ssr: false
})
const WhatsAppButton = dynamic(() => import('../../WhatsAppButton'), {
	ssr: false
})

export default function GetPlaceData({data}) {
	return (
		<>
			<ListAllProducts data={data}/>
			{data.whatsapp && <WhatsAppButton data={data.whatsapp}/>}
			<ContactPlace addressState={data.adressState} address={data.address}/>
		</>
	)
}