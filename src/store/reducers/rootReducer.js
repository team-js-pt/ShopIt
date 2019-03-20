import authReducer from './authReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase'
import productReducer from './productReducer';
import cartReducer from './cartReducer'

const rootReducer = combineReducers({
  auth: authReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
  products : productReducer,
  cart : cartReducer
});

export default rootReducer

// the key name will be the data property on the state object