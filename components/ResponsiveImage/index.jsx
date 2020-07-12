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
	
	const MEDIUM_HEIGHT = height / 2;
	const MEDIUM_WIDTH = width / 2;
	const SMALL_HEIGHT = height / 2.5;
	const SMALL_WIDTH = width / 2.5;
	
	return (
		<LazyLoadImage
			alt={alt}
			className={`${className}`}
			wrapperClassName={wrapperClass}
			effect="blur"
			visibleByDefault={byDefault}
			draggable={false}
			placeholderSrc={GetImageUrl({publicId, width: 50, height: 50, fit, bgColor})}
			src={GetImageUrl({publicId, height, width, fit, bgColor})}
			srcSet={`
			${GetImageUrl({publicId, width: 200, height: 200, fit, bgColor})} 200w,
			${GetImageUrl({publicId, width: 529, height: 529, fit, bgColor})} 529w,
			${GetImageUrl({publicId, width: 529, height: 529, fit, bgColor})} 529w,
			${GetImageUrl({publicId, width: 761, height: 761, fit, bgColor})} 761w,
			${GetImageUrl({publicId, width: 950, height: 950, fit, bgColor})} 950w,
			${GetImageUrl({publicId, width: 1153, height: 1153, fit, bgColor})} 1153w,
			${GetImageUrl({publicId, width: 1297, height: 1297, fit, bgColor})} 1297w,
			${GetImageUrl({publicId, width: width, height: height, fit, bgColor})} 1400w,
			`}
			// srcset={`${GetImageUrl({publicId, height, width, fit, bgColor})} 10400w, ${GetImageUrl({publicId, MEDIUM_WIDTH, MEDIUM_HEIGHT, fit, bgColor })} 640w, ${GetImageUrl({publicId, SMALL_WIDTH, SMALL_HEIGHT, fit, bgColor })} 640w`}
		/>
	)
}