import {
  GET_SMURFS_START,
  GET_SMURFS_SUCCESS,
  GET_SMURFS_FAILED
} from '../actions/index';

//initial state values
const initialState =  {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: null
 }

//reducer
export default function(state = initialState, action) {
  switch(action.type) {
    case GET_SMURFS_START: {
      return {
        ...state,
        fetchingSmurfs: true,
        error: null
      }
    }
    case GET_SMURFS_SUCCESS: {
      return {
        ...state,
        smurfs: action.payload,
        fetchingSmurfs: false,
        error: null,
      }
    }
    case GET_SMURFS_FAILED: {
      return {
        ...state,
        fetchingSmurfs: false
      }
    }
    default:
      return state
  }
}