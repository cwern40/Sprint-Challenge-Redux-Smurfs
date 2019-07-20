/*
  Be sure to import in all of the action types from `../actions`
*/

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
    default:
      return state
  }
}