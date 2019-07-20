import axios from 'axios';

export const GET_SMURFS_START = 'GET_SMURFS_START'
export const GET_SMURFS_SUCCESS = 'GET_SMURFS_SUCCESS'
export const GET_SMURFS_FAILED = 'GET_SMURFS_FAILED'

export const ADD_SMURF_START = 'ADD_SMURF_START'
export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS'
export const ADD_SMURF_FAILED = 'ADD_SMURF_FAILED'

//action of retrieving the smurfs from the server
export function getSmurfs() {
  return(dispatch) => {
    dispatch({ type: GET_SMURFS_START })

    axios.get('http://localhost:3333/smurfs')
      .then((res) => {
        dispatch({ type: GET_SMURFS_SUCCESS, payload: res.data})
      })
      .catch((err) => {
        dispatch({ type: GET_SMURFS_FAILED, payload: err})
      })
  }
}

// function to add a smurf to the server
export function addSmurf(smurf) {
  dispatch({ type: ADD_SMURF_START })

  axios.post('http://localhost:3333/smurfs', smurf)
    .then((res) => {
      dispatch({ type: ADD_SMURF_SUCCESS, payload: res.data })
    })
    .catch((err) => {
      dispatch({ type: ADD_SMURF_FAILED, paylod:err.data })
    })
}