import axios from 'axios';

export const GET_JOKE = 'GET_JOKE';
export const GET_JOKE_SUCCESS = 'GET_JOKE_SUCCESS';
export const GET_JOKE_FAIL = 'GET_JOKE_FAIL';

export const setJoke = () => dispatch => {
    dispatch({type: GET_JOKE});
    axios
    .get("https://sv443.net/jokeapi/v2/joke/Programming")
    .then(res => {
        console.log(res.data.joke)
        dispatch({type: GET_JOKE_SUCCESS, payload: res.data.joke
        })
    })
    .catch(err =>
        dispatch({type: GET_JOKE_FAIL, payload: err})
    )
};