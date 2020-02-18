import {GET_FIXTURES,GET_TABLE,GET_HIGHLIGHT} from '../Type'
import api from '../api'

//action for fixtures
export const Fixtures = (payload) => ({
    type: GET_FIXTURES,
    payload
})


//api call for fixtures
export const getFix = () => {
    return dispatch => api.apiCall.getFixtures().then(payload => dispatch(Fixtures(payload.result))) 
}
//Action for table statnding
export const Standing = (payload) => ({
    type: GET_TABLE,
    payload
})


//api call for standing
export const getTable = () => {
    return dispatch => api.apiCall.getTables().then(payload => dispatch(Standing(payload.result.total))) 
}

//Action for Video Highlights
export const Highlight = (payload) => ({
    type: GET_HIGHLIGHT,
    payload
})


//api call for highlight
export const getHighlight = () => {
    return dispatch => api.apiCall.getHighlights().then(payload => dispatch(Highlight(payload.result))) 
}