//Reducer => a function that takes in the old state, and an actions => new state

let transactions;

const contextReducer = (state, action) => {
    switch (action.type) {
        case 'DELETE_TRANSACTION':
          transactions = state.filter((transaction) => transaction.id !== action.payload);
    
          localStorage.setItem('transactions', JSON.stringify(transactions));
    
          return transactions;
        case 'ADD_TRANSACTION':
          transactions = [action.payload, ...state];
    
          localStorage.setItem('transactions', JSON.stringify(transactions));
    
          return transactions;
        default:
          return state;
      }
}

export default contextReducer;