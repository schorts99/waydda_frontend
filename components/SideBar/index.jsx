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

import Item from './Item';
import Social from '../Footer/Social';
import PropTypes from 'prop-types';

function Sidebar({isOpen, locales}) {
	return (
		<div
			id={"sidebar"}
			className="transition-all duration-500 ease-in-out bg-white fixed h-full w-full top-0 shadow sm:hidden"
			style={{
				left: isOpen ? 0 : '-100%',
				zIndex: 1,
			}}
		>
			<div className="grid grid-cols-12 mx-0 mt-12" style={{height: 'calc(100% - 3rem)'}}>
				<div className="col-span-12 mt-1 p-0 flex justify-between" style={{flexDirection: 'column'}}>
					<div className="grid grid-cols-12 m-0">
						{locales.items.map((item, index) => (
							<Item {...item} key={index}/>
						))}
					</div>
					<div className="grid grid-cols-12 m-0">
						<div className="col-span-12 p-0 mb-16">
							<Social/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

Sidebar.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	locales: PropTypes.object.isRequired,
};

export default Sidebar;