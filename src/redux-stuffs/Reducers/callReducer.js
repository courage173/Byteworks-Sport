import {GET_FIXTURES} from '../Type'

export default function Fix(state={}, action={}){
    const {payload,type} = action
    
    switch(type){
        case GET_FIXTURES:
            return {
                ...state,
                payload
            }
        
            
        default:
            return state

        }
    }