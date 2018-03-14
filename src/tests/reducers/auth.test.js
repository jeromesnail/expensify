import authReducer from '../../reducers/auth';

test('should set uid for login', () => {
  const uid = 'some-id';
  const state = authReducer(undefined, { type: 'LOGIN', uid });
  expect(state.uid).toBe(uid);
});

test('should clear uid for logout', () => {
  const currentState = { uid: 'some-id' };
  const state = authReducer(currentState, { type: 'LOGOUT' });
  expect(state).toEqual({});
});