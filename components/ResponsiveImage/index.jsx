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

import GetImageUrl from "../../lib";
import {LazyLoadImage} from "react-lazy-load-image-component";

export default function ResponsiveImage({byDefault = false, className = "", alt, publicId = "", width = 100, height = 100, fit = "outside", bgColor = null, wrapperClass = ""}) {
	return (
		<LazyLoadImage
			alt={alt}
			className={`${className}`}
			wrapperClassName={wrapperClass}
			effect="blur"
			visibleByDefault={byDefault}
			draggable={false}
			placeholderSrc={GetImageUrl({publicId, width: 50, height: 50, fit, bgColor})}
			src={GetImageUrl({publicId, width, height, fit, bgColor})}
		/>
	)
}