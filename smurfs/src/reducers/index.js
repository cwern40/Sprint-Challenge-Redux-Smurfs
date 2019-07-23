import {
  GET_SMURFS_START,
  GET_SMURFS_SUCCESS,
  GET_SMURFS_FAILED,
  ADD_SMURF_START,
  ADD_SMURF_SUCCESS,
  ADD_SMURF_FAILED,
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
        fetchingSmurfs: false,
        error: action.payload
      }
    }
    case ADD_SMURF_START: {
      return {
        ...state,
        addingSmurf: true,
        error: null,
      }
    }
    case ADD_SMURF_SUCCESS: {
      return {
        ...state,
        smurfs: action.payload,
        addingSmurf: false,
      }
    }
    case ADD_SMURF_FAILED: {
      return {
        addingSmurf: false,
        error: action.payload,
      }
    }
    default:
      return state
  }
}