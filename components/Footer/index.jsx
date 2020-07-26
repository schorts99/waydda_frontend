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

import Social from './Social';
import {GrSpotify, GrMedium} from 'react-icons/gr';
import {AiOutlineSlack} from 'react-icons/ai';
import PropTypes from 'prop-types';

function Footer({locales, moreSpaceInFooter}) {
	return (
		<footer style={{background: "#fafafa", borderTop: "1px solid #eaeaea"}}
		        className={`flex m-0 justify-center py-10 ${moreSpaceInFooter ? "mb-20 md:mb-0" : ""}`}>
			<div className="w-11/12 p-0">
				<div className="grid grid-cols-12 m-0">
					<div className="col-span-12 md:col-span-4 p-0">
						<h2 className="font-bold text-lg mb-6">
							{locales.services.title}
						</h2>
						<p className="mb-2 text-sm mb-4">
							Consultoría
						</p>
						<p className="mb-2 text-sm mb-4">
							Desarrollo de Software
						</p>
						<p className="mb-2 text-sm mb-6">
							Producción multimedia
						</p>
					</div>
					<div className="col-span-12 md:col-span-4 p-0">
						<h2 className="font-bold text-lg mb-6">
							{locales.about.title}
						</h2>
						<a className="grid grid-cols-12 mx-0 mb-4 align-center" href={locales.about.channel} target="_blank">
							<div className="col-span-12 self-center items-center inline">
								<AiOutlineSlack size={20} className={"inline"}/>
								<p className="ml-3 inline text-sm">
									Chatea con nosotros
								</p>
							</div>
						</a>
						<a className="grid grid-cols-12 mx-0 mb-4 items-center" href={locales.about.blog} target="_blank">
							<div className="col-span-12 self-center items-center inline">
								<GrMedium size={20} className={"inline"}/>
								<p className="ml-3 inline text-sm">
									Blog
								</p>
							</div>
						</a>
						<a className="grid grid-cols-12 mb-4 items-center" href={locales.about.podcast} target="_blank">
							<div className="col-span-12 self-center items-center inline">
								<GrSpotify size={20} className={"inline"}/>
								<p className="ml-3 inline text-sm">
									Podcast
								</p>
							</div>
						</a>
					</div>
					<div className="col-span-12 md:col-span-4 p-0 mt-4 md:mt-0">
						<h2 className="font-bold text-lg mb-6">
							{locales.contact.title}
						</h2>
						<a className="text-sm" href={`mailto:${locales.contact.email}`}>{locales.contact.email}</a>
						<div className="grid grid-cols-12 mt-12 md:mt-4">
							<div className="col-span-12 p-0 sm:hidden md:block">
								<Social/>
							</div>
						</div>
					</div>
					<div className="col-span-6 p-0 hidden sm:block md:hidden">
						<Social alignItemsCenter/>
					</div>
				</div>
			</div>
		</footer>
	);
}

Footer.propTypes = {
	locales: PropTypes.object.isRequired,
	moreSpaceInFooter: PropTypes.bool.isRequired
}


export default Footer;

Footer.defaultProps = {
	moreSpaceInFooter: false
}
