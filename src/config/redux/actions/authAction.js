export const LoginEmail = (email, password) => {
    return (dispatch) => {
        dispatch({ type: "SET_DATA_LOGIN", payload: {email, password} })
    }
}
