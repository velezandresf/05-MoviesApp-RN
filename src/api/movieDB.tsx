import axios from "axios";

const movieDb = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: 'b6d42cbdb1678d78ea47cf02f1eba9cf',
        language: 'en-US'
    }
});

export default movieDb;