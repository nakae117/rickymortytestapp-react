import { OBTENER_PERSONAJES } from '../actions'

const initialState = {
	list: []
}

export function obtenerPersonajes(state = initialState, action){
	switch (action.type) {
		case OBTENER_PERSONAJES:
			return Object.assign({}, state, { list: action.payload })
		case 'DECREMENT':
			return []
		default:
			return state
	}
}