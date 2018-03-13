import db from '../firebase/firebase';

//ADD_EXPENSE
export const addExpense = (expense) => (dispatch) => {

  return db.ref('expenses').push(expense)  // adding expense to the database
    .then((ref) => {
      dispatch({                    // dispatching to the store
        type: 'ADD_EXPENSE',
        expense: {
          id: ref.key,
          ...expense
        }
      });
    })
    .catch((e) => {
      console.error('Could not add expense to the data base!', e);      
    });
};

// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});