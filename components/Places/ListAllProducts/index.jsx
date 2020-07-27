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

import {useState, useEffect} from 'react';
import CategoryList from "../CategoryList";
import ShowProduct from '../../Product/Show';
import Modal from '../../Modal';

export default function ListAllProducts({data}) {
	const [isModalOpen, setIsModalOpen] = useState();
	const [productsTotal, setProductsTotal] = useState(0);
	const [modalData, setModalData] = useState({contentLabel: 'Moose'});

	useEffect(() => {
		if (data.items.length > 1) {
      setProductsTotal(data.items.reduce((accumulator, currentValue) => (
        typeof accumulator === 'object' ? accumulator.products.length + currentValue.products.length : accumulator + currentValue.products.length
      )));
    } else {
		  setProductsTotal(data.items[0].products.length);
    }
	}, []);

	function customSetModalData(data) {
		if (modalData.data) {
			if (data.id !== modalData.data.id) {
				setModalData({
					contentLabel: data.name,
					data,
				});
			}
		} else {
			setModalData({
				contentLabel: data.name,
				data,
			});
		}
		setIsModalOpen(true);
	}

	return (
		<div className="grid grid-cols-12 items-center bg-background md:bg-transparent">
			<div className="col-span-12 z-10 px-4 md:px-0 bg-white border-b">
				<div className="grid grid-cols-3 items-center py-4">
					<div className="col-span-2">
						<h1 className="text-lg font-bold uppercase">Todos los productos</h1>
					</div>
					<div className="col-span-1 text-right">
						<span className="text-sm text-gray-600 md:font-bold md:text-gray-700">
							{productsTotal} en total
						</span>
					</div>
				</div>
			</div>
			{data.items.length > 0 && (
				<>
					<Modal
						isOpen={isModalOpen}
						onRequestClose={() => setIsModalOpen(false)}
						contentLabel={modalData.contentLabel}
					>
						{modalData.data && <ShowProduct {...modalData.data} />}
					</Modal>
					{data.items.map((item, i) => {
						if (item.products.length > 0) {
							return (
								<CategoryList
									key={i}
									name={encodeURI(item.name.toLowerCase())}
									products={item.products}
									count={item.products.length}
									label={item.name}
									setModalData={customSetModalData}
								/>
							)
						} else {
							return null
						}
					})}
				</>
			)}
		</div>
	)
}
