import React from 'react';
import {connect} from 'react-redux';
import Loader from 'react-loader-spinner';
import {setJoke} from '../actions';

const Joke = props => {

    return (
        <section>
            <button onClick={props.setJoke}>Get Joke</button>
            {!props.setJoke && !props.isLoading && (
                <h2>Get new Joke!</h2>
            )}
            {props.isLoading && (
                <Loader
                type="Puff"
                color="#00BFFF"
                height={100}
                width={100}
                timeout={3000} //3 secs
              />
            )}
            {props.setJoke && !props.isLoading && (
                <div >
                    <h2>{props.setJoke.setJoke}</h2>

                </div>
                
            )}
            
        </section>
    )
}

const mapStateToProps = state => ({
    isLoading: state.isLoading,
    error: state.error,
    setJoke: state.setJoke
});

export default connect(mapStateToProps, {setJoke})(Joke);