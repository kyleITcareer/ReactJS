import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID 594a88147b32648b778ffc1eb9d837b27df1c130b53b3b8f3d9a7667f8cbc9dd'
	}
});