import db from '../firebase/firebase';
import { history } from '../routers/AppRouter';

//ADD_EXPENSE
export const addExpense = (expense) => (dispatch, getState) => {
  const uid = getState().auth.uid;
  return db.ref(`users/${uid}/expenses`).push(expense)  // adding expense to the database
    .then((ref) => {
      dispatch({                    // dispatching to the store
        type: 'ADD_EXPENSE',
        expense: {
          id: ref.key,
          ...expense
        }
      });
      history.push('/');
    }).catch((e) => { console.error(e); });
};

// REMOVE_EXPENSE
export const removeExpense = (id) => (dispatch, getState) => {
  const uid = getState().auth.uid
  return db.ref(`users/${uid}/expenses/${id}`).remove()
    .then(() => {
      dispatch({
        type: 'REMOVE_EXPENSE',
        id
      });
      history.push('/');
    }).catch((e) => { console.error(e); });
}

// EDIT_EXPENSE
export const editExpense = (id, updates) => (dispatch, getState) => {
  const uid = getState().auth.uid
  return db.ref(`users/${uid}/expenses/${id}`).update(updates)
    .then(() => {
      dispatch({
        type: 'EDIT_EXPENSE',
        id,
        updates
      });
      history.push('/');
    }).catch((e) => { console.error(e); });
}

// SET_EXPENSES
export const setExpenses = () => (dispatch, getState) => {
  const uid = getState().auth.uid;
  return db.ref(`users/${uid}/expenses`).once('value')
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