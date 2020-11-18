import { GET_LEADS, DELETE_LEAD } from '../actions/types.js';

const initialState = {
  leads: []
};

export default function(state = initialState, action){
  switch(action.type){
    case GET_LEADS:
      return {
        ...state, //this includes whether are in the state
        leads: action.payload
      };
    case DELETE_LEAD:
      return {
        ...state, //this includes whether are in the state
        leads: state.leads.filter(lead => lead.id !== action.payload)
      };

    default:
      return state;
  }
};