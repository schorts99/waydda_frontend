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

export default function AggregateItem({name, price, description}) {
  return (
    <div className="px-4 py-2 flex justify-between items-center">
      <div>
        <h5 className="md:text-lg">
          {name}
        </h5>
        <p className="text-xs md:text-sm text-gray-700">
          {description}
        </p>
      </div>
      <p className="ml-4">
        + ${price}
      </p>
    </div>
  );
}
