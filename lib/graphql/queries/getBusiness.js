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

import gql from "graphql-tag";

const GET_BUSINESS_QUERY = gql`
  query getBusinessBySlug($slug: String!) {
    getBusiness(slug: $slug) {
      address
      addressState
      country
      coordinates
      name
      phone
      profile
      slug
      cover
      social {
        facebook
        instagram
        tiktok
        twitter
        whatsapp
        youtube
      }
      items {
        name
        products {
          name
          price
          description
          photo
          id
          aggregates {
            default
            name
            description
            price
          }
          aggregatesRequired
          maxAggregates
        }
      }
    }
  }
`


export default GET_BUSINESS_QUERY
