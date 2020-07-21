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
import gql from 'graphql-tag'

const CREATE_PRE_REGISTER_USER  = gql`
    mutation preRegisterUserMutation($input:PreRegisterInput!){
        preRegister(
            input: $input
        )
    }
`

export {CREATE_PRE_REGISTER_USER}


