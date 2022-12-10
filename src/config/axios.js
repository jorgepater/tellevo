import axios from 'axios';
import env from '../../utility/env';

// env.apiUrl

const clientAxios = axios.create({
    baseURL: `${env.apiUrl}/api`,
    headers: {'Content-Type': 'application/json'}
});

export default clientAxios;
