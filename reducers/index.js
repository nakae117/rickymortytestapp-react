import { combineReducers } from 'redux';
import { obtenerPersonajes } from './personajes'

const rootReducer = combineReducers({
  personajes: obtenerPersonajes
});

export default rootReducer;