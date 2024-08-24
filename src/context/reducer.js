export const initialState = {
  users_data: JSON.parse(localStorage.getItem('users_data')) || [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'REGISTER_USER':
      const updatedUsers = [...state.users_data, action];
      localStorage.setItem('users_data', JSON.stringify(updatedUsers));
      return {
        ...state,
        users_data: updatedUsers,
      };
    default:
      return state;
  }
};
