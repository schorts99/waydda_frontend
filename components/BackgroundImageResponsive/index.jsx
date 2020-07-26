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

import {useEffect, useRef} from "react";

export default function BackgroundImageResponsive({placeholder, src, className, children, imageClassName}) {

	const hdImage = useRef();

	useEffect(() => {
		const newImage = document.createElement("img");
		const hdImageRef = hdImage.current;
		newImage.src = src;
		newImage.onload = () => {
			hdImageRef.setAttribute(
				"style",
				`background-image: url('${src}')`
			);
			hdImageRef.classList.add(`opacity-100`);
		};

	}, [])

	return (
		<div
			className={`relative overflow-hidden ${
				className ? className : ""
			}`}
		>
			<div
				className={`absolute z-20 top-0 bg-cover bg-no-repeat bg-center right-0 bottom-0 left-0 opacity-0 ${imageClassName ? imageClassName : ""}`}
				ref={hdImage}/>
			<div
				className={`absolute z-10 top-0 bottom-0 left-0 right-0 bg-center bg-cover bg-no-repeat ${imageClassName ? imageClassName : ""}`}
				style={{
					backgroundImage: `url('${placeholder}')`,
					filter: "blur(12px)"
				}}
			/>
			{children}
		</div>
	)
}
