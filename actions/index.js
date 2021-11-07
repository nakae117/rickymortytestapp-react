import axios from 'axios'

export const OBTENER_PERSONAJES = 'OBTENER_PERSONAJES'

export function obtenerPersonajes() {
	return (dispatch, getState) => {
		alert('ok then')
		axios.get('https://rickandmortyapi.com/api/character/')
			.then((response) => {
				dispatch({ type: OBTENER_PERSONAJES, payload: response.data })
			})
	}
}