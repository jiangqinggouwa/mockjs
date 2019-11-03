export const click = (value) => (dispatch) => {
    setTimeout(() => {
        dispatch({
            type: 'async',
            value
        })
    }, 1000);
}
