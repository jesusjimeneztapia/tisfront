import createInstance from './http'

const welcomeService = createInstance({ url: '/welcome' })

export async function welcome() {
	const response = await welcomeService.get()
	return response.data
}
