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

import Link from "next/link";
// import {MAIN_COLOR} from "../../../src/color_constant";
import ResponsiveImage from "../../ResponsiveImage";

export default function PlaceHeader({}) {
	return (
		<header className={`flex z-20 px-3 py-3 md:px-12 md:py-4 bg-white`}>
			<div className="md:w-2/12 lg:w-1/12 w-6/12">
				<h2>
					<Link href="/">
						<a className="font-title font-bold text-lg">
							Waydda
							{/*<ResponsiveImage*/}
							{/*	height={40}*/}
							{/*	width={100}*/}
							{/*	className="h-8"*/}
							{/*	wrapperClass={"block"}*/}
							{/*	srcsetSizes={{*/}
							{/*		w_480: {*/}
							{/*			height: 40,*/}
							{/*			width: 100,*/}
							{/*		},*/}
							{/*		w_1082: {*/}
							{/*			height: 40,*/}
							{/*			width: 100,*/}
							{/*		},*/}
							{/*		w_1523: {*/}
							{/*			width: 80,*/}
							{/*			height: 200*/}
							{/*		},*/}
							{/*		w_1920: {*/}
							{/*			width: 100,*/}
							{/*			height: 140*/}
							{/*		}*/}
							{/*	}}*/}
							{/*	publicId={"w_logo.png"}*/}
							{/*/>*/}
						</a>
					</Link>
				</h2>
			</div>
			<div className="md:w-10/12 lg:w-11/12 w-6/12 text-center flex items-center">
				<div className="w-full flex justify-end items-center">
					<h3 className="font-bold">MÉXICO</h3>
					<ResponsiveImage
						height={50}
						width={50}
						className="h-5 ml-5"
						wrapperClass={"block"}
						srcsetSizes={{
							w_480: {
								height: 50,
								width: 50,
							},
							w_1082: {
								height: 50,
								width: 50,
							},
							w_1523: {
								width: 50,
								height: 50
							},
							w_1920: {
								width: 50,
								height: 50
							}
						}}
						publicId={"flags.png"}
					/>
				</div>
			</div>
		</header>
	)
}
