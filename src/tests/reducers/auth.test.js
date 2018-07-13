import authReducer from '../../reducers/auth';

test('should set user uid for login', () => {
  const action = {
    type: 'LOGIN',
    uid: '123'
  };
  const state = authReducer(undefined, action);
  expect(state).toEqual({
    uid: '123'
  });
});

test('should clear user uid for logout', () => {
  const action = {
    type: 'LOGOUT'
  };
  const state = authReducer({ uid: 'abc123' }, action);
  expect(state).toEqual({});
});
