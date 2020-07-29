import PropTypes from 'prop-types'
import Map from "../../Map";
import ContactForm from "../ContactForm";

export default function ContactPlace({coordinates, address, addressState}) {
	return (
		<>
			{coordinates && (
				<Map
					marker={[parseFloat(coordinates.split(',')[0]), parseFloat(coordinates.split(',')[1])]}
					center={[parseFloat(coordinates.split(',')[0]), parseFloat(coordinates.split(',')[1])]}
					address={address}
					city={addressState}
				/>
			)
			}
			<ContactForm/>
		</>
	)
}

ContactPlace.propTypes = {
	address: PropTypes.string.isRequired,
	addressState: PropTypes.string.isRequired,
	coordinates: PropTypes.string
}