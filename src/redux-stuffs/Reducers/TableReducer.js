import {GET_TABLE} from '../Type'

export default function Standing(state={}, action={}){
    const {payload,type} = action
    
    switch(type){
        case GET_TABLE:
            return {
                ...state,
                payload
            }
        
            
        default:
            return state

        }
    }