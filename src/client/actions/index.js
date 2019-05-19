export const FETCH_USERS = "fetch_users";
export const FETCH_CURRENT_USER = "fetch_current_user";
export const fetchUsers = () => async (dispatch, getState, api) => {
  try {
    const res = await api.get("/users");
    dispatch({
      type: FETCH_USERS,
      data: res.data
    });
  } catch (exp) {}
};

export const fetchCurrentUser = () => async (dispatch, getState, api) => {
  try {
    const res = await api.get("/current_user");
    dispatch({
      type: FETCH_CURRENT_USER,
      data: res.data
    });
  } catch (error) {}
};
