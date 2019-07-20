import axios from 'axios';

export const GET_SMURFS_START = 'GET_SMURFS_START'
export const GET_SMURFS_SUCCESS = 'GET_SMURFS_SUCCESS'
export const GET_SMURFS_FAILED = 'GET_SMURFS_FAILED'

export function getSmurfs() {
  return(dispatch) => {
    dispatch({ type: GET_SMURFS_START })

    axios.get('http://localhost:3333/smurfs')
      .then((res) => {
        dispatch({ type: GET_SMURFS_SUCCESS, payload: res})
      })
      .catch((err) => {
        dispatch({ type: GET_SMURFS_FAILED, payload: err})
      })
  }
}