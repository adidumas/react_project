import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://riabooksapi.azurewebsites.net',
	headers: {
		'Content-type': 'application/json',
		'Accept': 'application/json'
	}
});

export default instance;
