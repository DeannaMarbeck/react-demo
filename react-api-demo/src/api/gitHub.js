import axios from 'axios';

// Set base url for GitHub API
export default axios.create({
    baseURL: 'https://api.github.com'
});

