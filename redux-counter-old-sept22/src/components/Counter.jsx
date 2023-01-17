import React from 'react';
import { connect } from 'react-redux';

function Counter (props) {
   return (
       <div>
           <h1>{props.counter}</h1>
           <button onClick={props.increment}>Increment</button>
           <button onClick={props.decrement}>Decrement</button>
       </div>
   )
}

const mapStateToProps = (state) => ({
   counter: state.counter.counterValue
})

const mapDispatchToProps = (dispatch) => ({
   increment: () => dispatch({ type: "INCREMENT_COUNTER_VALUE" }),
   decrement: () => dispatch({ type: "DECREMENT_COUNTER_VALUE" }),

});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

