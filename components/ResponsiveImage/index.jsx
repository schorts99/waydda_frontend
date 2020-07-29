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

import GetImageUrl from "../../lib";
import {LazyLoadImage} from "react-lazy-load-image-component";

export default function ResponsiveImage({scrollPosition, srcsetSizes, byDefault = false, className = "", alt, publicId = "", width = 1000, height = 500, fit = "outside", bgColor = null, wrapperClass = ""}) {


	return (
		<LazyLoadImage
			scrollPosition={scrollPosition}
			alt={alt}
			className={`${className}`}
			wrapperClassName={wrapperClass}
			visibleByDefault={byDefault}
			draggable={false}
			placeholderSrc={GetImageUrl({publicId, width: 50, height: 50, fit, bgColor})}
			src={GetImageUrl({publicId, height, width, fit, bgColor})}
			sources='(min-width:1920px) 1920w, 100vw'
			srcSet={`
			${GetImageUrl({
				publicId,
				width: srcsetSizes ? srcsetSizes.w_480.width : 480,
				height: srcsetSizes ? srcsetSizes.w_480.height : 480,
				fit,
				bgColor
			})} 480w,
			${GetImageUrl({
				publicId,
				width: srcsetSizes ? srcsetSizes.w_1082.width : 1082,
				height: srcsetSizes ? srcsetSizes.w_1082.height : 1082,
				fit,
				bgColor
			})} 1082w,
			${GetImageUrl({
				publicId,
				width: srcsetSizes ? srcsetSizes.w_1523.width : 1523,
				height: srcsetSizes ? srcsetSizes.w_1523.height : 1523,
				fit,
				bgColor
			})} 1523w,
			${GetImageUrl({
				publicId,
				width: srcsetSizes ? srcsetSizes.w_1920.width : 1920,
				height: srcsetSizes ? srcsetSizes.w_1920.height : 1920,
				fit,
				bgColor
			})} 1920w,
			`}
			// srcset={`${GetImageUrl({publicId, height, width, fit, bgColor})} 10400w, ${GetImageUrl({publicId, MEDIUM_WIDTH, MEDIUM_HEIGHT, fit, bgColor })} 640w, ${GetImageUrl({publicId, SMALL_WIDTH, SMALL_HEIGHT, fit, bgColor })} 640w`}
		/>
	)
}
