export const getUser = (store) => {
  return store.auth.user;
};

export const getUserToken = (store) => {
  return store.auth.token;
};
