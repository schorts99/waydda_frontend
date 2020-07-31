import PropTypes from 'prop-types'
import Map from "../../Map";
import ContactForm from "../ContactForm";
import WhatsAppButton from "../../WhatsAppButton";

export default function ContactPlace({data: {coordinates, address, addressState, slug, social: {whatsapp}}}) {
	return (
		<>
			<div className="flex w-11/12 mx-auto my-12">
				<div className="col-span-12 px-3 md:px-0 text-white">
					<h4 className="text-2xl font-bold">
						Ubicación
					</h4>
					<p className="font-bold my-2">{addressState}</p>
					<p className="text-sm md:text-base text-gray-700">{address}</p>
				</div>
			</div>
			<div className="flex w-11/12 mx-auto relative h-xxxl mb-40 z-20">
				<div className="w-full absolute top-0 bottom-0 left-0 right-0 h-full">
					{coordinates && (
						<>
							<Map
								marker={[parseFloat(coordinates.split(',')[0]), parseFloat(coordinates.split(',')[1])]}
								center={[parseFloat(coordinates.split(',')[0]), parseFloat(coordinates.split(',')[1])]}
								address={address}
								city={addressState}
							/>
						
						</>)
					}
					<div className="flex w-4/12 absolute top-0 justify-end z-0 right-0">
						<div className="w-full transform -translate-y-16 mr-12">
							<ContactForm/>
						</div>
					</div>
				</div>
			</div>
			{whatsapp && <WhatsAppButton
				data={{number: whatsapp, message: `Hola, visita mi menú en: https://waydda.vercel.app/places/${slug}`}}/>}
		</>
	)
}

ContactPlace.propTypes = {
	address: PropTypes.string.isRequired,
	addressState: PropTypes.string.isRequired,
	coordinates: PropTypes.string
}