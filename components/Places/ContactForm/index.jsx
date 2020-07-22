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

import SimpleInput from "../../Input";
import SimpleButton from "../../Button";
import {useState} from "react";

export default function ContactForm() {
	const [success, setSuccess] = useState(false);
	
	const [fields, setFields] = useState({
		name: "",
		email: "",
		comment: ""
	})
	
	const handleSubmit = (e) => {
		e.preventDefault();
		setFields({name: "", email: "", comment: ""});
		setSuccess(true);
		setTimeout(() => {
			setSuccess(false);
		}, 5000)
	}
	
	const onHandleChange = (e) => {
		setFields({...fields, [e.target.name]: e.target.value})
	}
	
	return (
		<div className="grid grid-cols-12 bg-black px-3 py-5">
			<div className="col-span-12 text-center mb-5">
				<h3 className="text-2xl text-white font-bold">
					Ponte en contacto con nosotros
				</h3>
			
			</div>
			<div className="col-span-12 bg-white px-4 py-4">
				<form
					onSubmit={(e) => {
						// e.preventDefault();
						handleSubmit(e)
					}}
					className="grid grid-cols-12">
					{success &&
					<div className="col-span-12 mt-2 mb-4">
						<div className="bg-green-700 py-2 text-center rounded text-white">
							<h4 className="font-bold text-sm">¡Se ha enviado tu comentario!</h4>
						</div>
					</div>
					}
					<div className="col-span-12">
						<SimpleInput
							label={"Nombre"}
							placeholder={"Ej. Luis"}
							value={fields.name}
							handleChange={onHandleChange}
							type={"text"}
							name={"name"}
						/>
						<SimpleInput
							label={"Correo Electrónico"}
							value={fields.email}
							handleChange={onHandleChange}
							placeholder={"luis@coreo.com"}
							type={"email"}
							name={"email"}
						/>
						<SimpleInput
							name={"comment"}
							label={"Comentarios"}
							handleChange={onHandleChange}
							value={fields.comment}
							placeholder={"Escribe aquí tu comentario"}
							type={"textarea"}
						/>
					</div>
					<div className="col-span-12">
						<SimpleButton
							// handleClick={onHandleClick}
							type={"submit"}
							text={"ENVIAR"}
						/>
					</div>
				</form>
			</div>
		</div>
	)
}