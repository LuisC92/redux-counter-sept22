const initialState = {
    counterValue: 0
 }

 const CounterReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'INCREMENT_COUNTER_VALUE':
            return { counterValue: state.counterValue + 1 };
        case 'DECREMENT_COUNTER_VALUE':
            return { counterValue: state.counterValue - 1};
        default:
            return state;
    }
 }
 
 export default CounterReducer;
 