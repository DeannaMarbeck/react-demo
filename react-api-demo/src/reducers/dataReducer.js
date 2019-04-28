export default (state = {}, action) => {
    return (action.type === 'FETCH_DATA') ? action.payload : state;
};