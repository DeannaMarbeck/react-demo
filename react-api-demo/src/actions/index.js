import gitHub from '../api/gitHub';

export const fetchData = () => {
    const user = 'deannamarbeck';
    return async dispatch => {
        const response = await gitHub.get(`/users/${user}`);
        dispatch({ type: 'FETCH_DATA', payload: response.data })
    };
};
