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

export default function SimpleButton({text, handleClick, className, type}) {
	return (
		<button
			type={type}
			onClick={handleClick}
			className={`bg-black py-4 w-full px-3 text-white font-bold rounded shadow-2xl ${className ? className : ""}`}>{text}</button>
	)
}
