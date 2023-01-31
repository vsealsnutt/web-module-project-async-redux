import React from 'react';
import { connect } from 'react-redux';
import CatFact from './components/CatFact';
import data from './data/facts';

import './App.css';

function App(props) {

  const { data, loading, error } = props;

  if (error !== '') {
    return <h3>{error}</h3>;
  }
  
  return (
    <div className='App'>
      <h1>Daily Cat Facts</h1>
      {
        loading ? <h3>Loading new fact...</h3> : <CatFact data={data} />
      }

      <button>get another cat fact!</button>
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

export default connect(mapStateToProps, {})(App);