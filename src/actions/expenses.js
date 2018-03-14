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
    .catch((e) => { console.error(e); });
};

// REMOVE_EXPENSE
export const proutremoveExpense = (id) => ({
  type: 'REMOVE_EXPENSE',
  id
});

export const removeExpense = (id) => (dispatch) => {
  return db.ref(`expenses/${id}`).remove()
    .then(() => {
      dispatch({
        type: 'REMOVE_EXPENSE',
        id
      });
    }).catch((e) => { console.error(e); });
}

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

// SET_EXPENSES
export const setExpenses = () => (dispatch) => {
  return db.ref('expenses').once('value')
    .then((snapshot) => {
      const expenses = [];
      snapshot.forEach((childSnapshot) => {
        expenses.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });
      dispatch({
        type: 'SET_EXPENSES',
        expenses
      });
    }).catch((e) => { console.error(e); });
};