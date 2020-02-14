import {GET_HIGHLIGHT} from '../Type'

export default function Highlight(state={}, action={}){
    const {payload,type} = action
    
    switch(type){
        case GET_HIGHLIGHT:
            return {
                ...state,
                payload
            }
        
            
        default:
            return state

        }
    }