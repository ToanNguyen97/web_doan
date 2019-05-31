const isAuthenticated =  state => {
  if(state.token !== '' || state.token !== undefined)
  {
    return !!state.token
  }
  return false
}
const authStatus = state => state.status

const auth = state => state.user

export default {
  isAuthenticated,
  authStatus,
  auth
}