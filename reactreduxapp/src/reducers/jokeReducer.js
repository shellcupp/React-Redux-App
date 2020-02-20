import {GET_JOKE, GET_JOKE_SUCCESS, GET_JOKE_FAIL} from '../actions'

const initialState = {
    isLoading: false,
    error: '',
    setJoke:null
}
const jokeReducer = (state = initialState, action) => {
switch(action.type) {
    case GET_JOKE:
        return{
            ...state,
            isLoading: true
        }
        case GET_JOKE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                setJoke: action.payload
            }
        case GET_JOKE_FAIL:
            return {
                ...state,
                error: "error"
            }
        default:
            return state;
}
}
export default jokeReducer;