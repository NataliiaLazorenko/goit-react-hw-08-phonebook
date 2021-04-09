const getIsAuthenticated = state => state.auth.token;
const getUserEmail = state => state.auth.user.email;

const authSelectors = { getIsAuthenticated, getUserEmail };

export default authSelectors;
