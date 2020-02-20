import React from 'react';
import {connect} from 'react-redux';
import Loader from 'react-loader-spinner';
import {setJoke} from '../actions';

const Joke = props => {

    return (
        <div>
        <button onClick={props.setJoke}>Get Joke</button>
        {!props.activity && !props.isLoading && (<h2>Go ahead and get a new joke.</h2>)}
            
            {props.isLoading && (
                <Loader
                type="Puff"
                color="#00BFFF"
                height={100}
                width={100}
                timeout={3000}
              />
            )}

            {props.setJoke && !props.isLoading && (
            <h2>{props.joke}</h2>
            )}
        </div>
    )
}

const mapStateToProps = state => {
    return {
    isLoading: state.isLoading,
    setJoke: state.setJoke,
    error: state.error
}
};

export default connect(mapStateToProps, {setJoke})(Joke);