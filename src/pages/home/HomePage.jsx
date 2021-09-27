import { useState } from 'react'
import { useWelcome } from '../../context/providers/WelcomeContext'
import Page from '../Page'

export default function HomePage() {
	const { errorMessage, isLoading, loadMessage, message } = useWelcome()
	const [showMessage, setShowMessage] = useState(false)

	const handleClick = () => {
		setShowMessage(true)
		loadMessage()
	}

	return (
		<Page>
			{showMessage ? (
				<h1 style={{ textAlign: 'center' }}>
					{isLoading ? 'Cargando...' : errorMessage || message}
				</h1>
			) : (
				<>
					<p style={{ textAlign: 'center' }}>
						Para ver el mensaje de la API, presione el siguiente
						botón:
					</p>
					<button onClick={handleClick}>Mostrar mensaje</button>
				</>
			)}
		</Page>
	)
}
