import React from 'react';
import { connect } from 'react-redux';

import CatFact from './components/CatFact';
import { getFact } from './actions/factsActions';

import './App.css';

function App(props) {

  const { loading, error, getFact, fact } = props;

  const handleClick = () => {
    getFact();
  }
  
  return (
    <div className='App'>
      <h1>Daily Cat Facts</h1>
      <h3>Today's Fact:</h3>
      {
        (error !== '') && <h3>{error}</h3>
      }
      {
        loading ? <h3>Loading new fact...</h3> : <CatFact fact={fact} />
      }

      <button onClick={handleClick}>Get another cat fact!</button>
      <img src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cat-quotes-1543599392.jpg?crop=1.00xw:0.759xh;0,0&resize=980:*' 
        alt='kitten in a blanket' />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    fact: state.fact,
    loading: state.loading,
    error: state.error
  }
}

export default connect(mapStateToProps, {getFact})(App);