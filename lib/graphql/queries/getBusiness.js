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

const GET_BUSINESS_QUERY = gql`query getBusinessBySlug($slug:String!){
    getBusiness(slug:$slug ){
        address
        addressState
        country
        name
        phone
        slug
        cover
        social {
            whatsapp
            instagram
            facebook
            tiktok
            twitter
        }
        items {
            name
            products {
                id
                name
                description
                price
                aggregatesRequired
                maxAggregates
                aggregates {
                    name
                    description
                    default
                    price
                }
            }
        }
    }
}`


export default GET_BUSINESS_QUERY
