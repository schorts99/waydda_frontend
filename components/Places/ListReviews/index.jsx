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

import PropTypes from 'prop-types'
import Review from "../../Review";

export default function ListReviews({withTitle, reviews}) {
	return (
		<div className="grid grid-cols-2 bg-background">
			{withTitle &&
			<div className="col-span-2 px-4 sticky top-0 z-20 bg-white border-b mb-6">
				<div className="grid grid-cols-2 items-center py-4">
					<div className="col-span-1">
						<h1 className="text-lg font-bold uppercase">Reseñas</h1>
					</div>
					<div className="col-span-1 text-right">
						<span className="text-sm text-gray-600">
							{reviews.count} en total
						</span>
					</div>
				</div>
			</div>
			}
			{
				reviews.items &&
			<div className="col-span-2 px-4">
				{reviews.items.map((review, i) => (
					<Review
						key={i}
						comment={review.comment}
						date={review.date}
						stars={review.stars}
						user={review.user}
					/>
				))}
			</div>
			}
		</div>
	)
}

ListReviews.propTypes = {
  reviews: PropTypes.any,
  withTitle: PropTypes.bool
}

ListReviews.defaultProps = {
  reviews: [],
  withTitle: true
}