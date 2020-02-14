import {combineReducers} from 'redux'
import Fix from './Reducers/callReducer';
import Standing from './Reducers/TableReducer';
import Highlight from './Reducers/Higlights'


export default combineReducers({
    Fix,
    Standing,
    Highlight
})