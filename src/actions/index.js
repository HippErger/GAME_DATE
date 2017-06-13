export function loadUsers() {
  return function (dispatch) {
    fetch('/users')
    .then(response => {
      return response.json();
    }).then(users => {
      dispatch(usersLoaded(users));
    });
  };
}

function usersLoaded(users) {
  return {
    type: 'USERS_LOADED',
    value: users
  };
}


export function createUser(v) {
  return function (dispatch) {
    fetch('/users', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(v)
    }).then(() => dispatch(userCreated()));
  };
}

function userCreated(user) {
  return {
    type: 'USERS_CREATED',
    value: user
  };
}


export function deleteUser(r) {
  return function (dispatch) {
    fetch('/users', {
      method: 'Delete',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(r)
    })
    .then(() => dispatch(userDeleted));
  };
}

function userDeleted(user) {
  return {
    type: 'USERS_DELETED',
    value: user
  };
}
